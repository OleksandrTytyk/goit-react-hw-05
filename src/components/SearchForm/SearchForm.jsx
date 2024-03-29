import { useState } from "react";
import css from "./SearchForm.module.css";

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!query.trim()) {
      alert("Enter some text");
      return;
    }
    onSearch(query);
    setQuery("");
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className={css.searchFormWrapper}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
          placeholder="Search movie..."
          className={css.searchFormInput}
        />
        <button className={css.searchFormBtn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
