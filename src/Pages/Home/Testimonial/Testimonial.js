import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';


import person1 from '../../../images/people-1.png'
import person2 from '../../../images/people-2.png'
import person3 from '../../../images/people-3.png'
import Testimoni from '../Testimoni/Testimoni';


const testimonials = [
    {
        name: 'Winson Harry',
        place: "California",
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: person1
    },
    {
        name: 'Winson Harry',
        place: "California",
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: person2
    },
    {
        name: 'Winson Harry',
        place: "California",
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: person3
    }
]
const Testimonial = () => {

    return (
        <Box sx={{ flexGrow: 1, my: 5 }}>
            <Container>
                <Typography sx={{ fontWeight: 600, m: 2, color: '#5CE7F0' }} variant="h6" component="div">
                    Testimonials
                </Typography>
                <Typography sx={{ fontWeight: 500, m: 5 }} variant="h4" component="div">
                    What's Our Patients <br />
                    Says
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        testimonials.map(testimonial => <Testimoni
                            key={testimonial.name}
                            testimonial={testimonial}
                        ></Testimoni>)
                    }
                </Grid>
            </Container>
        </Box >
    );
};

export default Testimonial;