import { Movie } from "@/sub/api/movie";
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActionArea,
} from "@mui/material";
import Link from "next/link";

interface Props {
	movie: Movie;
}

export default function MovieCard({ movie }: Props) {
	return (
		<Card sx={{}}>
			<CardActionArea
				component={"button"}
				onClick={() => {
					alert("아직 준비중입니다.");
				}}>
				{/* <CardActionArea component={Link} href={`/movies/${movie.id}`}> */}
				<CardMedia
					component="img"
					width="200"
					height="300"
					image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt={movie.title}
				/>
				<CardContent>
					<Typography variant="subtitle1" fontWeight="bold">
						{movie.title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{movie.release_date}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
