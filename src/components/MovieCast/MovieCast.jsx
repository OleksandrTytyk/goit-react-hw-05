import { useParams } from "react-router-dom";
import { GetMovieCasts, imgUrl, defaultImg } from "../ApiService/ApiService";
import { useEffect, useState } from "react";

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCast] = useState([]);

  useEffect(() => {
    async function fetchCast() {
      try {
        const { cast } = await GetMovieCasts(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, [movieId]);

  return (
    <div>
      <ul>
        {casts.map((item) => {
          return (
            <li key={item.cast_id}>
              <img
                src={
                  item.profile_path !== null
                    ? imgUrl + item.profile_path
                    : defaultImg
                }
                alt={item.name}
                width={200}
              />
              <h2>Actor: {item.name}</h2>
              <p>Character: {item.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieCast;
