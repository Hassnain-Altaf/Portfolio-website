import { useState } from 'react';
import { Box, styled } from '@mui/material';
import './App.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SideBar from './Components/SideBar';
import MainFrame from './Components/MainFrame';

const ComponentWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-evenly!important', 
});




function App() {
  return (
    <ComponentWrapper >
      <SideBar />
      <MainFrame />
    </ComponentWrapper>
  );
}

export default App;
