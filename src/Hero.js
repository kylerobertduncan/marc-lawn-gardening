
import { Container, Grid, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function Hero() {
  return(
    <Container maxWidth='lg'>

      <Typography align='center' component='h1' gutterBottom variant='h2'>Marc's Lawn & Gardening Service</Typography>

      {/* <Container component={Grid} container spacing={2} maxWidth='md'>
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
      </Container> */}

      <Container maxWidth='md' sx={{marginTop: "10px"}}>
        <Grid disablePadding component={List} container>

          <Grid disablePadding component={ListItem} item xs={12} md={6}>
            <Link component={ListItemButton} href="tel:+64211357861">
              <ListItemIcon>
                <LocalPhoneIcon />
              </ListItemIcon>
              <ListItemText primary="021 135 7861"/>
            </Link>
          </Grid>

          <Grid disablePadding component={ListItem} item xs={12} md={6}>
            <Link component={ListItemButton} href="mailto:marc.thornley@gmail.com" >
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="marc.thornley@gmail.com" />
            </Link>
          </Grid>

        </Grid>
      </Container>

    </Container>
  )
}