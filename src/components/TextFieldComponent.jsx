import React, { memo } from "react";
import { TextField } from "@material-ui/core";
 
const TextFieldComponent = ({value, onChange, label, id, style}) => {
  return(
    <TextField
      value={value}
      onChange={onChange}
      label={label}
      id={id}
      classes={{root: style}}
    />
  );  
};

export default memo(TextFieldComponent);