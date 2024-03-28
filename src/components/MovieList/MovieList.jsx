import { Link } from "react-router-dom";
import { imgUrl } from "../ApiService/ApiService";

// const imgUrl = "https://image.tmdb.org/t/p/w500/";

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img src={imgUrl + movie.backdrop_path} alt="" />

              <h2>{movie.title}</h2>
              <p>Average rating: {movie.vote_average}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
