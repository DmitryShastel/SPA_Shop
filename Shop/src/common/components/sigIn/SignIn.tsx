import * as React from 'react';
import {useState} from 'react';
import {AppProvider} from '@toolpad/core/AppProvider';
import {type AuthProvider, type AuthResponse, SignInPage,} from '@toolpad/core/SignInPage';
import {useTheme} from '@mui/material/styles';
import {validateUserName, validateUserPassword} from "../../utils/SignInValidation";
import {useLogInMutation} from "../../../service/signIn/signIn.service";
import {useNavigate} from "react-router";


const SignData = {
    username: 'emilys',
    password: 'emilyspass'
}
const providers = [{id: 'credentials', name: 'username and password'}];

export default function NotificationsSignInPageError() {
    const theme = useTheme();
    const navigate = useNavigate()
    const [userNameError, setUsernameError] = useState('')
    const [userPasswordError, setUserPasswordError] = useState('')
    const [userName, setUserName] = useState(SignData.username)
    const [userPassword, setUserPassword] = useState(SignData.password)

    const [logIn] = useLogInMutation()

    const signIn = async (
        provider: AuthProvider,
        formData?: FormData,
    ): Promise<AuthResponse> => {
        try {
            const result = await logIn(SignData).unwrap();
            localStorage.setItem('authToken', result.accessToken);

            navigate('/listOfProduct', {replace: true})
            return { type: 'success' } as any;

        } catch (err) {
            const response: AuthResponse = {
                type: 'CredentialsSignin',
                error: 'Invalid username or password',
            };
            return response;
        }
    };

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
                        value: userName,
                        error: !!userNameError,
                        helperText: userNameError,
                        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                            setUserName(e.target.value)
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
                        value: userPassword,
                        error: !!userPasswordError,
                        helperText: userPasswordError,
                        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                            setUserPassword(e.target.value)
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



