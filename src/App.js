import * as React from 'react';
import { AppBar, Box, Container, Grid, Toolbar, Typography } from '@mui/material';
import { Yard } from '@mui/icons-material';
import About from './About.js';
import Services from './Services.js';
import Contact from './Contact.js';

export default function App() {
  return (
    <Box>
      
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <Grid alignItems="center" component={Container} container maxWidth="lg">
            <Yard />
            <Typography component="h1" ml={1} variant="h5">
              Marc's Lawn & Gardening
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>

      <Box alignItems="center" display="flex" height={{xs:"auto", md:"100dvh"}}>
        <Container maxWidth='lg'>
          <Grid container spacing={{ xs: 0, md: 5 }}>
            <Grid component="section" id="about" item xs={12} md={4}> <About /> </Grid>
            <Grid component="section" id="contact" item xs={12} md={4}> <Contact /> </Grid>
            <Grid component="section" id="services" item xs={12} md={4}> <Services /> </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  );
}
