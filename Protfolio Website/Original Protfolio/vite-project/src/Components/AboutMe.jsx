import React, { useState } from 'react';
import { Box, styled, Typography, Dialog, IconButton , Tooltip } from '@mui/material';
import { DrawOutlined, IntegrationInstructionsOutlined, Dvr, AddAPhotoOutlined, Close } from '@mui/icons-material';

const StyledAboutMe = styled('h2')({
  color: 'white',
  padding: '1rem',
  fontSize: '30px',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '10px',
    left: '15px',
    width: '7%',
    height: '5px',
    background: '#bcb2b2',
    borderRadius: '3px',
    boxShadow: '-2px -2px 6px 3px #373738, 2px 2px 6px 3px #373738',
  }
});

const Service = styled(Box)({
  display: 'flex',
  gap: '30px',
  padding: '1rem 1rem',
  maxWidth: '23rem',
  borderRadius: '10px',
  border: '2px solid white',
  margin: '1rem 1.5rem',
  background: '#222224',
  boxShadow: '-2px -2px 6px 3px #373738, 2px 2px 6px 3px #373738',
  '&:hover': {
    transform: 'scale(1.01)',
    boxShadow: '-2px -2px 5px 1px #bcb2b2 , 2px 2px 5px 1px #bcb2b2', // #0C0EFF
    transition:'0.5s',
  },
});

const ServicesWrapper = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
});

const TestimonialsWrapper = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
});

const TestimonialItems = styled(Box)({
  display: 'flex',
  gap: '30px',
  padding: '1rem 1rem',
  maxWidth: '23rem',
  borderRadius: '10px',
  border: '2px solid white',
  margin: '1.5rem 1.5rem',
  background: '#212123',
  boxShadow: '-2px -2px 6px 3px #373738, 2px 2px 6px 3px #373738',
  position: 'relative',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.01)',
    boxShadow: '-2px -2px 5px 1px #bcb2b2 , 2px 2px 5px 1px #bcb2b2', // #0C0EFF
    transition:'0.5s',
  },

 
});


const CloseButtonStyles = styled(Close)({
  color: 'black',
  border: '1px solid black',
  borderRadius: '10px',
  outline: 'none',
  '&:hover': {
    color: 'red',
    border: '2px solid red'
  },
});

const truncateText = (text) => {
  const words = text.split(' ');
  const truncatedText = words.slice(0, 15).join(' ');
  return truncatedText + (words.length > 15 ? '...' : '');
};

function AboutMe() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const handleOpenDialog = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box>
      <StyledAboutMe>About Me</StyledAboutMe>
      <Typography style={{ padding: "0rem 2rem" }}>
        I'm a Developer and UI/UX Designer hailing from Lahore, Pakistan, with
        expertise in web development. I enjoy turning complex problems into
        simple, beautiful, and intuitive designs. <br />
        <br />
        My job is to build your website so that it is functional and
        user-friendly but at the same time attractive. Moreover, I infuse a
        personal touch into every project, ensuring it's not only eye-catching
        but also easy to use. My goal is to convey your message and identity
        through innovative development strategies. <br />
        <br />
        Let's work together to make your digital dreams a reality!
      </Typography>

      <h2 style={{ padding: "1.5rem 2rem" }}>What I'm Doing</h2>

      <ServicesWrapper>
        <Service>
          <Box>
            <DrawOutlined sx={{ fontSize: "2rem", color: "#B0B0B0" }} />
          </Box>
          <Box>
            <h4 style={{ marginBottom: "5px", fontWeight: "bold" , marginTop:'1px' }}>
              Web Design
            </h4>
            <Typography style={{ color: "#bcb2b2" }}>
              Our designs are modern and top-quality, showing how professional
              we are.
            </Typography>
          </Box>
        </Service>

        <Service>
          <Box>
            <IntegrationInstructionsOutlined
              sx={{ fontSize: "2rem", color: "#B0B0B0" }}
            />
          </Box>
          <Box>
            <h4 style={{ marginBottom: "5px", fontWeight: "bold" , marginTop:'1px' }}>
              Web Development
            </h4>
            <Typography style={{ color: "#bcb2b2" }}>
              We specialize in creating high-quality websites with a
              professional touch.{" "}
            </Typography>
          </Box>
        </Service>

        <Service>
          <Box>
            <Dvr sx={{ fontSize: "2rem", color: "#B0B0B0" }} />{" "}
          </Box>
          <Box>
            <h4 style={{ marginBottom: "5px", fontWeight: "bold" , marginTop:'1px' }}>
              Expert in responsive design
            </h4>
            <Typography style={{ color: "#bcb2b2" }}>
              I'm really good at making websites that work well on any device.{" "}
            </Typography>
          </Box>
        </Service>

        <Service>
          <Box>
            <AddAPhotoOutlined sx={{ fontSize: "2rem", color: "#B0B0B0" }} />{" "}
          </Box>
          <Box>
            <h4 style={{ marginBottom: "5px", fontWeight: "bold" , marginTop:'1px'}}>
              Photography
            </h4>
            <Typography style={{ color: "#bcb2b2" }}>
              I make high-quality photos of any category at a professional
              level.{" "}
            </Typography>
          </Box>
        </Service>
      </ServicesWrapper>

      <h2 style={{ padding: "1rem 2rem" }}>Testimonials</h2>

      <TestimonialsWrapper>

      
      <Tooltip
  title="click to see more detail"
  PopperProps={{
    popperOptions: {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, -25], // Adjust the margin as needed
          },
        },
      ],
    },
  }}
  placement="top"
>
        <TestimonialItems
          onClick={() =>
            handleOpenDialog({
              name: "Daniel Lewis",
              content:
                "Hassnain was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.",
            })
          }

          style={{ '& : hover ': {
            transform: 'scale(1.1)', // Scale up the image on hover
            boxShadow: '-2px -2px 3px 3px red , 2px 2px 3px 3px red', 
          }}}
        >
          <Box
            style={{
              position: "absolute",
              top: "-2rem",
              left: "2rem",
              height: "4.5rem",
              width: "4.5rem",
              background: "#373738",
              border: "2px solid #BCB2B2",
              borderRadius: "10px",
            }}
          >
            <img
            src="../../src/assets/testimonial-img.PNG"
              alt="Daniel Lewis"
              width="100px"
              height="100px"
              style={{
                padding: "9px",
                height: "75%",
                maxWidth: "75%",
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
          </Box>
          <Typography
            variant="h6"
            style={{
              position: "absolute",
              top: "1rem",
              left: "7rem",
              fontWeight: "bold",
            }}
          >
            Daniel Lewis
          </Typography>
          <Box>
            <Typography
              variant="body1"
              style={{ marginTop: "2rem", color: "#bcb2b2" }}
            >
              {truncateText(
                "Hassnain was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client."
              )}
            </Typography>
          </Box>
        </TestimonialItems> </Tooltip>

        
        <Tooltip
  title="click to see more detail"
  PopperProps={{
    popperOptions: {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, -25], // Adjust the margin as needed
          },
        },
      ],
    },
  }}
  placement="top"
>
        <TestimonialItems
          onClick={() =>
            handleOpenDialog({
              name: "Jessica Miller",
              content:
                "Hassnain was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.",
            })
          }
        >
          <Box
            style={{
              position: "absolute",
              top: "-2rem",
              left: "2rem",
              height: "4.5rem",
              width: "4.5rem",
              background: "#373738",
              border: "2px solid #BCB2B2",
              borderRadius: "10px",
            }}
          >
            <img
              src="../../src/assets/testimonial-img2.jpg"
              alt="Jessica Miller"
              width="100px"
              height="100px"
              style={{
                padding: "9px",
                height: "75%",
                maxWidth: "75%",
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
          </Box>
          <Typography
            variant="h6"
            style={{
              position: "absolute",
              top: "1rem",
              left: "7rem",
              fontWeight: "bold",
            }}
          >
            Jessica Miller
          </Typography>
          <Box>
            <Typography
              variant="body1"
              style={{ marginTop: "2rem", color: "#bcb2b2" }}
            >
              {truncateText(
                "Hassnain was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client."
              )}
            </Typography>
          </Box>
        </TestimonialItems> </Tooltip>

        
        <Tooltip
  title="click to see more detail"
  PopperProps={{
    popperOptions: {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, -25], // Adjust the margin as needed
          },
        },
      ],
    },
  }}
  placement="top"
>
        <TestimonialItems
          onClick={() =>
            handleOpenDialog({
              name: "Emily Evans",
              content:
              "Hassnain was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.",
            })
          }
        >
          <Box
            style={{
              position: "absolute",
              top: "-2rem",
              left: "2rem",
              height: "4.5rem",
              width: "4.5rem",
              background: "#373738",
              border: "2px solid #BCB2B2",
              borderRadius: "10px",
            }}
          >
            <img
              src="../../src/assets/testimonial-img3.jpg"
              alt="Emily Evans"
              width="100px"
              height="100px"
              style={{
                padding: "9px",
                height: "75%",
                maxWidth: "75%",
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
          </Box>
          <Typography
            variant="h6"
            style={{
              position: "absolute",
              top: "1rem",
              left: "7rem",
              fontWeight: "bold",
            }}
          >
            Emily Evans
          </Typography>
          <Box>
            <Typography
              variant="body1"
              style={{ marginTop: "2rem", color: "#bcb2b2" }}
            >
              {truncateText(
                "Hassnain was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client."
              )}
            </Typography>
          </Box>
        </TestimonialItems> </Tooltip>

        <Tooltip
  title="click to see more detail"
  PopperProps={{
    popperOptions: {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, -25], // Adjust the margin as needed
          },
        },
      ],
    },
  }}
  placement="top"
>
        <TestimonialItems
          onClick={() =>
            handleOpenDialog({
              name: "Henry William",
              content:
                "Hassnain was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.",
            })
          }
        >
          <Box
            style={{
              position: "absolute",
              top: "-2rem",
              left: "2rem",
              height: "4.5rem",
              width: "4.5rem",
              background: "#373738",
              border: "2px solid #BCB2B2",
              borderRadius: "10px",
            }}
          >
            <img
              src="../../src/assets/testimonial-img4.jpg"
              alt="Henry William"
              width="100px"
              height="100px"
              style={{
                padding: "9px",
                height: "75%",
                maxWidth: "75%",
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
          </Box>
          <Typography
            variant="h6"
            style={{
              position: "absolute",
              top: "1rem",
              left: "7rem",
              fontWeight: "bold",
            }}
          >
            Henry William
          </Typography>
          <Box>
            <Typography
              variant="body1"
              style={{ marginTop: "2rem", color: "#bcb2b2" }}
            >
              {truncateText(
                "Hassnain was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client."
              )}
            </Typography>
          </Box>
        </TestimonialItems> </Tooltip>

        {/* Repeat TestimonialItems for other testimonials */}
      </TestimonialsWrapper>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          sx: { borderRadius: "20px", border: "5px solid #373738" },
        }}
      >
        <Box style={{ padding: "2rem", background: "white", color: "black" }}>
          <IconButton
            style={{ position: "absolute", top: "1rem", right: "1rem" }}
            onClick={handleCloseDialog}
          >
            <CloseButtonStyles />
          </IconButton>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            {selectedTestimonial && selectedTestimonial.name}
          </Typography>
          <time datetime="2021-06-14">14 June, 2021</time>
          <Typography variant="body1" style={{ padding: "10px" }}>
            {selectedTestimonial && selectedTestimonial.content}
          </Typography>
        </Box>
      </Dialog>
    </Box>
  );
}

export default AboutMe;
