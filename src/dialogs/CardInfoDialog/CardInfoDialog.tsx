import CustomDialog from "@/components/CustomDialog";
import { fetchMovieDetail, Movie } from "@/sub/api/movie";
import {
	Box,
	Divider,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { rootSx } from "./style";

export type CardInfoDialogProps = {
	open: boolean;
	onClose: () => void;
	id?: string;
};
export default function CardInfoDialog(props: CardInfoDialogProps) {
	const { open, onClose, id } = props;
	const [info, setInfo] = useState<Movie>();
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	// 검색 API
	const doInfo = useCallback(async (id: string) => {
		fetchMovieDetail(id)
			.then((data) => {
				setInfo({
					...data,
					poster_path: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
				});
			})
			.catch((err) => console.log(err.message));
	}, []);

	useEffect(() => {
		if (!id) return;
		doInfo(id);
	}, [id, doInfo]);

	if (!info) return null;

	return (
		<CustomDialog
			sx={rootSx}
			open={open}
			size={isDesktop ? "sm" : "xs"} // 모바일에서는 더 작은 다이어로그
			header={{
				title: "정보",
				onClose: onClose,
			}}
			content={
				isDesktop ? (
					// ✅ PC 화면: 배경 + 오버레이 카드
					<Box className="content-desktop-root">
						<Image
							alt={info.title}
							src={info.poster_path}
							fill
							style={{ objectFit: "cover", filter: "brightness(0.4)" }}
						/>

						{/* 오버레이 정보 */}
						<Box className="content-overray">
							<Stack spacing={1}>
								<Typography variant="h5" fontWeight="bold">
									{info.title}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									개봉일: {info.release_date}
								</Typography>
								<Divider />
								<Typography className="content-overview" variant="body1">
									{info.overview}
								</Typography>
								<Typography variant="body2" color="text.secondary"></Typography>
							</Stack>
						</Box>
					</Box>
				) : (
					// ✅ 모바일 화면: 위에 이미지, 아래에 설명
					<Stack spacing={2} sx={{ p: 1 }}>
						<Box sx={{ display: "flex", justifyContent: "center" }}>
							<Image
								alt={info.title}
								src={info.poster_path}
								width={200}
								height={300}
								style={{ borderRadius: 8 }}
							/>
						</Box>
						<Box>
							<Typography variant="h6" fontWeight="bold">
								{info.title}
							</Typography>
							<Typography variant="body2" color="text.secondary" gutterBottom>
								개봉일: {info.release_date}
							</Typography>
							<Divider sx={{ my: 1 }} />
							<Typography
								variant="body2"
								sx={{
									lineHeight: 1.6,
									pr: 1,
								}}>
								{info.overview}
							</Typography>
						</Box>
					</Stack>
				)
			}
		/>
	);
}
