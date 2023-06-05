const priceFormat = (num) => {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
  }).format(num / 100);
};
export { priceFormat };
