import { Box, Button, Card, Container, Divider, Grid, List, ListItem, Stack, Typography, } from "@mui/material";
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
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Card
                                variant="outlined"
                                sx={{
                                    p: 3,
                                    bgcolor: "white"
                                }}
                            >
                                <Stack direction="column" spacing={2}>
                                    <Stack
                                        direction="column"
                                        alignItems="center"
                                        className="break-words"
                                        spacing={1}
                                    >
                                        <Typography variant="h3" color={'primary.main'} sx={{ fontSize: "1.5rem" }}>
                                            STARTER PLAN
                                        </Typography>
                                    </Stack>
                                    <Divider sx={{ width: 1 }} />
                                    <List>

                                        <ListItem
                                            key={1}
                                            sx={{
                                                px: 0,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >

                                            <Typography variant="body2">live chat</Typography>
                                        </ListItem>
                                        <ListItem
                                            key={2}
                                            sx={{
                                                px: 0,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography variant="body2">5gb hosting</Typography>
                                        </ListItem>
                                        <ListItem
                                            key={2}
                                            sx={{
                                                px: 0,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography variant="body2">2 website 3 sub</Typography>
                                        </ListItem>
                                        <ListItem
                                            key={2}
                                            sx={{
                                                px: 0,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography variant="body2">email live chat</Typography>
                                        </ListItem>
                                    </List>
                                    <Typography
                                        variant="h4"
                                        color={'primary.main'}
                                        sx={{ fontSize: "2rem", fontWeight: "bold" }}
                                    >
                                        4.99€/MOIS
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            border: "none",
                                            textTransform: "capitalize",
                                            background: 'primary.main'
                                        }}
                                    >
                                        <Typography color={'white'}>Télécharger Beehive</Typography>
                                    </Button>
                                </Stack>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Card
                                variant="elevation"
                                sx={{
                                    p: 3,
                                    bgcolor: "primary.main"
                                }}
                            >
                                <Stack direction="column" spacing={2}>
                                    <Stack
                                        direction="column"
                                        alignItems="center"
                                        className="break-words"
                                        spacing={1}
                                    >
                                        <Typography variant="h3" color={'white'} sx={{ fontSize: "1.5rem" }}>
                                            STARTER PLAN
                                        </Typography>
                                    </Stack>
                                    <Divider sx={{ width: 1, backgroundColor: 'white' }} />
                                    <List sx={{ color: 'white' }}>

                                        <ListItem
                                            key={1}
                                            sx={{
                                                px: 0,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >

                                            <Typography variant="body2">live chat</Typography>
                                        </ListItem>
                                        <ListItem
                                            key={2}
                                            sx={{
                                                px: 0,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography variant="body2">5gb hosting</Typography>
                                        </ListItem>
                                        <ListItem
                                            key={2}
                                            sx={{
                                                px: 0,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography variant="body2">2 website 3 sub</Typography>
                                        </ListItem>
                                        <ListItem
                                            key={2}
                                            sx={{
                                                px: 0,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography variant="body2">email live chat</Typography>
                                        </ListItem>
                                    </List>
                                    <Typography
                                        variant="h4"
                                        color={'white'}
                                        sx={{ fontSize: "2rem", fontWeight: "bold" }}
                                    >
                                        4.99€/MOIS
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderColor: "white"
                                        }}
                                    >
                                        <Typography color={'white'}>Télécharger Beehive</Typography>
                                    </Button>
                                </Stack>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Card
                                variant="outlined"
                                sx={{
                                    p: 3,
                                    bgcolor: "white"
                                }}
                            >
                                <Stack direction="column" spacing={2}>
                                    <Stack
                                        direction="column"
                                        alignItems="center"
                                        className="break-words"
                                        spacing={1}
                                    >
                                        <Typography variant="h3" color={'primary.main'} sx={{ fontSize: "1.5rem" }}>
                                            STARTER PLAN
                                        </Typography>
                                    </Stack>
                                    <Divider sx={{ width: 1 }} />
                                    <List>

                                        <ListItem
                                            key={1}
                                            sx={{
                                                px: 0,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >

                                            <Typography variant="body2">live chat</Typography>
                                        </ListItem>
                                        <ListItem
                                            key={2}
                                            sx={{
                                                px: 0,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography variant="body2">5gb hosting</Typography>
                                        </ListItem>
                                        <ListItem
                                            key={2}
                                            sx={{
                                                px: 0,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography variant="body2">2 website 3 sub</Typography>
                                        </ListItem>
                                        <ListItem
                                            key={2}
                                            sx={{
                                                px: 0,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography variant="body2">email live chat</Typography>
                                        </ListItem>
                                    </List>
                                    <Typography
                                        variant="h4"
                                        color={'primary.main'}
                                        sx={{ fontSize: "2rem", fontWeight: "bold" }}
                                    >
                                        4.99€/MOIS
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            border: "none",
                                            textTransform: "capitalize",
                                            background: 'primary.main'
                                        }}
                                    >
                                        <Typography color={'white'}>Télécharger Beehive</Typography>
                                    </Button>
                                </Stack>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default Pricing;
