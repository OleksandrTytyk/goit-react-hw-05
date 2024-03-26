import { Route, Routes } from "react-router-dom";
import { GetTrendingMovies } from "./components/ApiService/ApiService";
import HomePage from "./pages/HomePage/HomePage";
GetTrendingMovies();

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
