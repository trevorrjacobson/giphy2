import React, { useMemo, useState } from "react";
import Display from "./Display";
import useFetch from "../hooks/useFetch";

const Search = ({ addFavorite, deleteFavorite, favorites, loggedInUser }) => {
  const [searchField, setSearchField] = useState("");
  const [query, setQuery] = useState("");
  const { data, loading, error } = useFetch(query);
  const faveIds = useMemo(() => {
    return favorites.map((val) => val.id);
  }, [favorites]);
  return (
    <div>
      <h2 className="text-center">Welcome {loggedInUser}</h2>
      <form className="form">
        <div className="form-field flex-wrap">
          <label htmlFor="search">Search</label>
          <input
            id="search"
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
            placeholder="Search for Gifs"
          />
        </div>
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            setQuery(searchField);
          }}
        >
          Search
        </button>
      </form>
      {loading && <div className="text-center">Loading Gifs</div>}
      {error && <div className="text-center">{error}</div>}
      {data && (
        <div className="flex-wrap">
          {data.data.map((gif) => (
            <Display
              deleteFavorite={deleteFavorite}
              addFavorite={addFavorite}
              isFave={faveIds.includes(gif.id)}
              id={gif.id}
              title={gif.title}
              url={gif.images.original.url}
              key={gif.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
