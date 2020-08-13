import { fade, makeStyles } from '@material-ui/core/styles';
import { ClickAwayListener } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: 16,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      paddingRight: `calc(1em + ${theme.spacing(10)}px)`,
      transition: theme.transitions.create('width'),
      width: '20ch',
      '&:focus': {
        width: '50ch',
      },
      [theme.breakpoints.down('sm')]: {
        width: '10ch',
        '&:focus': {
          width: '15ch',
        },
      },
    },
    sectionDesktop:{
      display: 'none',
      [theme.breakpoints.up('md')]:{
        display:'none'
      }
    }
  }));

  export { useStyles };