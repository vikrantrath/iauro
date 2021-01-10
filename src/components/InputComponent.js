import { useState } from "react";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
export default function InputComponent({
  value,
  setValue,
  label,
  validations,
  required,
}) {
  const [error, setError] = useState(undefined);
  const classes = useStyles();

  function validateAndSave(event) {
    //validate Here
    const value = event.target.value;
    const validator = getValidator(validations);
    if (!validator || validator.test(value)) {
      setValue(event.target.value);
      setError(undefined);
    } else {
      setError("Invalid Entry");
    }
  }

  function getValidator(validation) {
    switch (validation) {
      case "alpha":
        return new RegExp("[a-z]|^$", "i");
      case "zip":
        return /[0-9]|[-]|^$/;
      default:
        return;
    }
  }

  return (
    <FormControl
      className={classes.formControl}
      error={error}
      required={required}
    >
      <InputLabel htmlFor={value}>{label}</InputLabel>
      <Input id={value} value={value} onChange={validateAndSave} />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
