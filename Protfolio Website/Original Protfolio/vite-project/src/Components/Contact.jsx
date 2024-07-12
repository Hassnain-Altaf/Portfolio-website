import React from 'react';
import { Box, Typography, styled ,Container, TextField, Button,Link } from '@mui/material';

const MapBoxStyled = styled(Box)({

    opacity: 0.8 , 
    margin:'2rem 1rem',
  '&:hover': {
    opacity: 0.5 // Decrease opacity on hover
  }
});


const StyledContact = styled('h2')({
    color: 'white',
    padding: '2rem',
    fontSize: '30px',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '26px',
      left: '30px',
      width: '4%',
      height: '5px',
      background: '#bcb2b2',
      borderRadius: '3px',
      boxShadow: '-2px -2px 6px 3px #373738, 2px 2px 6px 3px #373738',
    }
  });

function Contact() {
  return (
    <>
    <StyledContact>Contact</StyledContact>
    
    <MapBoxStyled className="mapbox"> {/* Changed class to className */}
      <figure>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd" width="100%" height="500px" loading="lazy"></iframe>
        </figure>
    </MapBoxStyled>

     {/* <Typography variant='h4' style={{fontWeight:'bold'  , fontSize:'24px' , padding: '2rem',}}>Contact Form</Typography> */}

     <Container maxWidth="md">
      <Box sx={{ marginTop: '2rem' }}>
        <Typography variant="h3" gutterBottom color="white" style={{fontSize:'24px', fontWeight:'bold'}}>Contact Form</Typography>
      </Box>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <TextField
  label="Full Name"
  variant="outlined"
  margin="normal"
  required
  fullWidth
  autoFocus
  InputLabelProps={{
    style: { color: 'white' }, // Change label color to white
  }}
  inputProps={{
    style: { color: 'white' }, // Change input text color to white
  }}
  InputProps={{
    style: { borderColor: 'white' }, // Change input border color to white
  }}
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white', // Change default border color to white
      },
      '&:hover fieldset': {
        borderColor: 'white', // Change border color on hover to white
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white', // Change border color on focus to white
      },
    },
  }}
/>


        <TextField
          label="Email Address"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          InputLabelProps={{
            style: { color: 'white' }, // Change label color to white
          }}
          inputProps={{
            style: { color: 'white' }, // Change input text color to white
          }}
          InputProps={{
            style: { borderColor: 'white' }, // Change input border color to white
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white', // Change default border color to white
              },
              '&:hover fieldset': {
                borderColor: 'white', // Change border color on hover to white
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white', // Change border color on focus to white
              },
            },
          }}
        />
        <TextField
          label="Your Message"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          multiline
          rows={4}
        InputLabelProps={{
            style: { color: 'white' }, // Change label color to white
          }}
          inputProps={{
            style: { color: 'white' }, // Change input text color to white
          }}
          InputProps={{
            style: { borderColor: 'white' }, // Change input border color to white
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white', // Change default border color to white
              },
              '&:hover fieldset': {
                borderColor: 'white', // Change border color on hover to white
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white', // Change border color on focus to white
              },
            },
          }}
        />
       <Button
  variant="contained"
  type="submit"
  style={{
    margin: '10px',
    fontWeight:'bold',
    color: 'white', // Set text color to white
    background: 'black', // Set background color to black
    '&:hover': {
        background: 'white', // Change background color on hover
        color: 'black', // Change text color on hover
      },
  }}
>
   <img src='../../src/assets/send.svg' alt='sendsvg' style={{margin:'8px 8px 8px 0px'}}></img>
   <Link to="mailto:hassnainalvi0@gmail.com"  style={{textDecoration:'none', color:'white' ,'&:hover': {
      background: 'darkgrey', // Change background color on hover
      cursor:'pointer'
    }, }}><span>Send Message</span></Link>
</Button>

      </Box>
    </Container>    
    </>
  );
}

export default Contact;
