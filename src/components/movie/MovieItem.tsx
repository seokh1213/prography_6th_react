import React from "react";
import { Movie } from "./MovieList";

type MovieItemProps = {
  movie: Movie;
};

export default function MovieItem({ movie }: MovieItemProps) {
  return (
    <div className="col mb-4">
      <div className="card">
        <img
          src={movie.medium_cover_image}
          className="card-img-top"
          alt={movie.title}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.summary}</p>
        </div>
      </div>
    </div>
  );
}
