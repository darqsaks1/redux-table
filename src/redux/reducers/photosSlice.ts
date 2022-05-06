import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { IPhotosServer, } from '../../ts/types/types'
import { productsApi } from '../../api/products'

const initialState: any = {
    data: [],
    initialData: []
}

export const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        getServiceData: (state, action: PayloadAction<IPhotosServer[] | undefined>) => {
            state.data = action.payload;
        },
        getInitialData: (state, action: PayloadAction<IPhotosServer[] | undefined>) => {
            return {
                ...state,
                initialData: action.payload,

            };
        },
        updateInitalData(state) {
            const currentState = current(state);
            const data = currentState.initialData.concat(currentState.data.slice(currentState.initialData.length,
                currentState.initialData.length + 30));
            return {
                ...state,
                initialData: data
            };
        },
        removeDataItem(state, action: PayloadAction<number>) {
            const currentState = current(state);
            return {
                ...state,
                initialData: currentState.initialData.filter((item: any) => item.id !== action.payload)
            };
        },
        sortByAlbumId(state, action: PayloadAction<number>) {
            const currentState = current(state);
            return {
                ...state,
                initialData: currentState.data.filter((item: any) => item.albumId === action.payload)
            };
        }

    },
})

// Action creators are generated for each case reducer function
export const { getServiceData, getInitialData, updateInitalData, removeDataItem, sortByAlbumId } = photosSlice.actions

export default photosSlice.reducer