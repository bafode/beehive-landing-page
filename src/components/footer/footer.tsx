import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'
import Image from 'next/image'

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'black', py: { xs: 6, md: 10 }, color: 'black' }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <Box sx={{ color: "white", width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
              <Image src={'/images/logo.png'} width={170} height={90} alt='logo' />
              <Box display={"flex"} justifyContent={'flex-start'} alignItems={'center'} pb={2}>
                <EmailIcon sx={{ color: 'white' }} />
                <Typography variant="subtitle1" sx={{ letterSpacing: 1, mx: 2 }}>
                  info@beehive.com
                </Typography>
              </Box>
              <Box display={"flex"} justifyContent={'flex-start'} alignItems={'center'} >
                <CallIcon sx={{ color: 'white' }} />
                <Typography variant="subtitle1" sx={{ letterSpacing: 1, mx: 2 }}>
                  +33 6 06 06 06 06
                </Typography>
              </Box>
              <FooterSocialLinks />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid>
          <Grid item md={12} sx={{ textAlign: 'center', color: 'white', padding: '2rem' }}>
            <Typography>
              Copyright &copy; Beehive 2024, tout droit réservé
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
