"use client";

import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		mode: "dark", // 어두운 모드
		primary: { main: "#000000" }, // 검정
		secondary: { main: "#ff6f61" }, // 포인트로 살짝 밝은 레드-코랄 계열
		background: {
			default: "#121212", // 다크 배경
			paper: "#1e1e1e", // 카드나 컨테이너 배경
		},
		text: {
			primary: "#ffffff", // 주 텍스트 흰색
			secondary: "#bbbbbb", // 보조 텍스트 회색
		},
	},
	typography: {
		fontFamily: ["'Pretendard'", "Roboto", "sans-serif"].join(","),
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
});

export default theme;
