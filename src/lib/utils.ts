import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSearchParams = (
  searchParams: URLSearchParams
): Record<string, string | string[]> => {
  const paramsMap = new Map<string, string | string[]>();

  searchParams.forEach((value, key) => {
    // checking if key exists in case of array
    if (paramsMap.has(key)) {
      const existingValue = paramsMap.get(key)!;
      if (Array.isArray(existingValue)) {
        existingValue.push(value);
      } else {
        paramsMap.set(key, [existingValue, value]);
      }
    } else {
      paramsMap.set(key, value);
    }
  });
  const paramsObject: Record<string, string | string[]> = {
    ...Object.fromEntries(paramsMap),
  };

  return paramsObject;
};
