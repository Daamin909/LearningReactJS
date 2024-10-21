import React, { useEffect, useState } from "react";
import _ from "lodash";

import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = () => {
  const api_key = import.meta.env.VITE_API_KEY;
  const [popularMovies, setPopularMovies] = useState([]);
  const [filteredPopularMovies, setFilteredPopularMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
    );
    const data = await response.json();
    setPopularMovies(data.results);
    setFilteredPopularMovies(data.results);
  };

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilteredPopularMovies(popularMovies);
    } else {
      setMinRating(rate);
      const filtered = popularMovies.filter(
        (movie) => movie.vote_average >= rate
      );
      setFilteredPopularMovies(filtered);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="movie_list">
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">Popular 🔥</h2>
        <div className="align_center movie_list_fs">
          <FilterGroup
            onRatingClick={handleFilter}
            minRating={minRating}
            ratings={[8, 7, 6]}
          />
          <select
            name="by"
            id=""
            onChange={handleSort}
            value={sort.by}
            className="movie_sorting"
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            onChange={handleSort}
            value={sort.order}
            id=""
            className="movie_sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
        {filteredPopularMovies.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })}
      </div>
    </section>
  );
};

export default MovieList;
