import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetMovieReviews } from "../ApiService/ApiService";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const { results } = await GetMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 ? (
        <p>No reviews yet</p>
      ) : (
        <ul>
          {reviews.map((review) => {
            return (
              <div key={review.id}>
                <li>
                  <h3>Author: {review.author}</h3>
                  <p>Review: {review.content}</p>
                </li>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
