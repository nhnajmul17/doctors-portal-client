import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth'
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';




const Navigation = () => {
    const theme = useTheme()
    const useStyle = makeStyles({
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        },
        siteName: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'center'
            }
        }
    })
    const { navIcon, navItemContainer, siteName } = useStyle()
    const [state, setState] = React.useState(false);


    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <ListItem button>
                    <ListItemText>
                        <Link to='/home'>Home</Link>
                    </ListItemText>
                    <Divider />
                    <ListItemText>
                        <Link to='/appointment'>Appointment</Link>
                    </ListItemText>
                    <Divider />
                    <ListItemText>
                        <Link to='/faq'>Faq</Link>
                    </ListItemText>
                    <Divider />
                    <ListItemText>
                        <Link to='/dashboard'>Dashboard</Link>
                    </ListItemText>
                    <Divider />
                </ListItem>
            </List>

        </Box>
    );


    const { user, logOut } = useAuth()
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box className={navItemContainer}>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to='/home'>
                                <Button color="inherit">Home</Button>
                            </Link>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to='/appointment'>
                                <Button color="inherit">Appointment</Button>
                            </Link>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to='/faq'>
                                <Button color="inherit">Faq</Button>
                            </Link>
                        </Box>
                        <Typography className={siteName} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Doctors Portal
                        </Typography>
                        <Box className={navItemContainer}>


                            {
                                user?.email ?
                                    <Box>
                                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/dashboard'>
                                            <Button color="inherit">Dashboard</Button>
                                        </NavLink>
                                        <Button onClick={logOut} color="inherit">Logout</Button>
                                    </Box>

                                    :
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/login'>
                                        <Button color="inherit">Login</Button>
                                    </NavLink>
                            }
                        </Box>

                    </Toolbar>
                </AppBar>
            </Box>
            <div>

                <React.Fragment >

                    <Drawer

                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
};

export default Navigation;