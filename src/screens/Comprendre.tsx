import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, Container, Grid } from '@mui/material';

const HomeComprendre: FC = () => {
    return (
        <Box
            id="mentors"
            px={{ xs: 2, md: 6 }}
            sx={{
                backgroundColor: 'background.paper',
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        backgroundColor: 'background.paper',
                        borderRadius: 10,
                        py: { xs: 2, md: 4 },
                        textAlign: 'center',
                    }}
                >
                    <Grid container justifyContent="center" rowSpacing={3} alignItems="center">
                        {/* Titre */}
                        <Grid item xs={12}>
                            <Typography
                                textAlign="center"
                                color="primary.main"
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                                    fontWeight: 'bold',
                                    mb: 3,
                                }}
                            >
                                Comprendre Beehive
                            </Typography>
                        </Grid>

                        {/* Carte contenant la vidéo */}
                        <Grid item md={12}>
                            <Card
                                sx={{
                                    borderRadius: 8,
                                    width: '100%',
                                    overflow: 'hidden',
                                    boxShadow: 3,
                                }}
                            >
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    poster="/images/maquette.png"
                                    style={{
                                        width: '100%',
                                        height: 'auto', // Maintient les proportions
                                    }}
                                >
                                    <source src="/videos/comprendre.mp4" type="video/mp4" />
                                </video>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default HomeComprendre;
