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
    maxWidth: 360,
    borderRadius: 3,
    border: '1px solid',
    borderColor: 'primary.main',
    minHeight: 'auto',
    backgroundColor: "#F3F2FF",
    boxShadow: 3,
    height: '100%',
    display: 'flex',
};

const ConceptCard: FC<Props> = ({ item }) => {
    return (
        <Card sx={style}>

            <CardContent>
                <Typography textAlign={"center"} gutterBottom variant="h2" fontSize={"1.2rem"} sx={{ fontWeight: "bold" }}>
                    {item.title}
                </Typography>
                <Divider />
                <Typography marginTop={"1rem"} variant="body2" color="black" fontSize={"1.2rem"} textAlign={'start'}>
                    {item.description}
                </Typography>
            </CardContent>
        </Card>
    )
}
export default ConceptCard
