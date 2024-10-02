import { SxProps } from "@mui/material";

export const bodyStyles: SxProps = {
	display: "flex",
	flexDirection: "column",
	gap: "20px",
	padding: " 26px 120px",
	marginTop: "100px",
	"@media (max-width: 768px)": {
		padding: "20px 18px",
	},
};