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
      // state.selectedProductsList.push(action.payload);
      const isProductInCart =
        state.selectedProductsList.filter(
          (item) =>
            item.id === action.payload.id &&
            item.sizes.currentValue === action.payload.sizes.currentValue &&
            item.colors.currentValue === action.payload.colors.currenValue
        ).length > 0;
      if (isProductInCart) {
        state.selectedProductsList.map((item) => ({
          ...item,
          count: item.count + 1,
        }));
      } else {
        state.selectedProductsList.push(action.payload);
      }
      // state.selectedProductsList = state.selectedProductsList.push();
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

      // state.selectedProductsList.push(action.payload);
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

      // state.selectedProductsList.push(action.payload);
    },
    setPlusItemList: (state, action) => {},
    setMinusItemList: (state, action) => {},
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
  setPlusItemList,
  setMinusItemList,
  setCurrentVallue,
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
