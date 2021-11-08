import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Testimoni = (props) => {
    const { name, img, place, about } = props.testimonial

    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, }}>
                <CardContent>
                    <Typography variant="body2" sx={{ color: 'gray' }} component="div">
                        {about}
                    </Typography>
                </CardContent>
                <Grid item xs={12} md={12}>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography variant="body2" sx={{ fontWeight: 600 }} color='#5CE7F0'>
                            {name}
                        </Typography>
                        <Typography variant="body2" color='text.secondary'>
                            {place}
                        </Typography>
                    </CardContent>
                </Grid>
            </Card>
        </Grid>
    );
};

export default Testimoni;