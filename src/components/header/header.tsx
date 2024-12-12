import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';


const Header: FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', margin: 0, padding: 0 }}>
        <Image src={'/images/beehive_logo.svg'} width={170} height={90} alt='logo' />
      </Box>
    </Container>
  );
};
export default Header;
