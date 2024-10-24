import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Card, Container, Grid } from '@mui/material'

const HomeComprendre: FC = () => {

    return (
        <Box
            id="mentors"
            px={{ xs: 2, md: 6 }}
            sx={{
                backgroundColor: 'background.paper',
            }}
        >
            <Container maxWidth='xl'>
                <Box
                    sx={{
                        backgroundColor: 'background.paper',
                        borderRadius: 10,
                        py: { xs: 2, md: 4 },
                        textAlign: 'center'
                    }}
                >
                    <Grid container justifyContent={'center'} rowSpacing={3} alignItems={'center'} maxWidth="xl" >
                        <Grid item xs={12}>
                            <Typography textAlign={"center"} color={"primary.main"} variant="h1" sx={{ fontSize: 40 }}>
                                Comprendre Beehive
                            </Typography>
                        </Grid>
                        <Grid container item xs={12} >

                            <Card sx={{ borderRadius: 8, width: '100%' }} >
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    poster="/images/maquette.png"
                                    height={"100%"}
                                    width={"100%"}
                                >
                                    <source
                                        src="/videos/comprendre.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </Card>

                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default HomeComprendre
