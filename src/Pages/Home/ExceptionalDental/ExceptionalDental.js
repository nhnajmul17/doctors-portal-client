import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import img from '../../../images/treatment.png'
import { Button, Typography } from '@mui/material';

const ExceptionalDental = () => {
    return (
        <Box sx={{ flexGrow: 1, m: 5, mt: 12 }}>
            <Grid container spacing={2} >
                <Grid item xs={12} md={6}>
                    <img style={{ width: "410px", height: '450px' }} src={img} alt="" />
                </Grid>
                <Grid item style={{ textAlign: 'left' }} xs={12} md={6}>
                    <Typography variant='h3' sx={{ fontWeight: 400 }}>
                        Exceptional Dental <br />
                        Care, on Your Terms
                    </Typography>
                    <Typography variant='h5' sx={{ my: 3, fontSize: 13, fontWeight: 500, color: 'gray' }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, dolorem? Amet aperiam minus, esse quaerat eos recusandae harum minima inventore libero magni, facere, ea vero. Ducimus, accusamus. Laboriosam modi cupiditate soluta accusantium ab a totam? Distinctio laborum minus consequuntur neque ex. Quis vero voluptatum excepturi recusandae eveniet cupiditate! Harum, voluptas.
                    </Typography>
                    <Button variant="contained" style={{ backgroundColor: '#5CE7F0' }}>Learn More</Button>
                </Grid>

            </Grid>
        </Box>
    );
};

export default ExceptionalDental;