// @ts-nocheck
import React, {useState} from "react";
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
    validateEmail,
    validateFirstName,
    validateLastName,
    validatePassword
} from "../../utils/ValidationForm/SignUpValidation";


export function SignUp() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const [firstNameError, setFirstNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate sx={{mt: 3, width: "100%"}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                        <TextField
                            required
                            fullWidth
                            label="FirstName"
                            value={firstName}
                            error={!!firstNameError}
                            helperText={firstNameError}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setFirstName(e.target.value)
                                setFirstNameError(validateFirstName(e.target.value))
                            }}
                            onBlur={(e: React.FocusEvent<HTMLInputElement>)=>{
                                setFirstNameError(validateFirstName(e.target.value))
                            }}
                        />
                        <TextField
                            required
                            fullWidth
                            label="Last Name"
                            value={lastName}
                            error={!!lastNameError}
                            helperText={lastNameError}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setLastName(e.target.value)
                                setLastNameError(validateLastName(e.target.value))
                            }}
                            onBlur={(e: React.FocusEvent<HTMLInputElement>)=>{
                                setLastNameError(validateLastName(e.target.value))
                            }}
                        />
                        <TextField
                            required
                            fullWidth
                            label="Email Address"
                            value={email}
                            error={!!emailError}
                            helperText={emailError}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setEmail(e.target.value)
                                setEmailError(validateEmail(e.target.value))
                            }}
                            onBlur={(e: React.FocusEvent<HTMLInputElement>)=>{
                                setEmailError(validateEmail(e.target.value))
                            }}
                        />
                        <TextField
                            required
                            fullWidth
                            label="Password"
                            value={password}
                            error={!!passwordError}
                            helperText={passwordError}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setPassword(e.target.value)
                                setPasswordError(validatePassword(e.target.value))
                            }}
                            onBlur={(e: React.FocusEvent<HTMLInputElement>)=>{
                                setPasswordError(validatePassword(e.target.value))
                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary"/>}
                            label="I want to receive inspiration, marketing promotions and updates via email."
                        />
                    </Box>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}