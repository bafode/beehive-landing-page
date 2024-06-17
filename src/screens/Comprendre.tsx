import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Card, Container, Grid } from '@mui/material'

const HomeComprendre: FC = () => {

    return (
        <Box
            id="mentors"
            sx={{
                backgroundColor: 'background.paper', pt: {
                    xs: 2,
                    md: 2,
                },
                pb: {
                    xs: 8,
                    md: 12,
                }
            }}
        >
            <Container>
                <Grid container justifyContent={'center'} rowSpacing={3} alignItems={'center'} maxWidth="lg" >
                    <Grid item xs={12}>
                        <Typography textAlign={"center"} color={"primary.main"} variant="h1" sx={{ fontSize: 40 }}>
                            Comprendre Beehive
                        </Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <Box display={'flex'} justifyContent={'center'} sx={{ lineHeight: 0 }}  >
                            <Card >
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
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default HomeComprendre
