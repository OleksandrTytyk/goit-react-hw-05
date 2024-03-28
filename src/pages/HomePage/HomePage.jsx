import { useEffect, useState } from "react";
import { GetTrendingMovies } from "../../components/ApiService/ApiService";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const { results } = await GetTrendingMovies();
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, []);
  return (
    <div>
      <h1>Trends of the day</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
