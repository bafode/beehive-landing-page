import React, { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';


const Header: FC = () => {
  const { breakpoints } = useTheme();
  return (
    <AppBar position='static' sx={{ background: 'white' }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex' }}>
          <Image src="/images/logo.png" width={130} height={100} alt="logo" />
        </Box>
      </Container>
    </AppBar>
  );
};
export default Header;
