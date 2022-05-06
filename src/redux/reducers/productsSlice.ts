import { createAsyncThunk, createSlice, PayloadAction, current } from '@reduxjs/toolkit'


export const getProducts = createAsyncThunk(
    'posts/getPosts',
    async (arg, { rejectWithValue }) => {

        return fetch(
            `https://fakestoreapi.com/products`
        ).then((res) => {
            if (!res.ok) {
                return rejectWithValue(['api url not found from']);
            }
            return res.json()
        }).catch(error => {
            return rejectWithValue([error, 'api url not found from']);
        })
    }
)

interface IReduxState {
    products: any[],
    status: string
}


const initialState: IReduxState = {
    products: [],
    status: '',
}

export const productsSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        // getServiceData: (state, action: PayloadAction<IPhotosServer[] | undefined>) => {
        //     state.data = action.payload;
        // },
    },
    extraReducers: {
        [getProducts.pending as any]: (state: IReduxState,) => {
            state.status = 'loading'
        },
        [getProducts.fulfilled as any]: (state: IReduxState, { payload }: any) => {
            state.products = payload;
            state.status = 'success';
        },
        [getProducts.rejected as any]: (state: IReduxState,) => {
            state.status = 'failed'
        },
    }
})

// Action creators are generated for each case reducer function
export const { } = productsSlice.actions

export default productsSlice.reducer