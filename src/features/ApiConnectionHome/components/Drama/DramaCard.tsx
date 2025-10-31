import { Drama } from "@/sub/api/drama";
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import Link from "next/link";

interface Props {
	tv: Drama;
}

export default function DramaCard({ tv }: Props) {
	return (
		<Card sx={{}}>
			<CardActionArea component={Link} href={`/tv/${tv.id}`}>
				<CardMedia
					component="img"
					width="200"
					height="300"
					image={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
					alt={tv.title}
				/>
				<CardContent>
					<Typography variant="subtitle1" fontWeight="bold">
						{tv.title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{tv.release_date}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
