import { Grid, InputBase } from "@mui/material";
import React, { FC } from "react";
import { StyledButton } from "./styled-button";

const ContactInput: FC = () => {
    return (
        <Grid container spacing={0} item md={12}>
            <Grid item xs={12} md={11}>
                <InputBase
                    sx={{
                        backgroundColor: 'background.paper',
                        borderRadius: 3,
                        width: { xs: '100%', md: '70%' },
                        height: 48,
                        ps: 0,
                        mb: { xs: 2, md: 0 },
                    }}
                    placeholder="Enter your Email Address"
                />
            </Grid>
            <Grid item xs={12} md={1}>
                <StyledButton disableHoverEffect size="large" >
                    Subscribe
                </StyledButton>
            </Grid>
        </Grid>
    )
};

export default ContactInput;