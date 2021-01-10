import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
export default function CheckboxComponent({
  label,
  items,
  itemsSelected,
  toggleItem,
}) {
  const classes = useStyles();

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Choose {label}</FormLabel>
      <FormGroup row>
        {items.map((item) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={itemsSelected.includes(item)}
                name={item}
                onChange={() => toggleItem(item)}
              />
            }
            label={item}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
}
