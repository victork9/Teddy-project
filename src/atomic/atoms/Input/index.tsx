import { TextField } from "@mui/material";
import { styles } from "./styles";
import { Props } from "./types";

const Input = ({ value, onChange, label, props = {} }: Props) => {
    return (
        <TextField
            fullWidth
            sx={styles}
            type="text"
            color="warning"
            id="outlined-basic"
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
