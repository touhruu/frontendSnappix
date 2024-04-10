import { useCallback, useRef } from "react";

export type Callback = (...args: unknown[]) => unknown;

export const useEvent = <T extends Callback = Callback>(callback: T): T => {
  const copy = useRef<T>();
  copy.current = callback;

  return useCallback<T>(((...args) => copy.current && copy.current(...args)) as T, []);
};