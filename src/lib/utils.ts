import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Convert English digits to Persian digits
const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

export function toPersianNumbers(num: number | string): string {
  const numStr = num.toString();
  return numStr.replace(/[0-9]/g, (digit) => persianDigits[parseInt(digit)]);
}

// Format price with Persian digits and proper decimal handling
export function formatPrice(price: number | string): string {
  const num = typeof price === 'string' ? parseFloat(price) : price;
  
  if (isNaN(num)) {
    return '۰';
  }
  
  // Handle decimals - if it's a whole number, don't show decimal part
  const isWholeNumber = Number.isInteger(num);
  const formattedNumber = isWholeNumber 
    ? Math.floor(num).toString()
    : num.toFixed(0); // Remove decimal places for now, can be adjusted if needed
  
  return toPersianNumbers(formattedNumber);
}
