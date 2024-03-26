import axios from "axios";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWQ3N2RiYmNhNDY5ODBmODc5ZjViMDMyMWExYzY4MyIsInN1YiI6IjY1ZmEyZjc0N2YwNTQwMDE3YzA3MTYxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rG-xuH-UedyMXf3eHu84dh9XI1S9zNO2SDgubNUVlnk";

export const GetTrendingMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

  const options = {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  const response = await axios.get(url, options);
  return response.data;
};
