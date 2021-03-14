import { useCallback, useLayoutEffect, useRef } from "react";

export const useSafeDispatch = <TAction>(
  dispatch: React.Dispatch<TAction>
): ((value: TAction) => void) => {
  const mounted = useRef(false);

  useLayoutEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const safeDispatch = useCallback(
    (...args: Parameters<typeof dispatch>) => {
      if (mounted.current) {
        dispatch(...args);
      }
    },
    [dispatch]
  );

  return safeDispatch;
};
