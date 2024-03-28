import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import SearchForm from "../../components/SearchForm/SearchForm";
import { GetMovieByQuery } from "../../components/ApiService/ApiService";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setloading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query");

  const onSearch = (value) => {
    if (value === query) {
      alert("Try someting new");
      return;
    }
    setMovies([]);
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (query === "" || query === null) return;
    setloading(true);
    async function fetchMovie() {
      try {
        const { results } = await GetMovieByQuery(query);
        setMovies(results);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    }
    fetchMovie();
  }, [query]);

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      {loading && <Loader />}
      {movies !== null && Array.isArray(movies) && (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default MoviesPage;
