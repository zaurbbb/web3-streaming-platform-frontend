import {createTheme} from '@mui/material';
import GilroyRegular from '../assets/fonts/Gilroy-Regular.ttf';

const bgColor = '#7e8383';
const dark = '#2c2c2c';
const bk = createTheme({
    breakpoints: {
        values: {
            xs: 380,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
        },
    },
});
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
            light: '#89ECFF',
            main: '#d2edf3'
        },
        secondary: {
            main: '#ffffff'
        }
    },
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {variant: 'h6'},
                    style: {
                        textAlign: 'center',
                        fontFamily: 'GilroyRegular, sans-serif',

                    },
                },
                {
                    props: {variant: 'subtitle1'},
                    style: {
                        lineHeight: '1rem',
                        fontWeight: '100',
                    },
                },
            ],
        },
        MuiCssBaseline: {
            styleOverrides:
                `@font-face {
                        font-family: 'GilroyRegular';
                        font-style: normal;
                        font-display: swap;
                        font-weight: 400;
                        src: local('GilroyRegular'), local('GilroyRegular'), url(${GilroyRegular}) format('woff2');
                        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                    },
                    `,
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '1rem',
                    borderRadius: '1rem',
                    width: '2.8rem',
                    height: '1.2rem',
                    padding: '0',
                    backgroundColor: `${bgColor}`,
                    fontSize: '0.8rem',
                    letterSpacing: '2px',
                    color: 'white',
                    [bk.breakpoints.down('xs')]: {
                        height: '1.6rem',
                        width: '3rem',
                    },
                    [bk.breakpoints.down('sm')]: {
                        height: '1.8rem',
                        width: '3.2rem',
                    },

                    'div': {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '0.3rem',
                        marginLeft: '-0.2rem',
                        [bk.breakpoints.down('xs')]: {
                            marginLeft: '-0.3rem',
                        },
                        [bk.breakpoints.down('sm')]: {
                            marginLeft: '-0.2.5rem',
                        },
                    },
                    '&:active': {
                        border: 'none',
                        outline: 'none',
                    },
                    'img': {
                        width: '20px',
                        height: '20px',
                    },
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    gap: '0.5rem',
                    height: '1.2rem',
                    marginLeft: '-5px',
                    backgroundColor: `${bgColor}`,
                    fontSize: '0.8rem',
                    letterSpacing: '2px',
                    color: 'white',
                    transition: 'all .2s ease',
                    [bk.breakpoints.down('xs')]: {
                        height: '1rem',
                        marginLeft: '-0.3rem',
                    },
                    [bk.breakpoints.down('sm')]: {
                        height: '1rem',
                        marginLeft: '-0.2.5rem',
                    },
                    [bk.breakpoints.down('sm')]: {
                        height: '1rem',
                    },
                    '&:hover': {
                        border: 'none',
                        color: 'black',
                    },
                    '&:focus': {
                        color: 'black',
                    },
                    'div': {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '0.3rem',
                        marginLeft: '-0.2rem',
                        transition: 'all .2s ease',
                        [bk.breakpoints.down('xs')]: {
                            height: '0.2rem',
                            width: '3rem',
                            marginRight: '-2rem',
                        },
                        [bk.breakpoints.down('sm')]: {
                            height: '1.8rem',
                            width: '1rem',
                            marginLeft: '-0.2.5rem',
                        },
                        'img': {
                            [bk.breakpoints.down('md')]: {
                                width: '18px',
                            },
                        }
                    },
                    'img': {
                        width: '20px',
                        height: '20px',
                    },
                },
            },
        },
        MuiList: {
            styleOverrides: {
                root: {
                    padding: 0,
                    marginRight: '-2rem',
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    '.MuiSvgIcon-root': {
                        display: 'none',
                    },
                    '&:hover': {
                        border: 'none',
                        outline: 'none'
                    },
                    '&:active': {
                        border: 'none',
                        outline: 'none'
                    }
                },
                input: {
                    '&:hover': {
                        border: 'none',
                        outline: 'none'
                    },
                    '&:active': {
                        border: 'none',
                        outline: 'none'
                    }
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: '15px',
                    marginLeft: '-7px',
                    [bk.breakpoints.down('sm')]: {
                        borderRadius: '15px',
                    },
                    'div': {
                        flexWrap: 'wrap',
                        // alignItems: 'center',
                    },
                },
            },
        },
        MuiModal: {
            styleOverrides: {
                root: {
                    'h3': {
                        textAlign: 'center',
                    }
                },
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    border: `1px solid ${dark}`,
                    color: `${dark}`,
                    boxShadow: 'none',
                    '&:hover': {
                        backgroundColor: `${dark}`,
                        boxShadow: 'none',
                        color: 'white',
                    },
                    '&:active': {
                        boxShadow: 'none',
                    },
                },
            }
        },
    },
    typography: {
        'fontFamily': `GilroyRegular, sans-serif`,
        'fontWeightRegular': 300,
    },

});
