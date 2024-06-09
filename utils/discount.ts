type NumType = number | string;

export const calcDiscount = (price: NumType, percentage: NumType) => {
  const result = Number(price) - (Number(price) * Number(percentage)) / 100;
  return result.toFixed(0);
};

export const applyDiscount = (price: NumType, percentage: NumType) => {
  return Number(price) - calcDiscount(price, percentage);
};
