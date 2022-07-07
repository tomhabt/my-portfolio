import React from 'react';
import { Box, Stack, Typography, Button} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

import ProfileImage from '../assets/images/profile-img.jpg';

const HeroBanner = () => {

  const theme = createTheme ({
    palette: {
      blue:{
        main:'#3d5afe',
      },
      dark: {
        main: ''
      },
      red: {
        main: ''
      }
  }
  })
    
  return (
    <div> 
      <Box sx={{
              mt:{ lg: '30px', xs: '70px'},
              ml:{ sm: '10px'}
              }}  p='10px'>
          <Typography
              fontWeight={600}
              color='#ff2625'
              sx={{
                  opacity:0.1,
                  display: { lg:'block', xs:'none'}
              }}
              fontSize='80px'>
              "...drunk in coding"
          </Typography>

          <Box className='hero-icons'>
            <ThemeProvider theme={theme}>
              <Button href='#projects' variant="contained" color="blue"> <LinkedInIcon></LinkedInIcon></Button>
              <Button href='#projects' variant="contained" color="dark"><GitHubIcon></GitHubIcon></Button>
              <Button href='#projects' variant="contained" color="error"><YouTubeIcon></YouTubeIcon></Button>
            </ThemeProvider>
          </Box>

          <Box className='hero-title' position='absolute'>
            <Typography color='#800020' fontWeight='600' fontSize='50px' >
                Meet Thomas
            </Typography>
            <Typography  color='##81C784' fontWeight='600' fontSize='30px'>
              Full stack web developer 
            </Typography>
            <Button href='#projects' variant="contained" color="error">Find my resume here</Button>
          </Box>
          <Box className='hero-image-container'>
            <div className='image-section'>
              <img className='hero-image' src={ProfileImage} alt='Thomas Habtemariam'></img>
            </div>
            <div className='para-section'> 
              <Typography className='hero-para' color='##81C784' fontWeight='50' fontSize='20px' 
                    align='center' sx=
                    {{color: {lg:'black', xs:'#800020'},
                    fontSize:{lg:'20px', xs:'20px'}}}>
                    With great passion and interest in Full Stack Web Development and applications.<br></br> <br></br>
                    For more details and other inquiries, please call at (613) 600 8669 or e-mail at thomas.habtemariam@gmail.com.
              </Typography>
            </div>
          </Box>
          <Box className='hero-projects-link'> 
            <Typography color='##81C784' fontSize='25px' mb='20px' sx=
            {{color: {lg:'black', xs:'white'}}}>
              Check out my most successful projects
            </Typography>
            <Button href='#projects' variant="contained" color="error">Explore here</Button>
          </Box>
      </Box>
    </div>
  )
}

export default HeroBanner