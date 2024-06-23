import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Concept } from '@/interfaces/concept'
import { ConceptCard } from '../components/concept'
import { Grid } from '@mui/material'
import { conceptData } from '@/data/concepts.data'


const HomeOurConcept: FC = () => {

    return (
        <Box id='concepts' sx={{ backgroundColor: 'background.paper', paddingTop: { xs: 70, md: 4 }, px: { xs: 2, md: 4 } }}>
            <Container maxWidth='xl' >
                <Box
                    sx={{
                        backgroundColor: 'background.paper',
                        borderRadius: 10,
                        px: { xs: 4, md: 8 },
                        textAlign: 'center'
                    }}>
                    <Typography variant="h1" color={'primary.main'} sx={{ fontSize: 40, pb: '2rem' }}>
                        Découvre nos offres
                    </Typography>
                    <Grid container spacing={4}>

                        {conceptData.map((item: Concept) => (
                            <Grid key={item.id} item xs={12} sm={6} md={4} lg={4}>
                                <ConceptCard key={item.id} item={item} />
                            </Grid>
                        ))}

                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default HomeOurConcept
