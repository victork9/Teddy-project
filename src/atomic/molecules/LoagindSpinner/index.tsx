import { Backdrop, CircularProgress } from "@mui/material";
import { Props } from "./types";

const LoadingSpinner = ({ show }: Props) => {
    if (!show) return null;

    return (
        <Backdrop sx={(theme) => ({ zIndex: theme.zIndex.drawer + 1 })} open>
            <CircularProgress color="warning" />
        </Backdrop>
    );
};

export default LoadingSpinner;
