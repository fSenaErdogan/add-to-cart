import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteList: localStorage.getItem('favoriteList') ? JSON.parse(localStorage.getItem('favoriteList')) : [],
}

export const favoriteStore = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    favoriteAdd: (state, action) => {
      const existingProduct = state.favoriteList.find(product => product.id === action.payload.id);
      if (!existingProduct) {
        state.favoriteList.push(action.payload);
        localStorage.setItem('favoriteList', JSON.stringify(state.favoriteList));
      } else {
        const idToRemove = action.payload;
        state.favoriteList = state.favoriteList.filter(item => item.id !== idToRemove);
        localStorage.setItem('favoriteList', JSON.stringify(state.favoriteList))
      }
    },

    favoriteRemove: (state, action) => {
      const idToRemove = action.payload;
      state.favoriteList = state.favoriteList.filter(item => item.id !== idToRemove);
      localStorage.setItem('favoriteList', JSON.stringify(state.favoriteList))
    },
  },
});

export const { favoriteAdd, favoriteRemove } = favoriteStore.actions;
export default favoriteStore.reducer;
