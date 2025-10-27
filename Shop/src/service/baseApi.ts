import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {BASE_URL} from "../common/api/common.api";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery:fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: () => ({}),
})