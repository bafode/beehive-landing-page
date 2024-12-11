import { Stack, InputBase, Button, Box, Snackbar, Alert } from "@mui/material";
import React, { FC, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import useSWR, { mutate } from "swr";
import axiosInstance from "@/api/axiosInstance";

// Définition du schéma de validation Yup
const validationSchema = yup.object({
    email: yup.string().email("Adresse e-mail invalide").required("L'adresse e-mail est requise"),
});

const ContactInput: FC = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState<"success" | "error">("success");

    const apiUrl = "http://185.98.139.242:4000/v1/landing-contacts"; // Remplacez par votre point d'API

    // Gestion du formulaire avec Formik
    const formik = useFormik({
        initialValues: { email: "" },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                // Envoi de la requête POST
                await axiosInstance.put(apiUrl, { email: values.email });

                // Met à jour la donnée locale et invalide le cache
                mutate(apiUrl);

                // Affichage du message de succès
                setMessage("Inscription réussie !");
                setSeverity("success");
                setOpenSnackbar(true);

                // Réinitialise le formulaire
                formik.resetForm();
            } catch (error) {
                console.error("Erreur lors de l'inscription :", error);

                // Affichage du message d'erreur
                setMessage("Une erreur s'est produite. Veuillez réessayer.");
                setSeverity("error");
                setOpenSnackbar(true);
            }
        },
    });

    // Ferme la snackbar
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 2, md: 0 }}
                    alignItems="center"
                    justifyContent="center"
                    sx={{ width: "100%", maxWidth: 800 }}
                >
                    <InputBase
                        sx={{
                            backgroundColor: "background.paper",
                            border: "1px solid",
                            borderColor: "primary.main",
                            borderRadius: { xs: "4px", md: "4px 0 0 4px" },
                            width: "100%",
                            height: 48,
                            pl: 1,
                        }}
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Adresse mail"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{
                            borderRadius: { xs: "4px", md: "0 4px 4px 0" },
                            height: 48,
                            width: { xs: "100%", md: "auto" },
                        }}
                    >
                        Inscription
                    </Button>
                </Stack>
                {formik.touched.email && formik.errors.email && (
                    <Box sx={{ color: "error.main", mt: 1, textAlign: "center" }}>
                        {formik.errors.email}
                    </Box>
                )}
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                >
                    <Alert onClose={handleCloseSnackbar} severity={severity} sx={{ width: "100%" }}>
                        {message}
                    </Alert>
                </Snackbar>
            </form>
        </Box>
    );
};

export default ContactInput;
