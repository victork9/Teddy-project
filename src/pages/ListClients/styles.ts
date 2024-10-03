import { SxProps } from "@mui/material";

export const Header: SxProps = {
  display: "flex",
  zIndex: 100,
  boxShadow: "0 2px 4px rgb(0 0 0 / 0.2)",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "white",
  position: "fixed",
  top: 0,
  right: 0,
  left: 0,

  padding: "26px 120px",
  " @media (max-width: 768px)": {
    justifyContent: "space-between",
    padding: "20px 18px",
  },
};

export const Nav: SxProps = {
  display: "flex",
  gap: "20px",

  "@media (max-width: 768px)": {
    display: "none",
    padding: "20px 18px",
  },
};

export const HamburgerMenu: SxProps = {
  display: "none",
  cursor: "pointer",
  " @media (max-width: 768px)": {
    display: "flex",
    alignItems: "center",
  },
};
