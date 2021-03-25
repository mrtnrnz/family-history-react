import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  containerRoot: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2em",
  },
  tableStyle: {
    flex: 1,
  },
  buttonComponentStyle: {
    padding: 15,
    width: 200,
    marginTop: "5em",
    color: "#ffffff",
    marginRight: "2em",
  },
  buttonModifyStyle: {
    backgroundColor: "#A361ED",
    "&:hover": {
      backgroundColor: "#A361ED"
    },
  },
  buttonDeleteStyle: {
    backgroundColor: "#DC2E41",
    "&:hover": {
      backgroundColor: "#DC2E41"
    },
  },
  textFieldStyle: {
    width: 200,
    marginTop: "2em",
  },
  selectFormControlStyle: {
    margin: theme.spacing(1),
    width: 200
  },
}));

export default useStyles;