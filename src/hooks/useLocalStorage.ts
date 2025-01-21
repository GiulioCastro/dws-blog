import { useCallback, useState, useEffect } from "react";

export type LocalStoreKeys = "latestArticles";

interface UseLocalStorage<T> {
  readonly value: T;
  readonly setValue: React.Dispatch<T>;
  readonly remove: () => void;
}

export function useLocalStorage<T>(
  key: LocalStoreKeys,
  initialValue: T
): UseLocalStorage<T> {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    if (value === undefined) return localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return {
    value,
    setValue,
    remove,
  };
}
