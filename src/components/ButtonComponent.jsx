import React, { memo } from "react";
import { Button } from "@material-ui/core";

import useStyles from "../styles/makeStyles";

const ButtonComponent = ({title, onClick, style}) => {

  const styles = useStyles();

  return(
    <Button 
      variant="contained"
      onClick={onClick}
      classes={{root: [styles.buttonComponentStyle, style].join(" ")}}
    >
      {title}
    </Button>
  );
};

export default memo(ButtonComponent);