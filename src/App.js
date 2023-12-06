import * as React from 'react';
import { Box } from '@mui/material';
import ResponsiveAppBar from './ResponsiveAppBar.js';
import Hero from './Hero.js';
import About from './About.js';
import Services from './Services.js';
import Contact from './Contact.js';

export default function App() {
  return (
    <div>
      
      <ResponsiveAppBar />

      <Box
        alignItems="center"
        display="flex"
        // height="calc(100dvh - 70px)"
        height="100dvh"
      >
        <Hero />
      </Box>

      <Box
        alignItems="center"
        display="flex"
        height="calc(100dvh - 70px)"
      >
        <Services />
      </Box>

      <Box
        alignItems="center"
        display="flex"
        height="calc(100dvh - 70px)"
      >
        <Contact />
      </Box>

      <Box
        alignItems="center"
        display="flex"
        height="calc(100dvh - 70px)"
      >
        <About />
      </Box>
      
    </div>
  );
}
