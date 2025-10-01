import CustomDialog from "@/components/CustomDialog";
import { fetchMovieDetail, Movie } from "@/sub/api/movie";
import { Box } from "@mui/material";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type CardInfoDialogProps = {
	open: boolean;
	onClose: () => void;
	id?: string;
};
export default function CardInfoDialog(props: CardInfoDialogProps) {
	const { open, onClose, id } = props;
	const [info, setInfo] = useState<Movie>();
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
	}, [id]);
	if (!info) return;

	return (
		<CustomDialog
			open={open}
			size="sm"
			header={{
				title: "정보",
				onClose: onClose,
			}}
			content={
				<Box>
					<Image
						alt={info.title}
						src={info.poster_path}
						width={400}
						height={600}
					/>
				</Box>
			}
		/>
	);
}
