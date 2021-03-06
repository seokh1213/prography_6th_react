import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

export default function MovieList() {
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const _movies: Movie[] = await fetch(
          "https://yts.mx/api/v2/list_movies.json?limit=50"
        )
          .then(res => res.json())
          .then(json => json.data.movies);
        setMovies(_movies);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchMovies();
  }, []);

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  if (isLoading) {
    return (
      <div className="loading text-white">
        Loading...&nbsp;
        <span
          className="spinner-border"
          role="status"
          aria-hidden="true"
        ></span>
      </div>
    );
  }

  if (!movies) return null;

  return (
    <div className="d-flex flex-column">
      {movies.map(movie => (
        <MovieItem movie={movie} />
      ))}
    </div>
  );
}

export type Movie = {
  background_image: string;
  background_image_original: string;
  date_uploaded: string;
  date_uploaded_unix: number;
  description_full: string;
  genres: string[];
  id: number;
  imdb_code: string;
  language: string;
  large_cover_image: string;
  medium_cover_image: string;
  mpa_rating: string;
  rating: number;
  runtime: number;
  slug: string;
  small_cover_image: string;
  state: string;
  summary: string;
  synopsis: string;
  title: string;
  title_english: string;
  title_long: string;
  torrents: {
    date_uploaded: string;
    date_uploaded_unix: number;
    hash: string;
    peers: number;
    quality: string;
    seeds: number;
    size: string;
    size_bytes: number;
    type: string;
    url: string;
  }[];
  url: string;
  year: number;
  yt_trailer_code: string;
};
