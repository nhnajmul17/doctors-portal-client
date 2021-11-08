import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png'


const Register = () => {
    const [loginData, setLoginData] = useState({})

    const { user, registerUser, isLoading, authError } = useAuth();

    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleRegisterSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password didnt match')
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1">
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleRegisterSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name='name'
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name='email'
                            onBlur={handleOnBlur}
                            label="Your Email"
                            type='email'
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name='password'
                            onBlur={handleOnBlur}
                            label="Your Password"
                            type='password'
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name='password2'
                            onBlur={handleOnBlur}
                            label="Re-type your Password"
                            type='password'
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type='submit' variant='contained'>Register</Button>

                        <NavLink style={{ textDecoration: 'none' }} to='/login'>
                            <Button variant='text'> Already Registered? please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress color="secondary" />}
                    {user?.email && <Alert severity="success">User Created Successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>

            </Grid>

        </Container>
    );
};

export default Register;