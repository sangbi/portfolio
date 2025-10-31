import CardInfoDialog, { CardInfoDialogProps } from "@/dialogs/CardInfoDialog";
import { Movie } from "@/sub/api/movie";
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import { useState } from "react";

interface Props {
	movie: Movie;
	// onClickCard?: (id: string) => void;
}

type DialogIds = "CardInfoDialog";
export default function MovieCard(props: Props) {
	const { movie } = props;

	const [dialogId, setDialogId] = useState<DialogIds>();
	const [cardInfoDialogProps, setCardInfoDialogProps] =
		useState<CardInfoDialogProps>();
	const onClose = () => {
		setDialogId(undefined);
		setCardInfoDialogProps(undefined);
	};

	const openDialog = () => {
		setDialogId("CardInfoDialog");
		setCardInfoDialogProps({
			open: true,
			onClose: onClose,
			id: String(movie.id),
		});
	};
	return (
		<Card sx={{}}>
			<CardActionArea component={"button"} onClick={openDialog}>
				{/* <CardActionArea component={Link} href={`/movies/${movie.id}`}> */}
				<CardMedia
					component="img"
					width="200"
					height="300"
					image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt={movie.title}
				/>
				<CardContent>
					<Typography
						variant="subtitle1"
						fontWeight="bold"
						noWrap
						sx={{
							width: "100%", // 카드 폭에 맞게 강제
							display: "block", // inline 성격 제거 → width 적용됨
							overflow: "hidden",
							textOverflow: "ellipsis",
						}}>
						{movie.title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{movie.release_date}
					</Typography>
				</CardContent>
			</CardActionArea>
			{dialogId === "CardInfoDialog" && cardInfoDialogProps && (
				<CardInfoDialog {...cardInfoDialogProps} />
			)}
		</Card>
	);
}
