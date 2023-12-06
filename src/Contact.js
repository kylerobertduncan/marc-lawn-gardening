import { Container, Grid, Link, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function Contact() {
  return (
    <Container maxWidth='md'>

      <Typography component='h2' gutterBottom variant='h3'>Contact</Typography>

      <Grid container spacing={2}>

        <Grid item xs={12}>
          <Typography>Contact Form</Typography>
        </Grid>

        <Grid container item>

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

      </Grid>
    </Container>
  )
}
