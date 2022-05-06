import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import photosReducer from '../reducers/photosSlice'
import productsReducer from '../reducers/productsSlice'

import { setupListeners } from '@reduxjs/toolkit/query'
import { photosApi } from '../../api/photos'
import { productsApi } from '../../api/products';



export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        photos: photosReducer,
        products: productsReducer,
        [photosApi.reducerPath]: photosApi.reducer,

    },
    middleware: [thunkMiddleware],

    // middleware: (getDefaultMiddleware: any) =>
    //     getDefaultMiddleware().concat(photosApi.middleware)
});
// logger

setupListeners(store.dispatch)

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch