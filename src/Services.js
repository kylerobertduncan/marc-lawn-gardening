import marcMowing from "./assets/marc-mowing-1.jpg"
import { Box, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';

export default function Services() {
  return (
    <Box display="flex" flexDirection="column" height={{ xs: "100dvh", md: "auto" }} justifyContent="center">

      <Typography component='h2' gutterBottom variant='h4'>Services</Typography>

      <List disablePadding>
        
        <ListItem disablePadding>
            <ListItemText primary="Lawn Mowing" />
        </ListItem>
        
        <ListItem disablePadding>
          <ListItemText primary="Gardening & Planting" />
        </ListItem>

        <ListItem disablePadding>
          <ListItemText primary="Trimming, Shaping & Pruning" />
        </ListItem>

        <ListItem disablePadding>
          <ListItemText primary="Control & Removal of Pest Plants" />
        </ListItem>

        <ListItem disablePadding>
          <ListItemText primary="Regular Maintenance" />
        </ListItem>

      </List>
      {/* 
        - Landscaping ??
        - Residential or (small to medium?) commercial
      */}

      <Grid container marginTop="10px" sx={{ borderRadius: "4px", overflow: "hidden" }} >
        <img alt="" src={marcMowing} width="100%" />
      </Grid>

    </Box>
  )
}