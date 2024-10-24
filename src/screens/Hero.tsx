import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button, Card } from '@mui/material';
import HeroSlider from '@/components/sliders/HeroCaroussel';

const HomeHero: FC = () => {
    return (
        <Box
            id="hero"
            px={{ xs: 2, md: 6 }}
            sx={{
                backgroundColor: 'white',
                height: { xs: 'auto', md: '70vh' },
                position: 'static',
            }}
        >
            <Card
                sx={{
                    borderRadius: 4,
                    boxShadow: 3,
                    backgroundColor: 'primary.main',
                    padding: { xs: 2, md: 3 },
                }}
            >
                <Container maxWidth="xl">
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        spacing={3}
                        sx={{
                            flexDirection: { xs: 'column-reverse', md: 'row' }, // Sur mobile, le texte sera en bas et le slider en haut
                            backgroundColor: 'primary.main',
                            height: '100%', // Ajustement de la hauteur pour mobile
                        }}
                    >
                        <Grid item xs={12} md={8}>
                            <Box
                                sx={{
                                    textAlign: 'left',
                                    padding: { xs: 0, md: 1 },
                                }}
                            >
                                <Typography
                                    component="h1"
                                    sx={{
                                        fontSize: { xs: 25, md: 72 },
                                        letterSpacing: 1.5,
                                        fontWeight: 'bold',
                                        lineHeight: 1,
                                        color: 'white',
                                        marginBottom: 2,
                                    }}
                                >
                                    Rejoins la ruche ! <br />
                                    Inscris-toi maintenant
                                </Typography>

                                <Typography
                                    component="h5"
                                    sx={{
                                        letterSpacing: 1.5,
                                        fontSize: { xs: 18, md: 24 },
                                        lineHeight: 1.3,
                                        color: 'white',
                                        marginBottom: 3,
                                    }}
                                >
                                    Créativité, collaboration, connaissance : <br />
                                    BeeHive, ta communauté étudiante.
                                </Typography>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="medium"
                                    sx={{
                                        backgroundColor: 'secondary.main',
                                        color: 'black',
                                    }}
                                >
                                    S'inscrire
                                </Button>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4} >
                            <HeroSlider />
                        </Grid>
                    </Grid>
                </Container>
            </Card>
        </Box>
    );
};

export default HomeHero;
