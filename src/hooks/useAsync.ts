import { useSafeDispatch } from "./useSafeDispatch";
import { useCallback, useReducer } from "react";

type AsyncState<TData> =
  | {
      status: "idle" | "pending";
      data?: null;
      error?: null;
    }
  | {
      status: "resolved";
      data: TData;
      error: null;
    }
  | {
      status: "rejected";
      data: null;
      error: Error;
    };

type AsyncAction<TData> =
  | { type: "reset" }
  | { type: "pending" }
  | { type: "resolved"; data: TData }
  | { type: "rejected"; error: Error };

const asyncReducer = <TData>(
  _state: AsyncState<TData>,
  action: AsyncAction<TData>
) => {
  switch (action.type) {
    case "pending": {
      return { status: "pending" as const, data: null, error: null };
    }
    case "resolved": {
      return { status: "resolved" as const, data: action.data, error: null };
    }
    case "rejected": {
      return { status: "rejected" as const, data: null, error: action.error };
    }
    default: {
      throw new Error(`Unhandled action: ${JSON.stringify(action)}`);
    }
  }
};

export const useAsync = <TData>(
  initialState?: AsyncState<TData>
): {
  setData: (data: TData) => void;
  setError: (error: Error) => void;
  error: Error | null | undefined;
  status: "pending" | "resolved" | "rejected" | "idle";
  data: TData | null | undefined;
  run: (promise: Promise<TData>) => void;
} => {
  const [{ data, error, status }, unsafeDispatch] = useReducer<
    React.Reducer<AsyncState<TData>, AsyncAction<TData>>
  >(asyncReducer, {
    status: "idle",
    data: null,
    error: null,
    ...initialState,
  });
  const dispatch = useSafeDispatch(unsafeDispatch);

  const run = useCallback(
    (promise: Promise<TData>) => {
      dispatch({ type: "pending" });
      promise.then(
        (data) => {
          dispatch({ type: "resolved", data });
        },
        (error: Error) => {
          dispatch({ type: "rejected", error });
        }
      );
    },
    [dispatch]
  );

  const setData = useCallback(
    (data: TData) => dispatch({ type: "resolved", data }),
    [dispatch]
  );

  const setError = useCallback(
    (error: Error) => dispatch({ type: "rejected", error }),
    [dispatch]
  );

  return {
    setData,
    setError,
    error,
    status,
    data,
    run,
  };
};
