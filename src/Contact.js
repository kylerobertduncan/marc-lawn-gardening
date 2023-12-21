import * as React from "react";
// import { useState } from "react";
import { Backdrop, Box, Button, CircularProgress, Grid, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Modal, TextField, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Contact() {
  // element controllers
  const [backdropOpen, setBackdropOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  // input controllers
  const [quotePhone, setQuotePhone] = React.useState("");
  const [quoteName, setQuoteName] = React.useState("");
  const [quoteEmail, setQuoteEmail] = React.useState("");
  // modal message controllers
  const [modalHeader, setModalHeader] = React.useState("");
  const [modalText, setModalText] = React.useState("");

  function clearForm() {
    setQuotePhone("");
    setQuoteName("");
    setQuoteEmail("");
  }

  function closeModal(success) {
    setModalOpen(false);
    if (success) clearForm();
    
    // window.alert("Thanks for the message, we'll get in touch soon.")
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    console.log("Sending form details:", {
      name: quoteName,
      phone: quotePhone,
      email: quoteEmail,
    });

    // bring up backdrop
    setBackdropOpen(true);

    // send info to formsubmit
    fetch("https://formsubmit.co/ajax/kylerobertduncan@duck.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(
        Object.fromEntries(new FormData(e.target))
      ),
    })
      .then(response => response.json())
      .then(data => {
        console.debug("Form data sent", data);
        setBackdropOpen(false);
        setModalOpen(true);
        clearForm();
        // window.alert("Thanks for the message, we'll get in touch soon.")
      })
      .catch(error => {
        console.error("Error sending form data:", error);
        window.alert("There was an error sending the message. Please contact Marc by phone or email until we can resolve this issue.")
      });
  }
  

  return (
    <Box display="flex" flexDirection="column" height={{ xs: "100dvh", md: "auto" }} justifyContent="center">

      <Typography component='h2' variant='h4'>Contact</Typography>

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

      <Typography component='h3' gutterBottom marginTop="25px" variant='h5'>Request a free quote:</Typography>

      <Grid component="form" container method="POST" onSubmit={handleSubmit} spacing={1}>
        <Grid item xs={12}>
          <TextField
            autoComplete="name"
            fullWidth
            id="quoteName"
            label="Name"
            name="quoteName"
            onChange={(e) => setQuoteName(e.target.value)}
            value={quoteName}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            autoComplete="phone"
            fullWidth
            id="quotePhone"
            label="Phone"
            name="quotePhone"
            onChange={(e) => setQuotePhone(e.target.value)}
            value={quotePhone}
            variant="outlined"
            type="phone"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            autoComplete="email"
            fullWidth
            id="quoteEmail"
            label="Email"
            name="quoteEmail"
            onChange={(e) => setQuoteEmail(e.target.value)}
            value={quoteEmail}
            variant="outlined"
            type="email"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            loading
            type="submit"
            variant="contained"
          >Send</Button>
        </Grid>
        
        <input type="hidden" name="_subject" value="Quote request for Marc's Lawn & Gardening"></input>

      </Grid>

      <Backdrop
        sx={{ bgcolour: 'background.paper', color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <Modal
        open={modalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            You did it!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            The message has been successfully sent to Marc!
          </Typography>
        </Box>
      </Modal>

    </Box>
  )
}
