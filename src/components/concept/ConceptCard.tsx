import React, { FC } from 'react'
import Typography from '@mui/material/Typography'
import { Concept } from '@/interfaces/concept'
import { Card, CardContent, Divider } from '@mui/material'

interface Props {
    item: Concept
}

const style = {
    py: 1,
    width: '100%',
    maxWidth: '100%',
    backgroundColor: "#F3F2FF",
    boxShadow: 3,
    height: '100%',
    display: 'flex',
};

const ConceptCard: FC<Props> = ({ item }) => {
    return (
        <Card sx={{
            ...style,
            borderRadius: 5,
        }}>

            <CardContent>
                <Typography textAlign={"start"} gutterBottom variant="h2" fontSize={"1.6rem"} sx={{ fontWeight: "bold" }}>
                    {item.title}
                </Typography>
                <Divider sx={{ height: "3px" }} />
                <Typography marginTop={"1rem"} color="black" textAlign={'start'} style={{
                    fontSize: '1.2rem',
                }}>
                    {item.description}
                </Typography>
            </CardContent>
        </Card>
    )
}
export default ConceptCard
