import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    //initialView
    titleDiscogs: {
        flexGrow: 1,
        backgroundColor: 'rgba(0,0,0,0.70)',
        padding: '30px 40px'
    },
    icon: {
        fontSize: '100px !important'
    },
    //cardColletion
    cardCollection: {
        minWidth: 275,
        width: '100%',
        height: 'fit-content',
        border: 'solid 2px #B5FD0D',
        background: 'none !important',
        boxShadow: '0px 0px 4px 2px #B5FD0D',
        margin: '0 25px 30px 0'
    },
    bulletCard: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(1.3)',
        color: '#ffd400'
    },
    textInfo: {
        fontSize: 14,
        margin: 0,
        color: '#ffffff',
    },
    cardContainer: {
        padding: '0',
    },
    colTitleCollection: {
        width: '75px',
    },
    titleInfoCollection: {
        fontSize: '14px',
        fontWeight: 500,
        color: '#ffd400',
        margin: 0,
    },
    //searchOption
    inputSearch: {
        width: '300px',
        margin: '0 30px 15px 0 !important'
    },
    btnSearch: {
        height: '53px',
        marginBottom: '30px !important'
    },
    //detail
    dialog: {
        width: '80%',
        minWidth: '290px',
    },
    header: {
        color: '#615c5c !important'
    },
    bulletDetail: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(1.3)',
    },
    title: {
        width: '160px',
        fontSize: '16px',
        fontWeight: 600,
        margin: '0 0 0 5px',
    },
    row: {
        height: '70px',
        width: '100%',
        background: '#8080801f',
        marginTop: '10px'
    },
    colInfo: {
        padding: '5px 10px',
        width: '100%'
    },
    addBtn: {
        padding: '10px',
    },
    info: {
        width: '100%',
    },
    titleInfoDetail: {
        width: 'fit-content',
        fontSize: '17px',
        fontWeight: 'bolder',
        margin: '5px 0 5px 20px',
    },
    //dashboard
    pagination: {
        height: '150px',
    },
    searchContainer: {
        marginBottom: '30px'
    },
    //cardResult
    cardResult: {
        maxWidth: 400,
        width: '300px',
        height: '287px',
    },
    media: {
        height: 140,
    },
    content: {
        height: '60px'
    },
    cardFooter: {
        float: 'right'
    },
    //btnMenu
    btnCollection: {
        margin: '30px !important',
        position: 'relative  !important',
        right: '3%  !important',
        fontSize: '18px  !important',
        textTransform: 'lowercase  !important'
    },
    btnLink: {
        textDecoration: 'none',
        color: 'inherit'
    }
});

export default useStyles;