import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  amount: number,
  currency: "SAR" | "USD" | "AED" = "SAR",
  lang: "en" | "ar" = "en"
): string {
  if (lang === "ar") {
    if (currency === "USD") return `$${amount}`;
    if (currency === "AED") return `${amount} د.إ`;
    return `${amount} ر.س`;
  }
  if (currency === "USD") return `$${amount}`;
  if (currency === "AED") return `${amount} AED`;
  return `${amount} SAR`;
}
