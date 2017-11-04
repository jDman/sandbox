export function restrictRange(passedValue: number, min: number, max: number): number {
  return Math.min(Math.max(passedValue, min), max);
}

export function modulus(dividend: number, divisor: number): number {
  return ((dividend % divisor) + divisor) % divisor;
}