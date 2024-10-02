import { SxProps } from "@mui/material";

export const styleStack: SxProps = {
	alignItems: "center",
	justifyContent: "space-between",
	flexWrap: "wrap",
	paddingRight: 8,
	"@media (max-width: 600px)": {
		paddingRight: 0,
		justifyContent: "center",
		gap: 2,
	},
};
export const styleTypography: SxProps = {
	color: "#111010",
	fontWeight: "400",
	fontSize: "clamp(1.5rem,2rem,2rem)",
	fontFamily: "Inter regular",
};

export const buttonFotter: SxProps = {
	border: "2px solid #EC6724",
	color: "#EC6724",
	fontWeight: "700",
}

export const titleBody: SxProps = {
	whiteSpace: "nowrap",
	width: "100%",
	overflow: "hidden",
	textOverflow: "ellipsis",
	fontSize: "clamp(1rem, -0.875rem + 8.333vw, 1.5rem)",
}
export const textBody: SxProps = { color: "text.secondary", fontSize: 17 }

export const cardActions: SxProps = {
	justifyContent: "space-between",
	svg: {
		cursor: "pointer",
	},
}

export const card: SxProps = { minWidth: 250, boxShadow: "0 2px 4px rgb(0 0 0 / 0.2)", flex: 1 }

export const selectHeader: SxProps = {
	".MuiSelect-select": {
		padding: "4px 12px",
	},
}