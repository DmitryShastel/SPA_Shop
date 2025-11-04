import {baseApi} from "../baseApi";

type Credentials = {
    username: string
    password: string
}

export const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        logIn: build.mutation({
            query: (credentials: Credentials) => ({
                body: credentials,
                method: 'POST',
                url: '/auth/login'
            }),
            invalidatesTags: ['Auth']
        }),
        authMe: build.query({
            query: () => ({
                method: 'GET',
                url: '/auth/me',
            }),
            providesTags: ['Auth']
        }),
    })
})

export const {useLogInMutation, useAuthMeQuery} = authApi