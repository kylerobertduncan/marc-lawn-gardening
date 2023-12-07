import * as React from 'react';
import { AppBar, Container, Grid, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function SimpleAppBar() {
  return (
    <AppBar position='sticky'>
      <Container maxWidth='lg'>
        <Toolbar>

          <Typography align='center' component='h1' variant='h3' sx={{margin:"20px auto", width:"100%"}}>Marc's Lawn & Gardening Service</Typography>

          {/* <Grid component={List} container>

            <Grid component={ListItem} disablePadding item xs={12} md={6}>
              <Link component={ListItemButton} href="tel:+64211357861" sx={{ color: 'white' }}>
                <ListItemIcon sx={{ color: 'inherit' }}>
                  <LocalPhoneIcon />
                </ListItemIcon>
                <ListItemText primary="021 135 7861" />
              </Link>
            </Grid>

            <Grid component={ListItem} disablePadding item xs={12} md={6}>
              <Link component={ListItemButton} href="mailto:marc.thornley@gmail.com" sx={{ color: 'white' }} >
                <ListItemIcon sx={{ color: 'inherit' }}>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="marc.thornley@gmail.com" />
              </Link>
            </Grid>

          </Grid> */}

        </Toolbar>
      </Container>
    </AppBar>
  );
}
