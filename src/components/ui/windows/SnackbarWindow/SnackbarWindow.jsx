import React from 'react';
import {
    Alert,
    Snackbar
} from "@mui/material";

const SnackbarWindow = ({ openSnackbar, handleCloseSnackbar, text, severity, link }) => {

    return (
        <Snackbar
            open={openSnackbar}
            onClose={handleCloseSnackbar}
        >
            <Alert
                onClose={handleCloseSnackbar}
                severity={severity}
            >
                <a href={link} target='_blank'>
                    {text}
                </a>
            </Alert>
        </Snackbar>
    );
};

export default SnackbarWindow;