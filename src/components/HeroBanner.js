import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import ProfileImage from '../assets/images/profile-img.jpg';

const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{ lg: '212px', xs: '70px'},
        ml:{ sm: '50px'}
    }} position='relative' p='20px'>
        <Typography color='#800020' fontWeight='600' fontSize='75px'>
            Meet Thomas
        </Typography>
        <Box borderRadius='100px' >
            {/* <img src={ProfileImage} width='230px' height='260px' /> */}
        </Box>
        <Typography color='##81C784' fontWeight='600' fontSize='50px'>
           Full stack web developer <br />  with Civil Engineering Background
        </Typography>
        
    </Box>
  )
}

export default HeroBanner