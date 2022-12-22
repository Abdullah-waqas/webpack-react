import React, { useEffect, useState } from "react";
import { Carousel } from "../components/carousel/CarouselContainer";
import { getMovieList } from "../services";

function mapper(list) {
  return list.map((item) => ({
    player: {
      id: item.id,
      title: item.title,
      desc: item.overview,
      image: `https://image.tmdb.org/t/p/original${item.poster_path}`,
    },
  }));
}

const MovieListScreen = () => {
  const [movieList, setMovieList] = useState(null);

  const getMovies = async () => {
    try {
        const res = await getMovieList();
        const list = {
            list1: mapper(res.results.slice(3, 8)),
            list2: mapper(res.results.slice(5, 10)),
            list3: mapper(res.results.slice(10, 15)),
        }
        setMovieList(list);
    } catch (e) {

    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    movieList && <>
      <Carousel _items={movieList.list1} />
      <Carousel _items={movieList.list2} />
      <Carousel _items={movieList.list3} />
    </>
  );
};

export default MovieListScreen;
