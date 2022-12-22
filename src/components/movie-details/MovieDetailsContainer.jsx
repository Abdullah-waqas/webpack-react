import React from "react";
import "./movie-details.scss";

const MovieDetailsContainer = ({ movieDetails }) => {
  const myStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetails.poster_path})`,
  };
  return (
    <>
      <div className="movie_card" id="bright">
        <div className="info_section">
          <div className="movie_header">
            <img
              className="locandina"
              src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
            />
            <h1>{movieDetails.title}</h1>
            <h4>{movieDetails.release_date}</h4>
          </div>
          <div className="movie_desc">
            <p className="text">
              {movieDetails.overview}
              <button className="button">Add to wish list</button>
            </p>
          </div>
        </div>
        <div className="blur_back" style={myStyle}></div>
      </div>
    </>
  );
};

export default MovieDetailsContainer;
