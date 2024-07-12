import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Wrapper = styled(Box)({
    background: '#1E1E1F',
    color: 'white',
    border: '2px solid white',
    borderRadius: '10px',
    minHeight: '78rem',
    maxHeight: '79rem',
    minWidth: '57rem',
    maxWidth: '57rem',
    marginTop: '3rem',
    position: 'sticky',
    top: '3rem',
    paddingTop: '60px',
    boxShadow: '-1px -1px 2px 2px #bcb2b2, 1px 1px 2px 2px #bcb2b2',
});

function MainFrame() {
  return (
    <Router>
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default MainFrame;
