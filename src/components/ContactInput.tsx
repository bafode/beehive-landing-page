import { Stack, InputBase, Button, Box } from "@mui/material";
import React, { FC, useState } from "react";

const ContactInput: FC = () => {
    const [email, setEmail] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = () => {
        console.log(email);
    };

    return (
        <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={0} // No space between elements
            alignItems="center"
            sx={{ width: '100%' }}
        >
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                <InputBase
                    sx={{
                        backgroundColor: 'background.paper',
                        border: '1px solid', // Added border
                        borderColor: 'primary.main', // Border color
                        borderRadius: { xs: '4px', md: '4px 0 0 4px' }, // Rounded corners for the left side
                        width: '100%',
                        height: 48,
                        pl: 1, // Padding left
                        mb: { xs: 2, md: 0 },
                    }}
                    placeholder="Adresse mail"
                    value={email}
                    onChange={handleInputChange}
                />
            </Box>
            <Box>
                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        borderRadius: { xs: '4px', md: '0 4px 4px 0' }, // Rounded corners for the right side
                        height: 48
                    }}
                    onClick={handleSubmit} // Changed to onClick to handle button click
                >
                    Subscribe
                </Button>
            </Box>
        </Stack>
    );
};

export default ContactInput;
