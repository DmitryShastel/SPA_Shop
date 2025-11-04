import React from 'react';
import {Box} from "@mui/material";
import Button from "@mui/material/Button";
import {useAuthMeQuery} from "../../../service/signIn/signIn.service";
import {useNavigate} from "react-router";

export const Header = () => {
    const navigate = useNavigate()

    const {data, isLoading, isError} = useAuthMeQuery(undefined)

    if (!isLoading && data && !isError) {
        return null;
    }

    const handleSignIn = () => {
        navigate('/auth/login', {replace: true})
    }

    const handleSignUp = () => {
        navigate('/register', {replace: true})
    }

    return (
        <Box
            sx={{
                width: '100vw',
                backgroundColor: 'rgba(25, 118, 210, 0.3)',
                padding: '16px 24px',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: 2,
                boxSizing: 'border-box',
                margin: 0,
                position: 'sticky',
                top: 0,
                zIndex: 1000
            }}
        >
            <Button
                variant="contained"
                color="inherit"
                onClick={handleSignIn}
                sx={{
                    width: 100,
                    height: 30,
                    padding: 0,
                }}
            >Sign In</Button>
            <Button
                variant="contained"
                color="inherit"
                onClick={handleSignUp}
                sx={{
                    width: 100,
                    height: 30,
                    padding: 0,
                }}
            >Sign Up</Button>
        </Box>
    );
};
