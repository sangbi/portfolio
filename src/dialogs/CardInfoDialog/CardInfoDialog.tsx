import {
	Box,
	Dialog,
	DialogContent,
	DialogTitle,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useCallback, useEffect, useState } from "react";
import { fetchMovieDetail, Movie } from "@/sub/api/movie";
import CustomDialogTitle from "@/components/CustomDialogTitle";

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
			.then(setInfo)
			.catch((err) => console.log(err.message));
	}, []);

	useEffect(() => {
		if (!id) return;
		doInfo(id);
	}, [id]);
	return (
		<Dialog open={open} fullWidth maxWidth="md">
			<CustomDialogTitle title="정보" onClose={onClose} />
			<DialogContent>
				<Box>{info?.title}</Box>
			</DialogContent>
		</Dialog>
	);
}
