import React, { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';


const Header: FC = () => {
  return (
    <AppBar position='static' sx={{ background: 'white' }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex' }}>
          <Image src={'/images/beehive_logo.svg'} width={170} height={90} alt='logo' />
        </Box>
      </Container>
    </AppBar>
  );
};
export default Header;
