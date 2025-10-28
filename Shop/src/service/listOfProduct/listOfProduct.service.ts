import {baseApi} from "../baseApi";


interface ProductsResponse {
    products: any[]
    total: number
    skip: number
    limit: number
}

export const totalProductsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        totalProducts: build.query({
            query: () => '/products'
        })
    })
})

export const {useTotalProductsQuery} = totalProductsApi