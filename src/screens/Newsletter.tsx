import React, { FC } from 'react';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { StyledButton } from '../components/styled-button';
import { Grid } from '@mui/material';
import Image from 'next/image';
import ContactInput from '@/components/ContactInput';

const HomeNewsLetter: FC = () => {
    return (
        <Box id='contact' sx={{ backgroundColor: 'background.paper', py: { xs: 2, md: 4 }, px: { xs: 2, md: 8 } }}>
            <Container maxWidth='xl'>
                <Box
                    sx={{
                        backgroundColor: '#F3F2FF',
                        borderRadius: 10,
                        py: { xs: 2, md: 4 },
                        px: { xs: 4, md: 8 },
                        textAlign: 'center',
                    }}
                >
                    <Grid container>
                        <Grid item md={12} sx={{ alignItems: { md: 'center' }, justifyContent: { md: 'center' } }}>
                            <Typography variant="h1" component="h2" color="primary.main" textAlign={'center'} sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
                                Sois le Premier Informé
                            </Typography>
                        </Grid>
                        <Grid container item md={12} sx={{ alignItems: { md: 'center' }, justifyContent: { md: 'center' } }}>
                            <Grid item xs={12} md={2}>
                                <Image src="/images/logo.png" width={500} height={300} alt="logo" />
                            </Grid>
                            <Grid item xs={12} md={10}>
                                <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                                    <Typography sx={{ mb: 1, fontSize: { xs: 18, md: 26 } }}>
                                        Inscris-toi dès maintenant avec ton adresse mail pour recevoir une notification dès le lancement de BeeHive.
                                    </Typography>
                                    <Typography sx={{ mb: 1, fontSize: { xs: 18, md: 26 } }}>
                                        Ne manque pas l'opportunité de faire partie de notre communauté étudiante dès le premier jour!
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <ContactInput />
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default HomeNewsLetter;
