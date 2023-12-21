import { Box, Grid, Link, Typography } from '@mui/material';

export default function About() {
  return (
    <Box display="flex" flexDirection="column" height={{ xs: "calc(100dvh + 56px)", md: "auto" }} justifyContent="center">
      
      {/* <Typography component='h2' gutterBottom variant='h3'>About</Typography> */}
      <Typography component='h2' gutterBottom variant='h3'>Kia ora my fellow westies,</Typography>

      <Grid container spacing={2}>

        {/* <Grid item xs={12}>
          <Typography>Kia ora my fellow westie friends,</Typography>
        </Grid> */}

        <Grid item xs={12}>
          <Typography>
            I am a local lad, born and bred in the beautiful Tītīrangi area. I have over 4 years experience working for the Auckland City Council in the local parks and garden areas.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography>
            
            I specialise in garden maintenance, planting, lawns mowing, and trimming/shaping small to medium sized hedges. I have a good knowledge of pest plants and how to control and remove them.
          </Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Typography>
            <Link href="#contact">Please contact me via phone or email</Link>, if you would like any work to be done on your property and I would be happy to give you a free quote.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography>Kind regards,</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography>Marc</Typography>
        </Grid>

      </Grid>
    </Box>
  )
}