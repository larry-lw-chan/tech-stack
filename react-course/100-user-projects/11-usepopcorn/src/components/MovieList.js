/* eslint-disable react/prop-types */

import React from "react";
import MovieWidget from "./MovieWidget";

export default function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <MovieWidget
          movie={movie}
          key={movie.imdbID}
          onSelectMovie={onSelectMovie}
        >
          <p>
            <span>🗓</span>
            <span>{movie.Year}</span>
          </p>
        </MovieWidget>
      ))}
    </ul>
  );
}
