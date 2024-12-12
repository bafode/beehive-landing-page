import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Image from 'next/image';
import ContactInput from '@/components/ContactInput';

const HomeNewsLetter: FC = () => {
    return (
        <Box
            id='contact'
            px={{ xs: 2, md: 6, lg: 8 }}
            sx={{ backgroundColor: 'background.paper', py: { xs: 1, md: 4, lg: 6 } }}
        >
            <Container maxWidth='lg'>
                <Box
                    id='contact'
                    sx={{
                        backgroundColor: '#F3F2FF',
                        borderRadius: 6,
                        py: { xs: 2, md: 4, lg: 6 },
                        textAlign: 'center',
                    }}
                >
                    <Grid container justifyContent="center" spacing={{ xs: 0, sm: 1, md: 2 }}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h1"
                                component="h2"
                                color="primary.main"
                                sx={{
                                    fontSize: { xs: 22, sm: 28, md: 42, lg: 48 },
                                    textAlign: 'center',
                                    mb: 3,
                                }}
                            >
                                Sois le Premier Informé
                            </Typography>
                        </Grid>
                        <Grid container item xs={12} alignItems="center" justifyContent="center">
                            <Grid item xs={12} md={4}>
                                <Box sx={{ textAlign: 'center', maxWidth: { xs: '200px', md: '500px' }, margin: '0 auto' }}>
                                    <Image
                                        src="/images/beehive_logo.svg"
                                        layout="responsive"
                                        width={500}
                                        height={300}
                                        alt="logo"
                                        style={{
                                            maxWidth: '100%',
                                            height: 'auto',
                                        }}
                                        sizes="(max-width: 600px) 200px, 500px"
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={8}>
                                <Box sx={{ textAlign: { xs: 'center', sm: 'left' }, px: { xs: 2, sm: 4, md: 6 } }}>
                                    <Typography sx={{ mb: 2, fontSize: { xs: 14, sm: 16, md: 24, lg: 28 } }}>
                                        Inscris-toi dès maintenant avec ton adresse mail pour recevoir une notification dès le lancement de BeeHive.
                                    </Typography>
                                    <Typography sx={{ mb: 3, fontSize: { xs: 14, sm: 16, md: 24, lg: 28 } }}>
                                        Ne manque pas l'opportunité de faire partie de notre communauté étudiante dès le premier jour !
                                    </Typography>
                                    <ContactInput />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default HomeNewsLetter;
