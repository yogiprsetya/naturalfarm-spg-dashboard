export const calcDiscount = (price: number, percentage: number) =>
  price - (price * percentage) / 100;
