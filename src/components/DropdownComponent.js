import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
export default function DropdownComponent({
  value,
  setValue,
  label,
  menuItems,
}) {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="Board">{label}</InputLabel>
      <Select
        labelId={label}
        id={`${label}-select`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {menuItems.map((item) => (
          <MenuItem value={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
