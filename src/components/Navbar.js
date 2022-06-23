import React from 'react'
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';


const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-round' sx={{gap: { sm:'122px', xs:'40px'}, mt:
      { sm:'32px', xs:'20px'}, justifyContent:'none', px:'20px'}}>
        
        <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
          <Link to='/' style={{textDecoration:'none', color: '#3A1212', borderBottom:'3px solid #FF2625'}}>Home</Link>
          <a href='#about' style={{textDecoration:'none', color: '#3A1212'}}>About</a>
          <a href='#exercise' style={{textDecoration:'none', color: '#3A1212'}}>Contact</a>
          <a href='#portfolio' style={{textDecoration:'none', color: '#3A1212'}}>Portfolio</a>
          <a href='#exercise' style={{textDecoration:'none', color: '#3A1212'}}>Resume</a>
        </Stack>
    </Stack>
  )
}

export default Navbar;
