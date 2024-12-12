import React, { FC } from 'react';
import { Typography, Card, CardContent, Divider } from '@mui/material';
import { Concept } from '@/interfaces/concept';

interface Props {
    item: Concept;
}

const ConceptCard: FC<Props> = ({ item }) => (
    <Card
        sx={{
            width: '100%',
            backgroundColor: '#F3F2FF',
            boxShadow: 3,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 5,
        }}
    >
        <CardContent>
            <Typography
                textAlign="start"
                gutterBottom
                sx={{
                    fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem' },
                    fontWeight: 'bold',
                }}
            >
                {item.title}
            </Typography>

            <Divider sx={{ height: '3px', backgroundColor: 'primary.main' }} />

            <Typography
                mt={2}
                color="black"
                textAlign="start"
                sx={{
                    fontSize: { xs: '1rem', sm: '1.2rem', md: '1.3rem' },
                }}
            >
                {item.description}
            </Typography>
        </CardContent>
    </Card>
);

export default ConceptCard;
