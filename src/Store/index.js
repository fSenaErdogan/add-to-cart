

import { configureStore } from '@reduxjs/toolkit'

import favoritesStore from './favoritesStore';
export const store = configureStore({
    reducer: {
        favorites: favoritesStore,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})