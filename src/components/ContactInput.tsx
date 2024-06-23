import { Stack, InputBase, Button, Box, Snackbar } from "@mui/material";
import React, { FC, useState } from "react";
import * as yup from 'yup';
import { useFormik } from 'formik';
import { mutate } from 'swr';
import axiosInstance from "@/api/axiosInstance";

// Define Yup schema for validation
const validationSchema = yup.object({
    email: yup.string().email('Invalid email address').required('Email is required'),
});

const ContactInput: FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    // SWR fetcher function
    // const fetcher:any = async (url: string) => {
    //     const response = await axiosInstance.get(url);
    //     return response.data;
    // };

    // Example endpoint URL
    const apiUrl = '/api/update-email'; // Replace with your actual API endpoint

    // SWR hook to fetch initial data
    // const { data, error } = useSWR(apiUrl, fetcher);

    // Formik hook for form handling and validation
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                // Make API call to update email
                await axiosInstance.put(apiUrl, { email: values.email });

                // Trigger SWR revalidation and update local cache
                mutate(apiUrl);

                // Reset form after successful submission
                formik.resetForm();

                // Show success message
                setMessage('Email updated successfully!');
                setOpenSnackbar(true);
            } catch (error) {
                console.error('Error updating email:', error);
                // Show error message if needed
            }
        },
    });


    const handleInputChange: any = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        formik.handleChange(event); // Update Formik state
    };

    const handleSubmit: any = () => {
        console.log(email);
    };

    const handleCloseSnackbar: any = () => {
        setOpenSnackbar(false);
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>

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
                            id="email"
                            name="email"
                            type="text"
                            placeholder="Adresse mail"
                            value={formik.values.email}
                            onChange={handleInputChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                        />
                        <Button
                            type="submit"
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
                    <Snackbar
                        open={openSnackbar}
                        autoHideDuration={6000}
                        onClose={handleCloseSnackbar}
                        message={message}
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    />
                </Box>
            </form>
        </Box>
    );
};

export default ContactInput;
