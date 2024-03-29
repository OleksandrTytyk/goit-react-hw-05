import { useEffect, useRef, useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";

import {
  GetMovieDetails,
  imgUrl,
} from "../../components/ApiService/ApiService";

import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

import css from "./MovieDetailsPage.module.css";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setloading] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");

  useEffect(() => {
    async function fetchMovie() {
      try {
        setloading(true);

        const data = await GetMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    }
    fetchMovie();
  }, [movieId]);

  return (
    <div className={css.movieContainer}>
      <li key={movie.id} className={css.movieListItem}>
        {loading && <Loader />}

        <Link to={backLinkRef.current}>
          <b>
            <span>&#8592;</span>Go back
          </b>
        </Link>

        <img
          src={imgUrl + movie.poster_path}
          alt=""
          className={css.moviePoster}
        />
        <div className={css.movieDetails}>
          <h2 className={css.movieTitle}>{movie.title}</h2>
          <p className={css.movieRating}>
            <u>Average rating</u> : <b>{movie.vote_average}</b>
          </p>
          <p className={css.movieGenres}>
            <u>Genres</u> :
            {movie.genres &&
              movie.genres.map((genre) => genre.name).join(" / ")}
          </p>
          <p className={css.movieOverview}>
            <u>Overview</u> : {movie.overview}
          </p>
          {movie.production_companies && (
            <>
              <h3 className={css.productionCompaniesTitle}>
                <u>Production companies</u>
              </h3>
              <div className={css.productionCompaniesList}>
                {movie.production_companies.map((company) => {
                  return (
                    <div key={company.id} className={css.productionCompany}>
                      <img
                        src={imgUrl + company.logo_path}
                        alt=""
                        width={200}
                        className={css.companyLogo}
                      />
                    </div>
                  );
                })}
              </div>
            </>
          )}
          {movie.homepage && (
            <Link
              to={movie.homepage}
              target="_blank"
              className={css.movieHomepageLink}
            >
              <u>Movie homepage</u>
            </Link>
          )}
        </div>
      </li>
      <div className={css.additionalInfo}>
        <h3 className={css.additionalInfoTitle}>Additional information</h3>
      </div>
      <ul className={css.additionalInfoList}>
        <li className={css.additionalInfoItem}>
          <Link to={"cast"} className={css.additionalInfoLink}>
            Cast
          </Link>
        </li>
        <li className={css.additionalInfoItem}>
          <Link to={"reviews"} className={css.additionalInfoLink}>
            Reviews
          </Link>
        </li>
        <Routes>
          <Route
            path="cast"
            element={<MovieCast />}
            className={css.additionalInfoRoute}
          ></Route>
          <Route
            path="reviews"
            element={<MovieReviews />}
            className={css.additionalInfoRoute}
          ></Route>
        </Routes>
      </ul>
    </div>
  );
};

export default MovieDetailsPage;
