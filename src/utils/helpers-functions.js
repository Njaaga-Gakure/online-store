const priceFormat = (num) => {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
  }).format(num / 100);
};

const getUniqueValues = (data, type) => {
  const uniqueValues =
    type === "colors"
      ? data.map((item) => item[type]).flat()
      : data.map((item) => item[type]);
  return ["all", ...new Set(uniqueValues)];
};
export { priceFormat, getUniqueValues };
