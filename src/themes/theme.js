import {createTheme} from '@mui/material';
export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 380,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
        },
    },

    palette: {
        primary: {
            main: '#DF1F50',
        },
        secondary: {
            light: '#7B7B83',
            main: '#3D3D40',
            dark: '#1F1F23',
        },
        black: {
            light: '#18181B',
            main: '#121212',
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    boxShadow: 'none',
                    color: 'palette',
                    border: 'palette',
                    ':disabled': {
                        color: '#7B7B83',
                        border: '#7B7B83',
                    }
                },
            },
        },
    },
    typography: {
        'fontFamily': `GilroyRegular, sans-serif`,
        'fontWeightRegular': 300,
    },

});
