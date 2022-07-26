import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    currentProduct: {
      title: "",
      price: 0,
      sizes: { list: [], currentValue: "" },
      colors: {
        list: [{ src: "" }, { src: "" }, { src: "" }],
        currentValue: { src: "" },
      },
      image: "",
      count: 0,
      id: 0,
    },
    selectedProductsList: [],
  },
  reducers: {
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    setSelectedProductsList: (state, action) => {
      state.selectedProductsList.push(action.payload);
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
  },
});

export const {
  setCurrentProduct,
  setCurrentProductColor,
  setSelectedProductsList,
  removeItemFromSelectedList,
  setColor,
} = productSlice.actions;

export const selectCurrentProduct = (state) => {
  return state.product.currentProduct;
};

export const selectSelectedProductsList = (state) => {
  return state.product.selectedProductsList;
};

export default productSlice.reducer;
