import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Navbar from './components/Navbar';
import HomeContents from './pages/HomeContents';
import ProjectDetail from './pages/ProjectDetail';
import Footer from './components/Footer';



function App() {
  return (
  <Box width='400px'sx={{width: { xl:'888px' }}} m='auto'>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomeContents></HomeContents>} />
      <Route path='/project/:id' element={<ProjectDetail></ProjectDetail>} />
    </Routes>
    <Footer />
  </Box>
  );
}

export default App;
