import { fetchPopularMovies, Movie } from "@/sub/api/movie";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MovieCard from "./components/MovieTab/MovieCard";
import TabCustom, { TabType } from "@/components/TabCustom";
import MovieTab from "./components/MovieTab/MovieTab";
import DramaTab from "./components/Drama/DramaTab";

export default function ApiConnectionHome() {
  const talValue: TabType[] = [
    {
      label: "movie",
      children: <MovieTab />,
    },
    {
      label: "drama",
      children: <DramaTab />,
    },
  ];
  return (
    <Container sx={{ p: 1 }}>
      <TabCustom data={talValue} />
    </Container>
  );
}
