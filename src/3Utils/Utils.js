export const calcTotalPrice = (items) => {
  const sum =
    items.length > 0
      ? items.reduce((acc, product) => (acc += +product.price * product['count']), 0)
      : 0;
  return sum.toFixed(2);
};

export const calcTotalCount= (items) => {
  const sum =
    items.length > 0
      ? items.reduce((acc, product) => (acc += product['count']), 0)
      : 0;
  return sum;
};
