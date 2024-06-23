import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { TypeAnimation } from 'react-type-animation'
import { Card, CardMedia } from '@mui/material'


const HomeHero: FC = () => {
    return (
        <Box id="hero" sx={{ backgroundColor: 'background.paper', height: '100vh', position: 'static' }}>
            <Container maxWidth="xl">
                <Grid justifyContent={'center'} alignItems={'center'} container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
                    <Grid item xs={12} md={12}>
                        <Box
                            sx={{
                                textAlign: { xs: 'center', md: 'left' },
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <Box sx={{ mb: 3 }}>
                                <Typography
                                    component="h2"
                                    textAlign={'center'}
                                    sx={{
                                        fontSize: { xs: 40, md: 72 },
                                        letterSpacing: 1.5,
                                        fontWeight: 'bold',
                                        lineHeight: 1.3,
                                        color: 'primary.main',
                                        backgroundColor: 'unset',
                                    }}
                                >
                                    Bienvenue sur Beehive
                                </Typography>
                            </Box>
                            <Grid item xs={12} >
                                <Box sx={{ minHeight: { xs: '120px', sm: '160px', md: '60px' } }}>
                                    <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                                        <TypeAnimation
                                            sequence={[
                                                'Rejoignez',
                                                700,
                                                'Rejoignez une', //  Continuing previous Text
                                                700,
                                                'Rejoignez une communauté',
                                                700,
                                                'Rejoignez une communauté dynamique',
                                                700,
                                                'Rejoignez une communauté',
                                                700,
                                                'Rejoignez une',
                                                700,
                                                'Rejoignez',
                                                700,
                                                '',
                                                500,
                                            ]}
                                            style={{ fontSize: '2em' }}
                                            repeat={Infinity}
                                            cursor={false}
                                        />
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid container spacing={3} sx={{ flexDirection: { xs: 'column', md: 'row' }, justifyContent: "center", alignItems: "center" }}>
                                <Grid item xs={12} md={8} container spacing={3}>
                                    <Grid item xs={12} md={6} >
                                        <Box
                                            display={'flex'}
                                            flexDirection={'column'}
                                            justifyContent={'space-around'}
                                            alignItems={'center'}
                                            sx={{
                                                borderRadius: 3,
                                                boxShadow: 3,
                                                height: '100%',
                                                textAlign: { xs: 'center', md: 'left' },
                                                padding: '1rem',
                                                bgcolor: 'primary.main',
                                                '&:hover': {
                                                    bgcolor: 'primary.dark',
                                                },
                                            }}
                                        >
                                            <Typography
                                                component="mark"
                                                sx={{
                                                    color: 'white',
                                                    fontSize: { xs: 14, md: 24 },
                                                    fontWeight: 'bold',
                                                    backgroundColor: 'unset',
                                                    textAlign: 'center'
                                                }}
                                            >
                                                Beehive, Votre communauté étudiante
                                            </Typography>
                                            <Typography
                                                component="mark"
                                                sx={{
                                                    color: 'white',
                                                    fontSize: { xs: 9, md: 18 },
                                                    fontWeight: 'normal',
                                                    backgroundColor: 'unset',
                                                }}
                                            >
                                                Connectes toi avec des étudiants partageant les mêmes idées que toi, partages tes expériences et découvres de nouvelles perspectives.
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} >
                                        <Box
                                            padding={'1rem'}
                                            display={'flex'}
                                            justifyContent={'center'}
                                            alignItems={'space-between'}
                                            sx={{
                                                borderRadius: 3,
                                                boxShadow: 3,
                                                height: '100%',
                                                bgcolor: '#FEBF21',
                                                '&:hover': {
                                                    bgcolor: 'primary.dark',
                                                },
                                            }}
                                        >
                                            <Typography
                                                component="h2"
                                                sx={{
                                                    fontSize: { xs: 20, md: 40 },
                                                    letterSpacing: 1.5,
                                                    fontWeight: 'bold',
                                                    lineHeight: 1.3,
                                                }}
                                            >
                                                <Typography
                                                    component="mark"
                                                    textAlign={'center'}
                                                    sx={{
                                                        color: 'primary.main',
                                                        fontSize: 'inherit',
                                                        fontWeight: 'inherit',
                                                        backgroundColor: 'unset',
                                                    }}
                                                >
                                                    Creativité
                                                    <br />
                                                    Colaboration
                                                    <br />
                                                    Connaissance
                                                    <br />

                                                </Typography>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={3}  >
                                        <Box
                                            display={'flex'}
                                            flexDirection={'column'}
                                            justifyContent={'space-around'}
                                            alignItems={'center'}
                                            padding={'1rem'}
                                            sx={{
                                                borderRadius: 3,
                                                boxShadow: 3,
                                                height: '100%',
                                                bgcolor: '#FEBF21',
                                                '&:hover': {
                                                    bgcolor: 'primary.dark',
                                                },
                                            }}
                                        >
                                            <Typography
                                                component="h2"
                                                sx={{
                                                    letterSpacing: 1,
                                                    lineHeight: 1.3,
                                                    color: 'primary.main',
                                                    fontSize: { xs: 10, md: 20 },
                                                    fontWeight: 'bold',
                                                    backgroundColor: 'unset',
                                                }}
                                            >

                                                Partages tes Créations

                                            </Typography>
                                            <Typography
                                                component="mark"
                                                sx={{
                                                    color: 'primary.main',
                                                    fontSize: { xs: 10, md: 20 },
                                                    fontWeight: 'normal',
                                                    backgroundColor: 'unset',
                                                }}
                                            >
                                                Beehive est une tribune pour montrer ton talent.
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={9} >
                                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{
                                            height: '100%',
                                            width: '100%',
                                        }}>
                                            <Card
                                                variant='outlined'
                                                sx={{
                                                    borderRadius: 3,
                                                    boxShadow: 3,
                                                    height: '100%',
                                                    width: '100%',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    textAlign: { xs: 'center', md: 'left' },
                                                    borderColor: 'primary.main',
                                                }}
                                            >

                                                <Image src="/images/logo.png" width={500} height={200} alt="logo" />
                                            </Card>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{
                                        borderRadius: 3,
                                        boxShadow: 3,
                                        width: '100%',
                                        height: '100%',
                                        lineHeight: 0,
                                        backgroundColor: 'primary.main',
                                        padding: '2rem',
                                    }} >
                                        <Card sx={{
                                            borderRadius: 4,
                                            boxShadow: 3, backgroundColor: 'primary.main'
                                        }} >
                                            <CardMedia>
                                                <video
                                                    autoPlay
                                                    loop
                                                    muted
                                                    poster="/images/beehive.png"
                                                    height={"100%"}
                                                    width={"100%"}
                                                >
                                                    <source
                                                        src="/videos/beehive-hero.mp4"
                                                        type="video/mp4"
                                                    />
                                                </video>
                                            </CardMedia>
                                        </Card>
                                    </Box>
                                </Grid>

                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}

export default HomeHero
