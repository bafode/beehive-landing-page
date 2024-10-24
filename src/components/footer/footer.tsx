import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import EmailIcon from '@mui/icons-material/Email';
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'
import Image from 'next/image'

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f2f5f5', px: { xs: 4, md: 16 } }}
    >

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box sx={{ color: "black", width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
            <Image src={'/images/logo.png'} width={170} height={90} alt='logo' />
            <Box display={"flex"} justifyContent={'flex-start'} alignItems={'center'} pb={2}>
              <EmailIcon sx={{ color: 'primary.main' }} />
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mx: 2 }}>
                contact.beehive@gmail.com
              </Typography>
            </Box>
            {/* <Box display={"flex"} justifyContent={'flex-start'} alignItems={'center'} >
              <CallIcon sx={{ color: 'primary.main' }} />
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mx: 2 }}>
                +33 6 06 06 06 06
              </Typography>
            </Box> */}
            <FooterSocialLinks />
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <FooterNavigation />
        </Grid>
        <Grid item md={12} sx={{ textAlign: 'center', color: 'black', padding: '2rem' }}>
          <Typography>
            Copyright &copy; Beehive 2024, tout droit réservé
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
