import React, { FC } from 'react';
import { Box, Grid, Container, Typography, Button, Card } from '@mui/material';
import HeroSlider from '@/components/sliders/HeroCaroussel';

const HomeHero: FC = () => (
    <Container
        maxWidth="lg"
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
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={3}
                sx={{
                    flexDirection: { xs: 'column-reverse', md: 'row' },
                }}
            >
                <Grid item xs={12} md={6}>
                    <Box sx={{ textAlign: 'left', padding: { xs: 0, md: 1 } }}>
                        <Typography
                            component="h1"
                            sx={(theme) => ({
                                fontSize: {
                                    xs: '1.5rem', // Taille pour petits écrans
                                    sm: '2rem',   // Taille pour écrans moyens
                                    md: '2.5rem', // Taille pour grands écrans
                                },
                                fontWeight: 'bold',
                                color: 'white',
                                mb: 2,
                            })}
                        >
                            Rejoins la ruche ! <br />
                            Inscris-toi maintenant
                        </Typography>
                        <Typography
                            component="h5"
                            sx={(theme) => ({
                                fontSize: {
                                    xs: '0.8rem',  // Taille pour petits écrans
                                    sm: '1rem', // Taille pour écrans moyens
                                    md: '1.3rem', // Taille pour grands écrans
                                },
                                color: 'white',
                                mb: 3,
                            })}
                        >
                            Créativité, collaboration, connaissance : <br />
                            BeeHive, ta communauté étudiante.
                        </Typography>
                        <Button
                            variant="contained"
                            sx={(theme) => ({
                                backgroundColor: 'secondary.main',
                                color: 'black',
                                fontSize: {
                                    xs: '0.6rem',  // Taille pour petits écrans
                                    sm: '0.8rem', // Taille pour écrans moyens
                                    md: '1rem', // Taille pour grands écrans
                                },
                            })}
                        >
                            S'inscrire
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <HeroSlider />
                </Grid>
            </Grid>
        </Card>
    </Container>
);

export default HomeHero;
