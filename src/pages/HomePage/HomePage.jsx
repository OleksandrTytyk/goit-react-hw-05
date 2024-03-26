import { useEffect, useState } from "react";
import { GetTrendingMovies } from "../../components/ApiService/ApiService";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const { results } = await GetTrendingMovies();
        console.log("fetchMovies ~ data:", results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  });
  return (
    <div>
      <p>Helo</p>
    </div>
  );
};

export default HomePage;
