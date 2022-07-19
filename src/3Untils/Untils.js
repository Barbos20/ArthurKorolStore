export const calcTotalPrice = (items) => {
    const sum = items.length > 0 ? items.reduce((acc, product) => acc += +product.price, 0) : 0;
    return sum.toFixed(2)
}

// export const calcTotalPrice = items => items.length>0 ? items.reduce((acc, product) => acc += +product.price ,(0).toFixed(2)) : 0
// export const calcTotalPrice = (items) => {
//     const sum=items.reduce((acc, product) => acc += product.price ,0)
//     return(
//         sum
//     )
// }

export const Plus= (items) => {
    const sum = items+= 1
    return sum
}