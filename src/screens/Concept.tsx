import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Concept } from '@/interfaces/concept';
import { useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { ConceptCard } from '../components/concept';
import { conceptData } from '@/data/concepts.data';

const HomeOurConcept: FC = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));

    return (
        <Box
            px={{ xs: 2, md: 6 }}
            id='concepts'
            sx={{ backgroundColor: 'background.paper' }}
        >
            <Container maxWidth='xl'>
                <Box
                    sx={{
                        backgroundColor: 'background.paper',
                        borderRadius: 10,
                        textAlign: 'center',
                        paddingBottom: { xs: 2, md: 4 },
                    }}>
                    <Typography
                        variant="h1"
                        fontWeight={'bold'}
                        color={'primary.main'}
                        sx={{ fontSize: { xs: 30, md: 40 }, pb: '1.5rem' }}
                    >
                        Notre Concept
                    </Typography>

                    {/* Affichage en grille pour les écrans non mobiles */}
                    {!isMobile && (
                        <Grid container spacing={0} maxWidth="xl" justifyContent="space-between">
                            {conceptData.map((item: Concept) => (
                                <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
                                    <ConceptCard key={item.id} item={item} />
                                </Grid>
                            ))}
                        </Grid>
                    )}

                    {/* Affichage du carrousel uniquement pour les écrans mobiles */}
                    {isMobile && (
                        <Swiper
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            spaceBetween={20}
                            className="mySwiper"
                            style={{ paddingBottom: '2rem' }}
                        >
                            {conceptData.map((item: Concept) => (
                                <SwiperSlide key={item.id}>
                                    <ConceptCard key={item.id} item={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </Box>
            </Container>
        </Box>
    );
};

export default HomeOurConcept;
