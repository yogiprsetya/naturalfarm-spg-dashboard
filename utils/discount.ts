export const calcDiscount = (price: number, percentage: number) =>
  price - (price * percentage) / 100;

export const applyDiscount = (price: number, percentage: number) =>
  price - calcDiscount(price, percentage);
