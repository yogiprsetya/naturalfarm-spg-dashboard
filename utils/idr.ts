export const formatPrice = (value: number) => {
  return "IDR " + value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
