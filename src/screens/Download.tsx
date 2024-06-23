import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../components/styled-button'
import { Card, CardActions, CardContent, CardMedia } from '@mui/material'
import Image from 'next/image'

const HomeDownload: FC = () => {
    return (
        <Box id="telecharger" sx={{
            backgroundColor: 'white', py: { xs: 2, md: 4 }, px: { xs: 2, md: 8 }
        }}>
            <Container maxWidth="xl">
                <Card
                    color='primary.main'
                    sx={{
                        backgroundColor: 'primary.main',
                        borderRadius: 10,
                        py: { xs: 2, md: 4 },
                        px: { xs: 4, md: 8 },
                        textAlign: 'center'
                    }}
                >
                    <CardMedia
                        sx={{ height: 550 }}
                        image="/images/maquette.png"
                        title="maquette"
                    />
                    <CardContent>
                        <Typography variant="h1" component="h2" color={"white"} sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
                            Rejoins la ruche ! <br />
                            Télécharge BeeHive maintenant
                        </Typography>
                        <Typography variant="body2" component="h5" color={"#FFFFFF"} sx={{ mb: 1, fontSize: 24, fontFamily: "Montserrat" }}>
                            Créativité, collaboration, connaissance :<br />
                            BeeHive, ta communauté étudiante.
                        </Typography>
                    </CardContent>
                    <CardActions
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: { xs: 'column', md: 'row' },
                            justifyContent: 'space-around',
                            width: { xs: '100%', md: 560 },
                            mx: 'auto',
                        }}
                    >
                        <StyledButton disableHoverEffect size="large">
                            <Image src="/images/google-play.png" width={300} height={80} alt="Google Play Logo" />
                        </StyledButton>
                        <StyledButton disableHoverEffect size="large">
                            <Image src="/images/app-store-logo.jpg" width={300} height={80} alt="App Store Logo" />
                        </StyledButton>


                    </CardActions>
                </Card>
            </Container>

        </Box>
    )
}

export default HomeDownload
