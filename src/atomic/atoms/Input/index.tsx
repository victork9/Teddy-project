import { TextField, Typography } from "@mui/material";
import { styles } from "./styles";
import { Props } from "./types";

const Input = ({ value, onChange, label, Id = "InputAtom", error, errormessage = "", props = {} }: Props) => {
    return (
        <>
            <TextField
                fullWidth
                error={error}
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
            {error && errormessage && (
                <Typography color="error" width={"100%"}>
                    {errormessage}
                </Typography>
            )}
        </>
    );
};

export default Input;
