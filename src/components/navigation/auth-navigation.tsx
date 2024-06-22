import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'
import { Link as ScrollLink } from 'react-scroll';

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      <ScrollLink to="telecharger" smooth={true} duration={500}>
        <StyledButton disableHoverEffect={true} variant="outlined">
          Télecharger
        </StyledButton>
      </ScrollLink>
      <ScrollLink to="contact" smooth={true} duration={500}>
        <StyledButton disableHoverEffect={true}>S'inscrire</StyledButton>
      </ScrollLink>
    </Box>
  )
}

export default AuthNavigation
