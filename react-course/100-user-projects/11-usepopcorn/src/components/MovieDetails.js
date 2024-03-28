/* eslint-disable react/prop-types */

import React from "react";
import { useState, useEffect } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";
import { useKey } from "../useKey";

const KEY = "5e0476f1";

export default function MovieDetails({
  selectedId,
  onCloseMovie,
  watched,
  onAddWatched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const countRef = React.useRef(0);
  useEffect(() => {
    if (userRating) countRef.current += 1;
  }, [userRating]);

  const isWatched = watched.find((movie) => movie.imdbID === selectedId);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
    imdbRating: imdbRating,
  } = movie;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      Title: title,
      Year: year,
      Poster: poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating: Number(userRating),
      countRatingDecisions: countRef.current,
    };

    if (isWatched) {
      onCloseMovie();
      return;
    }

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }
  useKey("Escape", onCloseMovie);

  useEffect(
    function () {
      setIsLoading(true);
      async function getMovieDetails() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setIsLoading(false);
        setMovie(data);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  useEffect(() => {
    if (selectedId) {
      document.title = `Movie | ${title}`;
    }
    return function () {
      document.title = "usePopcorn";
    };
  }, [title]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${title} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} imdb Rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  <button className="btn-add" onClick={handleAdd}>
                    + Add to list
                  </button>
                  <p>
                    <em>{plot}</em>
                  </p>
                  <p>Starring {actors}</p>
                  <p>Directed by {director}</p>
                </>
              ) : (
                <p>You already rated movie</p>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

// useEffect(
//   function () {
//     function callback(e) {
//       if (e.key === "Escape") {
//         onCloseMovie();
//       }
//     }
//     document.addEventListener("keydown", callback);
//     return function () {
//       document.removeEventListener("keydown", callback);
//     };
//   },
//   [onCloseMovie]
// );
