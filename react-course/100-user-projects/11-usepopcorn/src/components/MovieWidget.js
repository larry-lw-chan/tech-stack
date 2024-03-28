/* eslint-disable react/prop-types */

import React from "react";

export default function MovieWidget({ movie, onSelectMovie, children }) {
  return (
    <li
      key={movie.imdbID}
      onClick={() => {
        onSelectMovie(movie.imdbID);
      }}
    >
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>{children}</div>
    </li>
  );
}
