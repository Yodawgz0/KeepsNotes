import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainLayout: {
    display: "flex",
    justifyContent: "center",
  },
  root: {
    marginTop: theme.spacing(4),
    width: "30rem",
    height: "4rem",
    "&:focus": {
      height: "30rem",
    },
  },
  content: {
    display: "flex",
  },
  grow: {
    flexGrow: 20,
  },
}));

export { useStyles };
