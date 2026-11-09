export function formatPrice(value: number): string {
  return new Intl.NumberFormat("fa-IR").format(value);
}

export function discountPercent(price: number, compareAtPrice: number): number {
  if (compareAtPrice <= 0 || price >= compareAtPrice) return 0;
  return Math.round((1 - price / compareAtPrice) * 100);
}
