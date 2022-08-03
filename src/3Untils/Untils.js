export const calcTotalPrice = (items) => {
  const sum =
    items.length > 0
      ? items.reduce((acc, product) => (acc += +product.price), 0)
      : 0;
  return sum.toFixed(2);
};

// export const calcTotalItem = items => items.length>0 ? items.reduce((acc, item) => acc += +item.count ,(0).toFixed(2)) : 0
// export const calcTotalPrice = (items) => {
//     const sum=items.reduce((acc, product) => acc += product.price ,0)
//     return(
//         sum
//     )
// }
