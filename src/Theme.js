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
            light: '#737D96',
            main: '#606980',
            dark: '#464D5D',
            contrastText: '#EDF7F6',
        },
        text: {
            primary: '#ffffff',
            secondary: '#2B2F30'
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