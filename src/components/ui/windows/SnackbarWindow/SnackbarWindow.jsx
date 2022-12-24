import React from 'react';
import {
    Alert,
    Snackbar
} from "@mui/material";
// import { FormattedMessage } from "react-intl";

const SnackbarWindow = ({ openSnackbar, handleCloseSnackbar }) => {

    return (
        <Snackbar
            open={openSnackbar}
            onClose={handleCloseSnackbar}
            autoHideDuration={4000}
        >
            <Alert
                onClose={handleCloseSnackbar}
                severity="success"
            >
                one_name_copy_to_clipboard
                {/*<FormattedMessage id='w.one_name_copy_to_clipboard' />*/}
            </Alert>
        </Snackbar>
    );
};

export default SnackbarWindow;