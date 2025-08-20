"use client";

import { Box, Button, Stack, Typography } from "@mui/material";

export default function MainHome() {
	return (
		<Stack spacing={4} alignItems="center" textAlign="center" sx={{ mt: 8 }}>
			<Typography variant="h2" fontWeight="bold">
				안녕하세요! 👋
			</Typography>
			<Typography variant="h5" color="text.secondary">
				저는 프론트엔드 개발자 이상빈입니다.
			</Typography>
			<Button variant="contained" size="large" href="/projects">
				프로젝트 보러가기
			</Button>
		</Stack>
	);
}
