
import { configureStore } from '@reduxjs/toolkit'
import favoriteStore from './favoritesStore';
import productStore from './productStore';

export const store = configureStore({
    reducer: {
        favoriteStore: favoriteStore,
        productStore: productStore
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})