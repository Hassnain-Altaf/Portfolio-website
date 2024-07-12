import React from 'react';
import { Timeline, TimelineDot, TimelineContent, TimelineConnector, TimelineSeparator, TimelineItem } from '@mui/lab';
import { styled , Typography ,Box } from '@mui/material';
import {LocalLibraryOutlined , AutoStoriesOutlined} from '@mui/icons-material';
import {Stack , LinearProgress} from '@mui/joy';
const StyledTimelineDot = styled(TimelineDot)({
  borderRadius: '15%',
  background: '#28282A',
  height: '2rem',
  width: '2rem',
  boxShadow: '-2px -2px 4px 3px #656565, 2px 2px 4px 3px #656565',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#FFFFFF', // Assuming the color of the book icon should be white
});

const StyledResume = styled('h2')({
  color: 'white',
  padding: '0rem 1rem',
  fontSize: '30px',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '16px',
    width: '7%',
    height: '5px',
    background: '#bcb2b2',
    borderRadius: '3px',
    boxShadow: '-2px -2px 6px 3px #373738, 2px 2px 6px 3px #373738',
  }
});

function Resume() {
  return (

<>
    <StyledResume>Resume</StyledResume>

    <Timeline
      sx={{
        '& .MuiTimelineItem-root::before': {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <StyledTimelineDot>
            <AutoStoriesOutlined />
          </StyledTimelineDot>
          <TimelineConnector style={{ height: '2rem' }} />
        </TimelineSeparator>
        <TimelineContent style={{ padding: '25px' , fontWeight:'bold' , fontSize:'24px'}}>Education</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            style={{
              margin: '15px',
              boxShadow: '-2px -2px 8px 3px #656565, 2px 2px 8px 3px #656565',
              background: '#28282A',
              border: '1px solid #FFFFFF',
              padding: '8px',
            }}
          />
          <TimelineConnector style={{ height: '2rem' }} />
        </TimelineSeparator>
        <TimelineContent style={{ padding: '6px 23px' }}> <Typography variant='h4' style={{fontSize:'16px',textShadow: '4px 4px 8px #656565', fontWeight:'bold' , padding: '6px 0px'}}> Superior University </Typography>
        <span style={{fontSize:'14px' , color:'#A8A8A8', padding:'8px 0px'}}>2022 — 2026</span> 
        <span style={{fontSize:'14px' , background:'green' , padding:'5px', borderRadius:'5px' , margin:'20px'}}>Present</span>
        <Typography style={{padding:'16px 0px' , maxWidth:'46rem'}}>I am pursuing a Bachelor of Science in Software Engineering from <strong>Superior University</strong>, where I am gaining extensive knowledge and hands-on experience in software development and engineering principles. </Typography>
        </TimelineContent>
      </TimelineItem>

      
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            style={{
              margin: '15px',
              boxShadow: '-2px -2px 8px 3px #656565, 2px 2px 8px 3px #656565',
              background: '#28282A',
              border: '1px solid #FFFFFF',
              padding: '8px',
            }}
          />
          <TimelineConnector style={{ height: '2rem' }} />
        </TimelineSeparator>
        <TimelineContent style={{ padding: '6px 23px' }}> <Typography variant='h4' style={{fontSize:'16px',textShadow: '4px 4px 8px #656565', fontWeight:'bold' , padding: '6px 0px'}}> Punjab group of Colleges</Typography>
        <span style={{fontSize:'14px' , color:'#A8A8A8', padding:'8px 0px'}}>2020 — 2022</span> 
        <span style={{fontSize:'14px' , background:'green' , padding:'5px', borderRadius:'5px' , margin:'20px'}}>Completed</span>
        <Typography style={{padding:'16px 0px' , maxWidth:'46rem'}}>I achieved an <strong>A grade </strong> in Fsc Pre-Engineering from <strong>Punjab group of Colleges</strong>, highlighting my strong proficiency in mathematics and science disciplines. </Typography>
        </TimelineContent>
      </TimelineItem>



      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            style={{
              margin: '15px',
              boxShadow: '-2px -2px 8px 3px #656565, 2px 2px 8px 3px #656565',
              background: '#28282A',
              border: '1px solid #FFFFFF',
              padding: '8px',
            }}
          />
        </TimelineSeparator>
        <TimelineContent style={{ padding: '6px 23px' }}> <Typography variant='h4' style={{fontSize:'16px',textShadow: '4px 4px 8px #656565', fontWeight:'bold' , padding: '6px 0px'}}> Govt Boys High School</Typography>
        <span style={{fontSize:'14px' , color:'#A8A8A8', padding:'8px 0px'}}>2019 — 2020</span> 
        <span style={{fontSize:'14px' , background:'green' , padding:'5px', borderRadius:'5px' , margin:'20px'}}>Completed</span>
        <Typography style={{padding:'16px 0px' , maxWidth:'46rem'}}>I achieved  an <strong style={{color:'#A8A8A8'}}> A grade</strong> in Matric from <strong style={{color:'#A8A8A8'}}>Govt Boys High School,</strong> demonstrating my exceptional academic performance and dedication across all subjects.</Typography>
        </TimelineContent>
      </TimelineItem>

    </Timeline> 


     {/*  ==================== > "Skills Section" <========================== */}

     <Typography variant='h2' style={{fontSize:'24px' , fontWeight:'bold' , padding: '0rem 2rem', }}>My Skills</Typography>

     <Box style={{ margin: '15px',
              boxShadow: '-2px -2px 8px 3px #656565, 2px 2px 8px 3px #656565',
              background: '#28282A',borderRadius:'10px',
              border: '1px solid #FFFFFF', padding:'50px'}}>

<Stack spacing={2} sx={{ flex: 1 , gap:'20px'}}>
      
       
      <Typography style={{margin:'0'}}>Html
      <LinearProgress determinate value={100} /> </Typography>

      <Typography style={{margin:'0'}}>CSS
      <LinearProgress determinate value={90} /> </Typography>

      <Typography style={{margin:'0'}}>BooStrap
      <LinearProgress determinate value={85} /> </Typography>

      <Typography style={{margin:'0'}}>JavaScript
      <LinearProgress determinate value={70} /> </Typography>


      <Typography style={{margin:'0'}}>React Js
      <LinearProgress determinate value={80} /> </Typography>

      <Typography style={{margin:'0'}}>Material Ui
      <LinearProgress determinate value={90} /> </Typography>


      <Typography style={{margin:'0'}}>Material Tailwind
      <LinearProgress determinate value={100} /> </Typography>


    </Stack>

     </Box>


    </>
  );
}

export default Resume;
