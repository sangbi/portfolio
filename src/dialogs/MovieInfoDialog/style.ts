import { alpha, SxProps, Theme } from "@mui/material";

export const rootSx: SxProps<Theme> = {
	"& .content-desktop-root": {
		position: "relative",
		width: "100%",
		minHeight: "500px",
		borderRadius: 2,
		overflow: "hidden",
	},

	"& .content-overray": {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		p: 3,
		background: (theme) => alpha(theme.palette.background.paper, 0.85),
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		backdropFilter: "blur(6px)",

		"& .content-overview": {
			lineHeight: 1.6,
			overflowY: "auto",
			pr: 1,
			"&::-webkit-scrollbar": {
				width: "8px",
			},
			"&::-webkit-scrollbar-thumb": {
				backgroundColor: "#888",
				borderRadius: "4px",
			},
		},
	},
};
