import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productList: localStorage.getItem('productList') ? JSON.parse(localStorage.getItem('productList')) : [],
}

export const productStore = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productAdd: (state, action) => {
      const existingProduct = state.productList.find(product => product.id === action.payload.id);
      if (!existingProduct) {
        state.productList.push(action.payload);
        localStorage.setItem('productList', JSON.stringify(state.productList));
      } else {
        const idToRemove = action.payload;
        state.productList = state.productList.filter(item => item.id !== idToRemove);
        localStorage.setItem('productList', JSON.stringify(state.productList))
      }
    },

    productRemove: (state, action) => {
      const idToRemove = action.payload;
      state.productList = state.productList.filter(item => item.id !== idToRemove);
      localStorage.setItem('productList', JSON.stringify(state.productList))
    },
  },
});

export const { productAdd, productRemove } = productStore.actions;
export default productStore.reducer;
