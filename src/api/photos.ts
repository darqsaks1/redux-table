// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPhotosServer } from '../ts/types/types'
import { PHOTOS_PATH } from '../constants/paths'
import { PHOTOS_API } from '../constants/constants'

// Define a service using a base URL and expected endpoints
export const photosApi = createApi({
    reducerPath: PHOTOS_API,
    baseQuery: fetchBaseQuery({ baseUrl: PHOTOS_PATH }),
    endpoints: (build) => ({
        getPhotos: build.query<IPhotosServer[], | void>({
            query: () => ('/'),
        }),
    }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetPhotosQuery } = photosApi