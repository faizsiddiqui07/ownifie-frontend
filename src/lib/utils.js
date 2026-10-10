import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// /api/allWebsiteProjects sort nahi karta, isliye client par createdAt se
// newest-first karte hain (latest project pehle, purana last me)
export function sortByNewest(items = []) {
  return [...items].sort(
    (a, b) => new Date(b?.createdAt || 0) - new Date(a?.createdAt || 0)
  );
}
