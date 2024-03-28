import { useEffect, useState } from "react";
import { GetTrendingMovies } from "../../components/ApiService/ApiService";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const [loading, setloading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      setloading(true);

      try {
        const { results } = await GetTrendingMovies();
        setMovies(results);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    }
    fetchMovies();
  }, []);
  return (
    <div>
      <h1 className={css.homePageTitle}>Trends of the day</h1>
      {loading && <Loader />}
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
