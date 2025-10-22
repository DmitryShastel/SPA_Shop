import * as React from 'react';
import {useState} from 'react';
import {AppProvider} from '@toolpad/core/AppProvider';
import {type AuthProvider, type AuthResponse, SignInPage,} from '@toolpad/core/SignInPage';
import {useTheme} from '@mui/material/styles';
import {validateUserName, validateUserPassword} from "../../utils/SignInValidation";

const providers = [{id: 'credentials', name: 'username and password'}];


export const signIn: (
    provider: AuthProvider,
    formData?: FormData,
) => Promise<AuthResponse> | void = async (provider, formData) => {
    const promise = new Promise<AuthResponse>((resolve) => {
        const username = formData?.get('username')
        const password = formData?.get('password')

        resolve({
            type: 'CredentialsSignin',
            error: 'Invalid credentials.',
        });
    });
    return promise;
};

export default function NotificationsSignInPageError() {
    const theme = useTheme();
    const [userNameError, setUsernameError] = useState('')
    const [userPasswordError, setUserPasswordError] = useState('')

    return (
        <AppProvider theme={theme}>
            <SignInPage
                signIn={signIn}
                providers={providers}
                slotProps={{
                    emailField: {
                        autoFocus: false,
                        label: "UserName",
                        placeholder: "Enter your user name",
                        name: "username",
                        error: !!userNameError,
                        helperText: userNameError,
                        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                            setUsernameError(validateUserName(e.target.value))
                        },
                        onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
                            setUsernameError(validateUserName(e.target.value))
                        }
                    },
                    passwordField: {
                        autoFocus: false,
                        label: "Password",
                        placeholder: "Enter your password",
                        name: "password",
                        error: !!userPasswordError,
                        helperText: userPasswordError,
                        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                            setUserPasswordError(validateUserPassword(e.target.value))
                        },
                        onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
                            setUserPasswordError(validateUserPassword(e.target.value))
                        }
                    },
                    form: {noValidate: true}
                }}
            />
        </AppProvider>
    );
}


