import { Box, Button, Grid, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function Contact() {
  return (
    <Box display="flex" flexDirection="column" height={{ xs: "100dvh", md: "auto" }} justifyContent="center">

      <Typography component='h2' variant='h3'>Contact</Typography>

      <Grid component={List} container>
        <Grid component={ListItem} disablePadding item xs={12}>
          <Link component={ListItemButton} href="tel:+64211357861">
            <ListItemIcon sx={{ color: 'inherit' }}>
              <LocalPhoneIcon />
            </ListItemIcon>
            <ListItemText primary="021 135 7861" />
          </Link>
        </Grid>
        <Grid component={ListItem} disablePadding item xs={12}>
          <Link component={ListItemButton} href="mailto:marc.thornley@gmail.com" >
            <ListItemIcon sx={{ color: 'inherit' }}>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="marc.thornley@gmail.com" />
          </Link>
        </Grid>
      </Grid>

      <Typography component='h3' gutterBottom variant='h4'>Request a Quote</Typography>

      <Grid component="form" container spacing={1}>
        <Grid item xs={12}>
          <TextField id="quoteName" label="Name" variant="outlined" sx={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12}>
          <TextField id="quotePhone" label="Phone" variant="outlined" sx={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12}>
          <TextField id="quoteEmail" label="Email" variant="outlined" sx={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12}>
        <Button variant="contained" sx={{ width: "100%" }} >Send</Button>
        </Grid>
      </Grid>

    </Box>
  )
}
