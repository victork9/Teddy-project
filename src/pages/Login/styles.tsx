import { SxProps } from "@mui/material";

export const Container: SxProps = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
};

export const LoginBox: SxProps = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "400px",
    margin: "0 20px",
};

export const Title: SxProps = {
    fontFamily: "Inter",
    margiBottom: "20px",
    fontSize: "24px",
    color: "#333",
    fontWeight: 400,
};

export const styleTextField: SxProps = {
    "::placeholder": {
        color: "#aaaaaa",
    },
    borderColor: "red",
};
