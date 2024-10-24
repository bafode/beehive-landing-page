import { Check } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, Container, Divider, Grid, Typography, } from "@mui/material";
import React, { FC } from 'react';
import { useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Pricing: FC = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
    return (
        <Box
            px={{ xs: 2, md: 6 }}
            id='nos-offres'
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
                    <Typography variant="h1" color={'primary.main'} sx={{ fontSize: 40, pb: '2rem' }}>
                        Découvre nos offres
                    </Typography>
                    {!isMobile && (
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
                                <Card
                                    variant="outlined"
                                    sx={{
                                        bgcolor: "white",
                                        borderRadius: 3,
                                        boxShadow: 3,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <CardContent>
                                        <Typography color={'primary.main'} variant="h2" component="div" align="center" gutterBottom>
                                            GRATUIT
                                        </Typography>
                                        <Divider sx={{ width: 1 }} />
                                        <Box>


                                            <Box
                                                key={1}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                my={1}
                                            >
                                                <Check color="success" />
                                                <Typography sx={{ paddingLeft: '1rem' }}>Chat en duo en groupe de 3</Typography>
                                            </Box>
                                            <Box
                                                key={1}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                mb={1}
                                            >
                                                <Check color="success" />
                                                <Typography textAlign={'start'} sx={{ paddingLeft: '1rem' }}>Accès aux Posts Inspiration et Communauté</Typography>
                                            </Box>
                                            <Box
                                                key={1}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                mb={1}
                                            >
                                                <Check color="success" />
                                                <Typography sx={{ paddingLeft: '1rem' }}>Création de Posts</Typography>
                                            </Box>
                                            <Box
                                                key={1}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                mb={1}
                                            >
                                                <Check color="success" />
                                                <Typography sx={{ paddingLeft: '1rem' }}>Epingler jusqu'a 50 posts</Typography>
                                            </Box>
                                            <Box
                                                key={1}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                mb={1}
                                            >
                                                <Check color="success" />
                                                <Typography sx={{ paddingLeft: '1rem' }}>Visibilité Standard</Typography>
                                            </Box>

                                        </Box>
                                        {/* <Typography
                                            color={'primary.main'}
                                            variant="h4"
                                            sx={{ fontSize: "2rem", fontWeight: "bold" }}
                                        >
                                            0€/MOIS
                                        </Typography> */}
                                    </CardContent>
                                    <CardActions>
                                        <Button fullWidth size="small" variant="outlined" sx={{ backgroundColor: 'primary.main', color: 'white' }}
                                        >
                                            0€/MOIS
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} >
                                <Card
                                    variant="elevation"
                                    sx={{
                                        borderRadius: 3,
                                        boxShadow: 3,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        bgcolor: "primary.main"
                                    }}
                                >
                                    <CardContent>
                                        <Typography variant="h3" color={'secondary.main'} sx={{ fontSize: "1.5rem" }}>
                                            PREMIUM
                                        </Typography>
                                        <Divider sx={{ width: 1, backgroundColor: 'white' }} />
                                        <Box>
                                            <Box
                                                key={1}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                my={1}
                                            >
                                                <Check sx={{ color: 'secondary.main' }} />
                                                <Typography textAlign={'start'} sx={{ paddingLeft: '1rem', color: "white" }}>Chat en groupe jusqu'à 10 personnes</Typography>
                                            </Box>
                                            <Box
                                                key={2}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                my={1}
                                            >
                                                <Check sx={{ color: 'secondary.main' }} />
                                                <Typography textAlign={'start'} sx={{ paddingLeft: '1rem', color: "white" }}>Accès Prioritaire aux Nouveautés</Typography>
                                            </Box>
                                            <Box
                                                key={3}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                my={1}
                                            >
                                                <Check sx={{ color: 'secondary.main' }} />
                                                <Typography textAlign={'start'} sx={{ paddingLeft: '1rem', color: "white" }}>Analytics Personnalisés</Typography>
                                            </Box>
                                            <Box
                                                key={2}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                my={1}
                                            >
                                                <Check sx={{ color: 'secondary.main' }} />
                                                <Typography textAlign={'start'} sx={{ paddingLeft: '1rem', color: "white" }}>Epingler des Posts en Ilimités</Typography>
                                            </Box>
                                            <Box
                                                key={2}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                my={1}
                                            >
                                                <Check sx={{ color: 'secondary.main' }} />
                                                <Typography textAlign={'start'} sx={{ paddingLeft: '1rem', color: "white" }}>Badges et Récompenses</Typography>
                                            </Box>
                                            <Box
                                                key={2}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                my={1}
                                            >
                                                <Check sx={{ color: 'secondary.main' }} />
                                                <Typography textAlign={'start'} sx={{ paddingLeft: '1rem', color: "white" }}>Support Prioritaire</Typography>
                                            </Box>
                                            <Box
                                                key={2}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                my={1}
                                            >
                                                <Check sx={{ color: 'secondary.main' }} />
                                                <Typography textAlign={'start'} sx={{ paddingLeft: '1rem', color: "white" }}>Options de Personnalisation Avancés</Typography>
                                            </Box>
                                            <Box
                                                key={2}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                my={1}
                                            >
                                                <Check sx={{ color: 'secondary.main' }} />
                                                <Typography textAlign={'start'} sx={{ paddingLeft: '1rem', color: "white" }}>Visibilité Prioritaire</Typography>
                                            </Box>

                                        </Box>
                                        {/* <Typography
                                            variant="h4"
                                            sx={{ fontSize: "2rem", color: 'secondary.main', fontWeight: "bold" }}
                                        >
                                            10€/MOIS
                                        </Typography> */}
                                    </CardContent>
                                    <CardActions>
                                        <Button fullWidth size="small" variant="outlined" sx={{ backgroundColor: "white", ":hover": { backgroundColor: "secondary.main", color: 'white' } }}
                                        >
                                            <Typography fontSize={'10px'}>10€/MOIS</Typography>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    )}
                    {isMobile && (
                        <Swiper pagination={true} modules={[Pagination]} className="mySwiper" style={{ paddingBottom: '3rem' }}>
                            <SwiperSlide>
                                <Card
                                    variant="elevation"
                                    sx={{
                                        borderRadius: 3,
                                        boxShadow: 3,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        bgcolor: "primary.main"
                                    }}
                                >
                                    <CardContent>
                                        <Typography variant="h3" color={'secondary.main'} sx={{ fontSize: "1.5rem" }}>
                                            PREMIUM
                                        </Typography>
                                        <Divider sx={{ width: 1, backgroundColor: 'white' }} />
                                        <Box>
                                            <Box
                                                key={1}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                my={1}
                                            >
                                                <Check sx={{ color: 'secondary.main' }} />
                                                <Typography textAlign={'start'} sx={{ paddingLeft: '1rem', color: "white" }}>Chat en groupe jusqu'à 10 personnes</Typography>
                                            </Box>
                                            <Box
                                                key={2}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                my={1}
                                            >
                                                <Check sx={{ color: 'secondary.main' }} />
                                                <Typography textAlign={'start'} sx={{ paddingLeft: '1rem', color: "white" }}>Accès Prioritaire aux Nouveautés</Typography>
                                            </Box>
                                            <Box
                                                key={3}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                my={1}
                                            >
                                                <Check sx={{ color: 'secondary.main' }} />
                                                <Typography textAlign={'start'} sx={{ paddingLeft: '1rem', color: "white" }}>Analytics Personnalisés</Typography>
                                            </Box>
                                            <Box
                                                key={2}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                my={1}
                                            >
                                                <Check sx={{ color: 'secondary.main' }} />
                                                <Typography textAlign={'start'} sx={{ paddingLeft: '1rem', color: "white" }}>Epingler des Posts en Ilimités</Typography>
                                            </Box>
                                            <Box
                                                key={2}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                my={1}
                                            >
                                                <Check sx={{ color: 'secondary.main' }} />
                                                <Typography textAlign={'start'} sx={{ paddingLeft: '1rem', color: "white" }}>Badges et Récompenses</Typography>
                                            </Box>
                                            <Box
                                                key={2}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                my={1}
                                            >
                                                <Check sx={{ color: 'secondary.main' }} />
                                                <Typography textAlign={'start'} sx={{ paddingLeft: '1rem', color: "white" }}>Support Prioritaire</Typography>
                                            </Box>
                                            <Box
                                                key={2}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                my={1}
                                            >
                                                <Check sx={{ color: 'secondary.main' }} />
                                                <Typography textAlign={'start'} sx={{ paddingLeft: '1rem', color: "white" }}>Options de Personnalisation Avancés</Typography>
                                            </Box>
                                            <Box
                                                key={2}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                my={1}
                                            >
                                                <Check sx={{ color: 'secondary.main' }} />
                                                <Typography textAlign={'start'} sx={{ paddingLeft: '1rem', color: "white" }}>Visibilité Prioritaire</Typography>
                                            </Box>

                                        </Box>
                                        {/* <Typography
                                            variant="h4"
                                            sx={{ fontSize: "2rem", color: 'secondary.main', fontWeight: "bold" }}
                                        >
                                            10€/MOIS
                                        </Typography> */}
                                    </CardContent>
                                    <CardActions>
                                        <Button fullWidth size="small" variant="outlined" sx={{ backgroundColor: "white", ":hover": { backgroundColor: "secondary.main", color: 'white' } }}
                                        >
                                            <Typography fontSize={'10px'}> 10€/MOIS</Typography>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    variant="outlined"
                                    sx={{
                                        bgcolor: "white",
                                        borderRadius: 3,
                                        boxShadow: 3,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <CardContent>
                                        <Typography color={'primary.main'} variant="h2" component="div" align="center" gutterBottom>
                                            GRATUIT
                                        </Typography>
                                        <Divider sx={{ width: 1 }} />
                                        <Box>


                                            <Box
                                                key={1}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                my={1}
                                            >
                                                <Check color="success" />
                                                <Typography sx={{ paddingLeft: '1rem' }}>Chat en duo en groupe de 3</Typography>
                                            </Box>
                                            <Box
                                                key={1}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                mb={1}
                                            >
                                                <Check color="success" />
                                                <Typography textAlign={'start'} sx={{ paddingLeft: '1rem' }}>Accès aux Posts Inspiration et Communauté</Typography>
                                            </Box>
                                            <Box
                                                key={1}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                mb={1}
                                            >
                                                <Check color="success" />
                                                <Typography sx={{ paddingLeft: '1rem' }}>Création de Posts</Typography>
                                            </Box>
                                            <Box
                                                key={1}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                mb={1}
                                            >
                                                <Check color="success" />
                                                <Typography sx={{ paddingLeft: '1rem' }}>Epingler jusqu'a 50 posts</Typography>
                                            </Box>
                                            <Box
                                                key={1}
                                                display="flex"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                mb={1}
                                            >
                                                <Check color="success" />
                                                <Typography sx={{ paddingLeft: '1rem' }}>Visibilité Standard</Typography>
                                            </Box>

                                        </Box>
                                        {/* <Typography
                                            color={'primary.main'}
                                            variant="h4"
                                            sx={{ fontSize: "2rem", fontWeight: "bold" }}
                                        >
                                            0€/MOIS
                                        </Typography> */}
                                    </CardContent>
                                    <CardActions>
                                        <Button fullWidth size="small" variant="outlined" sx={{ backgroundColor: 'primary.main', color: 'white' }}
                                        >
                                            0€/MOIS
                                        </Button>
                                    </CardActions>
                                </Card>
                            </SwiperSlide>
                        </Swiper>
                    )}
                </Box>
            </Container>
        </Box>
    );
}

export default Pricing;
