import React, { useState } from 'react';
import { AppBar, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Box>
      <AppBar
        sx={{
          position: 'absolute',
          top: '0',
          background: '#28282A',
          boxShadow: 'none',
          border: '2px solid #bcb2b2',
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '6px',
          display: 'flex',
          justifyContent: 'end',
          maxWidth: '30rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: 'auto',
            marginRight: '1rem',
            fontWeight: 'bold',
          }}
        >
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              padding: '1rem',
              color: isActive || activeIndex === 0 ? '#B0B0B0' : 'inherit',
              textDecoration: 'none',
            })}
            onClick={() => handleClick(0)}
          >
            About
          </NavLink>
          <NavLink
            to="/resume"
            style={({ isActive }) => ({
              padding: '1rem',
              color: isActive || activeIndex === 1 ? '#B0B0B0' : 'inherit',
              textDecoration: 'none',
            })}
            onClick={() => handleClick(1)}
          >
            Resume
          </NavLink>
          <NavLink
            to="/portfolio"
            style={({ isActive }) => ({
              padding: '1rem',
              color: isActive || activeIndex === 2 ? '#B0B0B0' : 'inherit',
              textDecoration: 'none',
            })}
            onClick={() => handleClick(2)}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              padding: '1rem',
              color: isActive || activeIndex === 3 ? '#B0B0B0' : 'inherit',
              textDecoration: 'none',
            })}
            onClick={() => handleClick(3)}
          >
            Contact
          </NavLink>
        </Box>
      </AppBar>
    </Box>
  );
}

export default Header;
