import React from "react";
import "../../css/Movie.css";
import MovieList from "./MovieList";

export default function MovieContainer() {
  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h3 className="text-danger">Movie List</h3>
      <MovieList />
    </div>
  );
}
