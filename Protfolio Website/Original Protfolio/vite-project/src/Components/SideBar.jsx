import React from 'react';
import { Box, Divider, Typography, styled, useTheme } from '@mui/material';


const StyleSideBar = styled(Box)({
   
    background: '#1E1E1F',
    color: 'white',
    border: '2px solid white', 
    borderRadius: '10px',
    // minHeight: '115vh',
    maxHeight: '43rem',
    minHeight: '42rem',
    width: '17rem',
    // marginTop: '1rem',
    position: 'sticky',
    top: '50px',
    paddingTop: '60px',
    margin: ' 2rem 2rem 0rem 2rem',
    boxShadow: '-3px -3px 4px 2px #bcb2b2, 3px 3px 4px 2px #bcb2b2',
});



const StyleProfileImage = styled('img')({
    width: '70%',
    height: '70%',
    objectFit: 'cover', // Ensure the image covers the container
    objectPosition: 'center center', // Center the image both horizontally and vertically
    borderRadius: '10px',
    margin: '15%',
    transition: 'transform 0.3s ease-in-out', // Add a transition effect for the transform property
    '&:hover': {
        transform: 'scale(1.1)', // Scale up the image on hover
        boxShadow: '-2px -2px 3px 3px #bcb2b2 , 2px 2px 3px 3px #bcb2b2', 
    },
});

const ProfileContainer = styled(Box)({
    display: 'block',
    width: '150px',
    height: '150px',
    margin: '1rem 3.5rem',
    background: '#373738',
    borderRadius:'20px'
});

const About = styled(Typography)({
    borderRadius:'5px',
    border: '2px solid white',
    color:'white',
    marginTop:'2.5rem',
    height:'fit-content',
    width:'fit-content',
    margin:' 1rem auto ',
    padding:'3px 6px',
    fontSize:'12px',
    cursor:'pointer',
    '&:hover':{
        boxShadow: '-2px -2px 5px 1px white , 2px 2px 5px 1px white', 
        transition:'0.5s'
    }
});

const StyledDivider = styled(Divider)({
    backgroundColor: 'white', // Set background color
    marginTop: '2rem', // Adjust top margin
    marginBottom:'1rem'
});

const InfoWrapper = styled(Box)({
    display:'flex',
    justifyContent:'flex-start',
    alignItems:"center",
    margin:'15px 5px',
})

const ImageBox= styled (Box)({

    borderRadius:'10px',
    border: '2px solid white',
    padding:'6px 8.5px',
    boxShadow: '0px 10px 15px -3px #656565',
    margin:'10px',
    '&:hover':{
        boxShadow: '-2px -2px 5px 1px white , 2px 2px 5px 1px white', 
        transition:'0.5s'
    }
})


const SoicalMedia = styled('img')({
    filter: 'invert(100%)', 
    color: 'white' , 
    height:'1rem' , 
    width:'1rem'  ,  
    margin:'3px' , 
    borderRadius:'50%',
    border: '2px solid', // Define the border
    borderColor: '#FFFFFF', // Set the border color to white
    padding:'5px',
    cursor:'pointer',
    '&:hover':{
        boxShadow: '-2px -2px 5px 1px #bcb2b2 , 2px 2px 5px 1px #bcb2b2', 
        transition:'0.5s',
        filter: 'invert(0%)', 
    }
});


function SideBar() {
    return (
        <StyleSideBar>
            <ProfileContainer>
                <StyleProfileImage src="../../src/assets/Profile-img.jpeg" alt="profile" />
            </ProfileContainer>
            <h2 style={{ margin: '0rem 3rem' }}>Hassnain Alvi</h2>
            <About title='Web developer'>Web developer</About>
            <StyledDivider variant="middle" />
            
            <Box>

           {/* ============== > 1st < ================= */}
            <InfoWrapper>
            <ImageBox>
              <img src="../../src/assets/mail.svg" alt="mail-Icon" style={{ filter: 'invert(69%)', color: 'white' , height:'16px' , width:'16px' ,  }} />
            </ImageBox> 

            <Box>
                <Typography style={{fontSize:'12px'}}>EMAIL</Typography>
                <Box><a href="mailto:abc@gmail.com" class="contact-link" style={{color:'#656565'}} >Hassnainalvi0@gmail.com</a>
                </Box>
            </Box>
            </InfoWrapper>

            {/* ============== > 2nd < ================= */}
            <InfoWrapper>
            <ImageBox>
              <img src="../../src/assets/phone.svg" alt="phone-Icon" style={{ filter: 'invert(69%)', color: 'white' , height:'16px' , width:'16px' , fontWeight:'550' }} />
            </ImageBox> 

            <Box>
                <Typography style={{fontSize:'12px'}}>PHONE</Typography>
                <Box>
                <Typography style={{color:'#656565' , fontWeight:'550' , fontSize:'15px' }}>+92 305-12345</Typography>
                </Box>
            </Box>
            </InfoWrapper>

            {/* ========== > 3rd < ============= */}
            <InfoWrapper>
            <ImageBox >
              <img src="../../src/assets/calendar-fold.svg" alt="calendar-Icon" style={{ filter: 'invert(69%)', color: 'white' , height:'16px' , width:'16px' ,   }} />
            </ImageBox> 

            <Box>
                <Typography style={{fontSize:'12px'}}>BIRTHDAY</Typography>
                <Box>
                <time datetime="2004-06-23" style={{color:'#656565' , fontWeight:'550'}} >June 23, 2004</time>
                </Box>
            </Box>
            </InfoWrapper>

            {/* ========== > 4th < ============= */}
            <InfoWrapper>
            <ImageBox >
              <img src="../../src/assets/map-pinned.svg" alt="locatiom-Icon" style={{ filter: 'invert(69%)', color: 'white' , height:'16px' , width:'16px' ,  }} />
            </ImageBox> 

            <Box>
                <Typography style={{fontSize:'12px'}}>LOCATION</Typography>
                <Box>
                <Typography style={{color:'#656565' ,fontWeight:'550' , fontSize:'15px' }}>pakistan, Lahore</Typography>
                </Box>
            </Box>
            </InfoWrapper>
            </Box>

            <Box style={{display:'flex' , justifyContent:'center'}} >
                <span > 
                <a href='#' style={{color:'#b0b0b0'}} target='_blank' >   <SoicalMedia src="../../src/assets/facebook.svg" alt="facebook-logo" title='visit-facebook'/> </a>
                </span>
                <span > 
                <a href='#' style={{color:'#b0b0b0'}} target='_blank' >   <SoicalMedia src="../../src/assets/Linkedin.svg" alt="linkedin-logo" title='visit-linkedin'/> </a>
                </span>
                <span>
                <a href='#' style={{color:'#b0b0b0'}} target='_blank' >   <SoicalMedia src="../../src/assets/twitter.svg" alt="twitter-logo" title='visit-twitter' /> </a>
                </span>
                <span >
                    <a href='#' style={{color:'#656565'}} target='_blank' > <SoicalMedia src="../../src/assets/instagram.svg" alt="insta-logo" title='visit-instagram'/>  </a>
                </span>
            </Box>
        </StyleSideBar>
    );
}

export default SideBar;
