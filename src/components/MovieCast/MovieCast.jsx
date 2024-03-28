import { useParams } from "react-router-dom";
import { GetMovieCasts, imgUrl, defaultImg } from "../ApiService/ApiService";
import { useEffect, useState } from "react";

import css from "./MovieCast.module.css";
import Loader from "../Loader/Loader";

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCast] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    async function fetchCast() {
      try {
        setloading(true);
        const { cast } = await GetMovieCasts(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    }
    fetchCast();
  }, [movieId]);

  return (
    <div className={css.castContainer}>
      {loading && <Loader />}

      <ul className={css.castList}>
        {casts.map((item) => {
          return (
            <li key={item.cast_id} className={css.castListItem}>
              <img
                src={
                  item.profile_path !== null
                    ? imgUrl + item.profile_path
                    : defaultImg
                }
                alt={item.name}
                width={200}
                height={300}
                className={css.castImage}
              />
              <div className={css.castActorContainer}>
                <h2 className={css.actorName}>{item.name}</h2>
                <p className={css.characterName}>Character: {item.character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieCast;
