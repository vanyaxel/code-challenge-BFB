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
            light: '#FFDD33',
            main: '#ffd400',
            dark: '#E0BB00',
            contrastText: '#2B2F30',
        },
        text: {
            primary: '#ffffff',
            secondary: '#2B2F30',
            other: '#000000'
        }
    },

    typography: {
        fontFamily: ['Montserrat', 'sans-serif'].join(', '),
        h1: {
            fontWeight: 500,
            fontSize: '50px',
            letterSpacing: '2px',
        },
        h2: {
            fontWeight: 500,
            fontSize: '50px',
            letterSpacing: '2px',
            marginBottom: '30px'
        },
        h3: {
            fontSize: '35px',
            letterSpacing: 2,
        },
        h4: {
            fontSize: '25px',
            letterSpacing: '2px',
            color: '#ffffff'
        },
        body2: {
            textTransform: 'capitalize',
            letterSpacing: 0,
        }
    },
    shape: {
        borderRadius: 10
    },

});

export default Theme;