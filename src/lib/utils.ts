import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toTitleCase(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1") // split camelCase
    .replace(/^./, (str) => str.toUpperCase()); // capitalize first letter
}
