import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png'
const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handleGoogleSingIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1">
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name='email'
                            onChange={handleOnChange}
                            label="Your Email"
                            type='email'
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name='password'
                            onChange={handleOnChange}
                            label="Your Password"
                            type='password'
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type='submit' variant='contained'>Login</Button>

                        <NavLink style={{ textDecoration: 'none' }} to='/register'>
                            <Button variant='text'> New User? please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress color="secondary" />}
                        {user?.email && <Alert severity="success">Login Successfull!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>---------------------------</p>
                    <Button onClick={handleGoogleSingIn} variant='contained'> Google SignIn</Button>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>

            </Grid>

        </Container>
    );
};

export default Login;