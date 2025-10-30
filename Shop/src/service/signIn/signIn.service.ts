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
            })
        }),
    })
})

export const {useLogInMutation} = authApi