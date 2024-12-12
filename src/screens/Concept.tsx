import React, { FC } from 'react';
import { Box, Container, Typography, Grid, useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { ConceptCard } from '../components/concept';
import { conceptData } from '@/data/concepts.data';

const HomeOurConcept: FC = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));

    return (
        <Container maxWidth="lg">
            <Box
                id="concepts"
                sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: 10,
                    textAlign: 'center',
                    pb: { xs: 2, md: 4 },
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                        fontWeight: 'bold',
                        color: 'primary.main',
                        mb: 3,
                    }}
                >
                    Notre Concept
                </Typography>

                {/* Affichage adaptatif */}
                {isMobile ? (
                    <Swiper
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        spaceBetween={20}
                        style={{ paddingBottom: '2rem' }}
                    >
                        {conceptData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <ConceptCard item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <Grid
                        container
                        spacing={3}
                        justifyContent="center" // Centre les éléments horizontalement
                    >
                        {conceptData.map((item) => (
                            <Grid
                                key={item.id}
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                display="flex" // Assure un centrage vertical
                                justifyContent="center" // Centre les cartes horizontalement
                            >
                                <ConceptCard item={item} />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Box>
        </Container>
    );
};

export default HomeOurConcept;
