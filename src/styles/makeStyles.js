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
    marginTop: "5em",
    color: "#ffffff",
    marginRight: "2em",
    textAlign: "center",
  },
  buttonModifyStyle: {
    backgroundColor: "#A361ED",
    width: 200,
    "&:hover": {
      backgroundColor: "#A361ED"
    },
  },
  buttonDeleteStyle: {
    backgroundColor: "#DC2E41",
    width: 200,
    "&:hover": {
      backgroundColor: "#DC2E41"
    },
  },
  buttonSubmitStyle: {
    width: "100% !important",
    marginRight: "0px !important",
    backgroundColor: "#A361ED",
    "&:hover": {
      backgroundColor: "#A361ED"
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
  modalStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "#ffffff",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  },
}));

export default useStyles;