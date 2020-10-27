import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
    palette: {
        primary: {
            light: '#C1FD35',
            main: '#B5FD0D',
            dark: '#9CDE02',
            contrastText: '#2B2F30',
        },
        secondary: {
            light: '#F04B42',
            main: '#EF3E36',
            dark: '#ED271D',
            contrastText: '#F7F9FB',
        },
    },

    typography: {
        fontFamily: ['Montserrat', 'sans-serif'].join(', '),
        h1: {
            fontWeight: 500,
            fontSize: '50px',
            letterSpacing: '2px',
        },
        h3: {
            fontSize: '50px',
            letterSpacing: 2,
        }
    },

    shape: {
        borderRadius: 10
    },

});

export default Theme;