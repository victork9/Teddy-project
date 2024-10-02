import { BoxProps, SxProps } from "@mui/material";

export const style: BoxProps["sx"] = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
    borderRadius: "4px",
    "@media (max-width: 768px)": {
        width: "80%",
    },
};

export const stylesIcon: SxProps = {
    cursor: "pointer",
}