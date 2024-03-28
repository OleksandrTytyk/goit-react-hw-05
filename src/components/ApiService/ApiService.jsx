import axios from "axios";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWQ3N2RiYmNhNDY5ODBmODc5ZjViMDMyMWExYzY4MyIsInN1YiI6IjY1ZmEyZjc0N2YwNTQwMDE3YzA3MTYxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rG-xuH-UedyMXf3eHu84dh9XI1S9zNO2SDgubNUVlnk";

export const imgUrl = "https://image.tmdb.org/t/p/w500/";

export const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

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

export const GetMovieDetails = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  const options = {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  const response = await axios.get(url, options);
  return response.data;
};

export const GetMovieCasts = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits`;

  const options = {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  const response = await axios.get(url, options);
  return response.data;
};

export const GetMovieReviews = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews`;

  const options = {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  const response = await axios.get(url, options);
  return response.data;
};

export const GetMovieByQuery = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

  const options = {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  const response = await axios.get(url, options);
  return response.data;
};
