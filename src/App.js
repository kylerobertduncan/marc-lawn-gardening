import * as React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar.js';
import { Container, Grid, Typography } from '@mui/material';

export default function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Container maxWidth='lg'>
        <Typography align='center' component='h1' gutterBottom variant='h2' style={{marginTop: "100px"}}>Marc's Lawn & Gardening Service</Typography>
      </Container>
    </div>
  );
}
