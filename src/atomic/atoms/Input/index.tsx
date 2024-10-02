import { TextField } from "@mui/material";
import { styles } from "./styles";
import { Props } from "./types";

const Input = ({ value, onChange, label, Id = "InputAtom", props = {} }: Props) => {
    return (
        <TextField
            fullWidth
            sx={styles}
            type="text"
            color="warning"
            id={`input${Id}`}
            label={label}
            variant="outlined"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            margin="normal"
            {...props}
        />
    );
};

export default Input;
