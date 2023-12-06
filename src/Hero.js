
import { Container, Grid, Link, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function Hero() {
  return(
    <Container maxWidth='lg'>

      <Typography align='center' component='h1' gutterBottom variant='h2'>Marc's Lawn & Gardening Service</Typography>

      <Container maxWidth='md'>
        <Grid container spacing={2}>

          <Grid item xs={12}>
            <Typography>Kia ora my fellow westie friends.</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography>I am a local lad, born and bred in the beautiful Tītīrangi area. I specialise in garden maintenance, planting, lawns mowing, and trimming/shaping small to medium sized hedges.</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography>I have over 4 years experience working for the Auckland City Council in the local parks and garden areas. I have a good knowledge of pest plants and how to control and remove them.</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography>Please contact me via phone or email, if you would like any work to be done on your property and I would be happy to give you a free quote.</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography>Kind regards,</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography>Marc</Typography>
          </Grid>

        </Grid>
      </Container>

      <Container maxWidth='md' sx={{marginTop: "10px"}}>
        <Grid container>

          <Grid item xs={12} md={6}>
            <Link href="tel:+64211357861">
              <Grid container>
                <Grid item>
                  <LocalPhoneIcon sx={{ marginRight: "5px" }} />
                </Grid>
                <Grid item>
                  <Typography>021 135 7861</Typography>
                </Grid>
              </Grid>
            </Link>
          </Grid>

          <Grid item xs={12} md={6}>
            <Link href="mailto:marc.thornley@gmail.com">
              <Grid container>
                <Grid item>
                  <EmailIcon sx={{ marginRight: "5px" }} />
                </Grid>
                <Grid item>
                  <Typography>marc.thornley@gmail.com</Typography>
                </Grid>
              </Grid>
            </Link>
          </Grid>
        </Grid>
      </Container>

    </Container>
  )
}