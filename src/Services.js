
import { Container, List, ListItem, ListItemText, Typography } from '@mui/material';

export default function Services() {
  return (
    <Container maxWidth='md'>

      <Typography component='h2' gutterBottom variant='h3'>Services</Typography>

      <List disablePadding>
        
        <ListItem disableGutters>
            <ListItemText primary="Lawn Mowing" />
        </ListItem>
        
        <ListItem disableGutters>
          <ListItemText primary="Gardening" />
        </ListItem>

        <ListItem disableGutters>
          <ListItemText primary="Trimming & Pruning" />
        </ListItem>

        <ListItem disableGutters>
          <ListItemText primary="Control & Removal of Pest Plants" />
        </ListItem>

        <ListItem disableGutters>
          <ListItemText primary="Regular Maintenance" />
        </ListItem>

      </List>
      {/* 
        - Landscaping ??
        - Residential or (small to medium?) commercial
      */}

    </Container>
  )
}