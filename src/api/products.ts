// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPhotosServer } from '../ts/types/types'
import { PRODUCTS_PATH } from '../constants/paths'
import { PRODUCTS_API } from '../constants/constants'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
    reducerPath: PRODUCTS_API,
    baseQuery: fetchBaseQuery({ baseUrl: PRODUCTS_PATH }),
    endpoints: (build) => ({
        getProducts: build.query<IPhotosServer[], | void>({
            query: () => ('/'),
        }),
    }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery } = productsApi