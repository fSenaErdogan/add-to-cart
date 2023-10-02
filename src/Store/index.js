
import { configureStore } from '@reduxjs/toolkit'
import favoriteStore from './favoritesStore';

export const store = configureStore({
    reducer: {
        favoriteStore: favoriteStore,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})