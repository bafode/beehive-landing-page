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
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 2, md: 0 }} // Space between elements on small screens
                alignItems="center"
                justifyContent={'center'}
                sx={{ width: '100%', maxWidth: 800 }} // Limiting the max width for better centering
            >
                <InputBase
                    sx={{
                        backgroundColor: 'background.paper',
                        border: '1px solid', // Added border
                        borderColor: 'primary.main', // Border color
                        borderRadius: { xs: '4px', md: '4px 0 0 4px' }, // Rounded corners for the left side
                        width: '100%',
                        height: 48,
                        pl: 1, // Padding left
                        mb: { xs: 1, md: 0 },
                    }}
                    placeholder="Adresse mail"
                    value={email}
                    onChange={handleInputChange}
                />
                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        borderRadius: { xs: '4px', md: '0 4px 4px 0' }, // Rounded corners for the right side
                        height: 48,
                        width: { xs: '100%', md: 'auto' } // Full width on small screens, auto on larger screens
                    }}
                    onClick={handleSubmit} // Changed to onClick to handle button click
                >
                    Inscription
                </Button>
            </Stack>
        </Box>
    );
};

export default ContactInput;
