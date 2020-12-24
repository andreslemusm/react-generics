import { useState, useRef, useEffect } from "react";

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T
): readonly [T, React.Dispatch<T>] => {
  const [value, setValue] = useState(() => {
    const storedValue = window.localStorage.getItem(key);

    if (storedValue === null) {
      return defaultValue;
    }

    return JSON.parse(storedValue) as T;
  });

  const prevKeyRef = useRef(key);

  useEffect(() => {
    const prevKey = prevKeyRef.current;

    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
      prevKeyRef.current = key;
    }

    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};
