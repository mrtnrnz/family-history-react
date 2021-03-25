import React, { memo } from "react";
import {
   Select,
   InputLabel,
   FormControl
} from "@material-ui/core";

import useStyles from "../styles/makeStyles";

const SelectComponent = ({
  label, 
  id,
  selectValue,
  selectOnChange,
  children
}) => {

  const styles = useStyles();

  return(
    <FormControl className={styles.selectFormControlStyle}>
      <InputLabel id={id}>
        {label}
      </InputLabel>
      <Select
        value={selectValue}
        onChange={selectOnChange}
      >
        {children}
      </Select>
    </FormControl>
  );
};

export default memo(SelectComponent);