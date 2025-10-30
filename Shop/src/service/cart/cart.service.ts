import {baseApi} from "../baseApi";

export const cartApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getCart: build.query({
            query:(id: number)  => `/carts/${id}`
        }),
    })
})


export const {useGetCartQuery} = cartApi