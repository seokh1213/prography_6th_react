import React from "react";
import { Movie } from "./MovieList";

type MovieItemProps = {
  movie: Movie;
};

export default function MovieItem({ movie }: MovieItemProps) {
  return <div>{movie.title}</div>;
}
