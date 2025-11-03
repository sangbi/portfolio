import DramaInfoDialog, {
	DramaInfoDialogProps,
} from "@/dialogs/DramaInfoDialog";
import { Drama } from "@/sub/api/drama";
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import { useState } from "react";

interface Props {
	tv: Drama;
}

type DialogIds = "DramaInfoDialog";
export default function DramaCard(props: Props) {
	const { tv } = props;
	const [dialogId, setDialogId] = useState<DialogIds>();
	const [dramaInfoDialogProps, setDramaInfoDialogProps] =
		useState<DramaInfoDialogProps>();
	const onClose = () => {
		setDialogId(undefined);
		setDramaInfoDialogProps(undefined);
	};
	const openDialog = () => {
		setDialogId("DramaInfoDialog");
		setDramaInfoDialogProps({
			open: true,
			onClose: onClose,
			id: String(tv.id),
		});
	};
	return (
		<Card sx={{}}>
			<CardActionArea component={"button"} onClick={openDialog}>
				<CardMedia
					component="img"
					width="200"
					height="300"
					image={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
					alt={tv.name}
				/>
				<CardContent>
					<Typography
						variant="subtitle1"
						fontWeight="bold"
						noWrap
						sx={{
							width: "100%", // 카드 폭에 맞게 강제
							display: "block",
							overflow: "hidden",
							textOverflow: "ellipsis",
						}}>
						{tv.name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{tv.first_air_date}
					</Typography>
				</CardContent>
			</CardActionArea>
			{dialogId === "DramaInfoDialog" && dramaInfoDialogProps && (
				<DramaInfoDialog {...dramaInfoDialogProps} />
			)}
		</Card>
	);
}
