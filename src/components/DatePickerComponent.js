import { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function DatePickerComponent({
  id,
  value,
  setValue,
  label,
  range,
}) {
  const classes = useStyles();

  const [error, setError] = useState(undefined);

  function validateRange(event) {
    const yearVal =
      new Date().getFullYear() - new Date(event.target.value).getFullYear();
    if (yearVal < range.low || yearVal > range.high) {
      setError("Invalid Date. Not within range");
    } else {
      setValue(event.target.value);
      setError(undefined);
    }
  }
  return (
    <FormControl className={classes.formControl} error={!!error}>
      <TextField
        id={id}
        label={label}
        type="date"
        value={value}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={validateRange}
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
