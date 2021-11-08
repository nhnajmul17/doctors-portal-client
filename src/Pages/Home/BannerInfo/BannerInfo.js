import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Box } from '@mui/system';
const BannerInfo = () => {

    const background = {
        backgroundColor: '#5CE7F0'
    }
    const background1 = {
        backgroundColor: '#5F8288'
    }

    const verticalCenter = {
        display: 'flex',
        alignItems: 'center'
    }

    return (

        <Container sx={{ flexGrow: 1, mb: 8 }} style={{ marginTop: '-110px' }}>
            <Grid container spacing={2}>
                <Grid style={background} item xs={12} md={4}>
                    <Box style={verticalCenter}>
                        <Typography >
                            <FontAwesomeIcon style={{ fontSize: '50px', color: 'white' }} icon={faClock} />
                        </Typography>
                        <Box>
                            <Typography variant='h4' style={{ color: 'white' }}>
                                Opening Hours
                            </Typography>
                            <Typography variant='h6' sx={{ my: 2, fontSize: 13, fontWeight: 300, color: 'gray' }}>

                                Lorem ipsum dolor sit amet.
                            </Typography>
                        </Box>
                    </Box>

                </Grid>
                <Grid style={background1} item xs={12} md={4}>
                    <Box style={verticalCenter}>
                        <Typography >
                            <FontAwesomeIcon style={{ fontSize: '50px', color: 'white', marginRight: '20px' }} icon={faMapMarkerAlt} />
                        </Typography>
                        <Box>
                            <Typography variant='h4'>
                                Visit Our Location
                            </Typography>
                            <Typography variant='h6' sx={{ my: 2, fontSize: 13, fontWeight: 300, color: 'white' }}>
                                Lorem ipsum dolor sit amet.
                            </Typography>
                        </Box>
                    </Box>

                </Grid>
                <Grid style={background} item xs={12} md={4}>
                    <Box style={verticalCenter}>
                        <Typography >
                            <FontAwesomeIcon style={{ fontSize: '50px', color: 'white', marginRight: '20px' }} icon={faPhone} />
                        </Typography>
                        <Box>
                            <Typography variant='h4' style={{ color: 'white' }}>
                                Contact Us now
                            </Typography>
                            <Typography variant='h6' sx={{ my: 2, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                                +000 123 456 789
                            </Typography>
                        </Box>
                    </Box>




                </Grid>

            </Grid>
        </Container>
    );
};

export default BannerInfo;