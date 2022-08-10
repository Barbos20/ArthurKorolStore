import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    currentProduct: {
      title: "",
      price: 0,
      sizes: { list: [], currentValue: "" },
      colors: {
        list: [],
        currentValue: {},
      },
      image: "",
      count: 0,
      id: 0,
    },
    selectedProductsList: [],
    currentCurrency: {
      id: "dollar",
      currencySymbol: "$",
      shortName: "USD",
    },
  },
  reducers: {
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    setSelectedProductsList: (state, action) => {
      const isProductInCart =
        state.selectedProductsList.filter(
          (item) =>
          item.id === action.payload.id &&
          item.colors.currentValue === action.payload.colors.currentValue &&
          item.sizes.currentValue === action.payload.sizes.currentValue
        ).length>0;
      const preparedArr = state.selectedProductsList.map((item) => {
          if(item.id === action.payload.id &&
            item.colors.currentValue === action.payload.colors.currentValue &&
            item.sizes.currentValue === action.payload.sizes.currentValue)
            {
              return (
                {
                  ...item,
                  count: item.count + 1,
                }
              )
            }else{
              return item
            }
         });
         if(isProductInCart){
          state.selectedProductsList=[...preparedArr]
         }else{
          state.selectedProductsList.push(action.payload);
         }
    },
    removeItemFromSelectedList: (state, action) => {
      state.selectedProductsList = state.selectedProductsList.filter(
        (product) => product.id !== action.payload
      );
    },
    setCurrentProductColor: (state, action) => {
      state.currentProduct = {
        ...state.currentProduct,
        colors: {
          ...state.currentProduct.colors,
          currentValue: action.payload.value,
        },
      };
    },
    setColor: (state, action) => {
      state.selectedProductsList = state.selectedProductsList.map((item) =>
        item.product.id === action.payload.id
          ? {
              ...item,
              product: {
                ...item.product,
                colors: {
                  ...item.product.colors,
                  currentValue: action.payload.value,
                },
              },
            }
          : item
      );

    },
    setCurrentProductSize: (state, action) => {
      state.currentProduct = {
        ...state.currentProduct,
        sizes: {
          ...state.currentProduct.sizes,
          currentValue: action.payload.value,
        },
      };
    },
    setSize: (state, action) => {
      state.selectedProductsList = state.selectedProductsList.map((item) =>
        item.product.id === action.payload.id
          ? {
              ...item,
              product: {
                ...item.product,
                sizes: {
                  ...item.product.sizes,
                  currentValue: action.payload.value,
                },
              },
            }
          : item
      );

    },
    setIncrementCount: (state, action) => {
      state.selectedProductsList = state.selectedProductsList.map((item)=>(
        item.id === action.payload.id &&
        item.colors.currentValue === action.payload.colors.currentValue &&
        item.sizes.currentValue === action.payload.sizes.currentValue ?{
          ...item,
          count: item.count+1
        }:item
      ))
    },
    setDecrementCount: (state, action) => {
      state.selectedProductsList = state.selectedProductsList.map((item)=>(
        item.id === action.payload.id &&
        item.colors.currentValue === action.payload.colors.currentValue &&
        item.sizes.currentValue === action.payload.sizes.currentValue ?{
          ...item,
          count: item.count-1
        }:item
      )).filter((item)=>(
        item.count>0
      ))
    },
setNullificationItems:(state,action)=>{
  state.selectedProductsList = state.selectedProductsList.filter((item)=>(
    item = 0
  ))
},
    setCurrentVallue: (state, action) => {
      state.currentCurrency = action.payload;
    },
  },
});

export const {
  setCurrentProduct,
  setCurrentProductColor,
  setSelectedProductsList,
  setCurrentProductSize,
  removeItemFromSelectedList,
  setColor,
  setSize,
  setIncrementCount,
  setDecrementCount,
  setCurrentVallue,
  setNullificationItems
} = productSlice.actions;

export const selectCurrentProduct = (state) => {
  return state.product.currentProduct;
};

export const selectSelectedProductsList = (state) => {
  return state.product.selectedProductsList;
};

export const currentCurrency = (state) => {
  return state.product.currentCurrency;
};

export default productSlice.reducer;
