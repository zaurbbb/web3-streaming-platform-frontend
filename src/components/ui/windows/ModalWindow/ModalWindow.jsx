import React from 'react';
import {
    Box,
    Modal
} from "@mui/material";

import css from './ModalWindow.module.sass';

const ModalWindow = (props) => {
    return (
        <Modal
            {...props}
            // aria-labelledby="modal-modal-title"
            // aria-describedby="modal-modal-description"
        >
            <Box className={css.ModalContainer}>
            {props.children}
            </Box>
        </Modal>
    );
};

export default ModalWindow;