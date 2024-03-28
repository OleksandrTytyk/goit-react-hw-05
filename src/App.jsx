import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route
            path="/movies/:movieId/*"
            element={<MovieDetailsPage />}
          ></Route>
          {/* <Route path="*" element={<NotFoundPage />}></Route> */}
        </Routes>
      </main>
    </>
  );
}

export default App;

// adult: false;
// backdrop_path: "/fFdlyeC8qPROUqM8ydR9INXAG17.jpg";
// genre_ids: (2)[(28, 53)];
// id: 359410;
// media_type: "movie";
// original_language: "en";
// original_title: "Road House";
// overview: "Ex-UFC fighter Dalton takes a job as a bouncer at a Florida Keys roadhouse, only to discover that this paradise is not all it seems.";
// popularity: 1307.152;
// poster_path: "/bXi6IQiQDHD00JFio5ZSZOeRSBh.jpg";
// release_date: "2024-03-08";
// title: "Road House";
// video: false;
// vote_average: 7.29;
// vote_count: 604;

// adult:false
// backdrop_path:"/fFdlyeC8qPROUqM8ydR9INXAG17.jpg"
// belongs_to_collection: null
// budget:85000000
// genres:[{id: 28, name: "Action"}, {id: 53, name: "Thriller"}]
// homepage:"https://www.amazon.com/gp/video/detail/B0CH5YQPZQ"
// id:359410
// imdb_id:"tt3359350"
// original_language:"en"
// original_title:"Road House"
// overview:"Ex-UFC fighter Dalton takes a job as a bouncer at a Florida Keys roadhouse, only to discover that this paradise is not all it seems."
// popularity:1307.152
// poster_path:"/bXi6IQiQDHD00JFio5ZSZOeRSBh.jpg"
// production_companies:[{id: 21, logo_path: "/usUnaYV6hQnlVAXP6r4HwrlLFPG.png", name: "Metro-Goldwyn-Mayer",…},…]
// production_countries:[{iso_3166_1: "US", name: "United States of America"}]
// release_date:"2024-03-08"
// revenue:0
// runtime:121
// spoken_languages:[{english_name: "English", iso_639_1: "en", name: "English"}]
// status:"Released"
// tagline:"Take it outside."
// title:"Road House"
// video:false
// vote_average:7.29
// vote_count:607
