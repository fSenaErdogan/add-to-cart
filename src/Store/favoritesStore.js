import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    favoriteList: window.localStorage.getItem('favorites') ? JSON.parse(window.localStorage.getItem('favorites')) : null,
}


export const favoritesStore = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: async (state, action) => {

            let product = action.payload

            const exist = state.favoriteList.find(item => item.id === product.id)

            if (exist) {
                state.favoriteList = state.favoriteList.filter(item => item.id !== product.id)
            }else{
                state.favoriteList = [...state.favoriteList, product]
            }

            window.localStorage.setItem('favorites', JSON.stringify(state.favoriteList));
        }
    }
});


export const { addFavorite } = favoritesStore.actions;
export default favoritesStore.reducer;