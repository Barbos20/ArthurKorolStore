export const calcTotalPrice = items => items.reduce((acc, product) => acc += product.price ,0)
// export const calcTotalPrice = (items) => {
//     const sum=items.reduce((acc, product) => acc += product.price ,0)
//     return(
//         sum
//     )
// }
