import { Check, CheckCircle, CheckCircleOutline } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, Container, Divider, Grid, List, ListItem, Stack, Typography, } from "@mui/material";
import React, { FC, } from "react";

const Pricing: FC = () => {

    return (
        <Box id='nos-offres' sx={{ backgroundColor: 'background.paper', py: { xs: 2, md: 4 } }}>
            <Container>
                <Box
                    sx={{
                        backgroundColor: 'background.paper',
                        borderRadius: 10,
                        py: { xs: 2, md: 4 },
                        px: { xs: 4, md: 8 },
                        textAlign: 'center'
                    }}>
                    <Typography variant="h1" color={'primary.main'} sx={{ fontSize: 40, pb: '2rem' }}>
                        Découvre nos offres
                    </Typography>
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
                                    <Typography
                                        color={'primary.main'}
                                        variant="h4"
                                        sx={{ fontSize: "2rem", fontWeight: "bold" }}
                                    >
                                        0€/MOIS
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth size="small" variant="outlined" color="inherit"
                                    >
                                        Télecharger Beehive
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
                                    <Typography
                                        variant="h4"
                                        sx={{ fontSize: "2rem", color: 'secondary.main', fontWeight: "bold" }}
                                    >
                                        4.99€/MOIS
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth size="small" variant="outlined" sx={{ backgroundColor: "white" }}
                                    >
                                        <Typography fontSize={'10px'}>commencer mon essai gratituit pendant 1 mois</Typography>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default Pricing;
