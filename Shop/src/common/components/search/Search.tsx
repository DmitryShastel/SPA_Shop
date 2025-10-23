import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function BasicTextFields() {
    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 2, width: '48ch'} }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Box>
    );
}
