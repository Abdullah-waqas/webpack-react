import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetailsContainer from "../components/movie-details/MovieDetailsContainer";
import { getMovieDetails } from "../services";

const MovieDetailScreen = () => {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);

  const getMovieDescription = async () => {
    try {
      const res = await getMovieDetails(id);
      setMovieDetails(res);
    } catch (e) {}
  };
  useEffect(() => {
    getMovieDescription();
  }, [id]);

  if (!movieDetails) {
    return;
  }
  return <MovieDetailsContainer movieDetails={movieDetails} />;
};

export default MovieDetailScreen;
