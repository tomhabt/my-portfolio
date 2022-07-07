import Reac, { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchProjects from '../components/SearchProjects';
import Projects from '../components/Projects';

const HomeContents = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchProjects />
      <Projects />
    </Box>
  )
}

export default HomeContents
