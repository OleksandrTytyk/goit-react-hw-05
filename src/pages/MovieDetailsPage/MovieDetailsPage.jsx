import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";

import {
  GetMovieDetails,
  imgUrl,
} from "../../components/ApiService/ApiService";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

// const imgUrl = "https://image.tmdb.org/t/p/w500/";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await GetMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie();
  }, [movieId]);

  return (
    <div>
      <li key={movie.id}>
        <img src={imgUrl + movie.poster_path} alt="" />

        <h2>{movie.title}</h2>
        <p>Average rating: {movie.vote_average}</p>
        <p>
          Genres:
          {movie.genres && movie.genres.map((genre) => genre.name).join(" / ")}
        </p>
        <p>Overview: {movie.overview}</p>
        {movie.production_companies && (
          <>
            <h3>Production companies</h3>
            <div>
              {movie.production_companies.map((company) => {
                return (
                  <div key={company.id}>
                    <img src={imgUrl + company.logo_path} alt="" width={200} />
                  </div>
                );
              })}
            </div>
          </>
        )}
        {movie.homepage && (
          <Link to={movie.homepage} target="_blank">
            Movie homepage
          </Link>
        )}
      </li>
      <div>
        <h3>Additional information</h3>
      </div>
      <ul>
        <li>
          <Link to={"cast"}>Cast</Link>
        </li>
        <li>
          <Link to={"reviews"}>Reviews</Link>
        </li>
        <Routes>
          <Route path="cast" element={<MovieCast />}></Route>
          <Route path="reviews" element={<MovieReviews />}></Route>
        </Routes>
      </ul>
    </div>
  );
};

export default MovieDetailsPage;
