import React from 'react';
import {Box} from "@mui/material";
import Button from "@mui/material/Button";

export const Header = () => {
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
                onClick={() => {
                }}
                sx={{
                    width: 100,
                    height: 30,
                    padding: 0,
                }}
            >Sign In</Button>
            <Button
                variant="contained"
                color="inherit"
                onClick={() => {
                }}
                sx={{
                    width: 100,
                    height: 30,
                    padding: 0,
                }}
            >Sign Up</Button>
        </Box>
    );
};
