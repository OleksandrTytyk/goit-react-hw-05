import { Link } from "react-router-dom";
import { imgUrl } from "../ApiService/ApiService";

import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <div className={css.movieList}>
      <ul className={css.movieListItems}>
        {movies.map((movie) => (
          <li key={movie.id} className={css.movieListItem}>
            <Link to={`/movies/${movie.id}`} className={css.movieListLink}>
              <img
                src={imgUrl + movie.backdrop_path}
                alt=""
                className={css.movieListImage}
              />
              <div className={css.movieListInfo}>
                <h2 className={css.movieListTitle}>{movie.title}</h2>
                <p className={css.movieListRating}>
                  Average rating: <b>{movie.vote_average}</b>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
