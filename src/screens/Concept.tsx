import React, { FC } from 'react';
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
            id='concepts'
            sx={{
                backgroundColor: 'background.paper',
                paddingTop: { xs: 2, md: 4 },
                px: { xs: 1, md: 4 },
            }}
        >
            <Container maxWidth='xl'>
                <Box
                    sx={{
                        backgroundColor: 'background.paper',
                        borderRadius: 10,
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant="h1"
                        fontWeight={'bold'}
                        color={'primary.main'}
                        sx={{ fontSize: 40, pb: '2rem' }}
                    >
                        Notre Concept
                    </Typography>

                    {/* Affichage en grille pour les écrans non mobiles */}
                    {!isMobile && (
                        <Grid container spacing={4}>
                            {conceptData.map((item: Concept) => (
                                <Grid key={item.id} item xs={12} sm={6} md={4} lg={4}>
                                    <ConceptCard key={item.id} item={item} />
                                </Grid>
                            ))}
                        </Grid>
                    )}

                    {/* Affichage du carrousel uniquement pour les écrans mobiles */}
                    {isMobile && (
                        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
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
}

export default HomeOurConcept;
