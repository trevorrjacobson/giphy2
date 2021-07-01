import React, { useEffect, useMemo, useState } from "react";
import GifDisplay from "./Display";
import useFetch from "../hooks/useFetch";
import { connect } from "react-redux";
import { setSearch, addFavorite, deleteFavorite } from "../redux/actions";

const Search = ({
  addFavorite,
  deleteFavorite,
  favorites,
  username,
  setSearch,
  search,
}) => {
  const [searchField, setSearchField] = useState("");
  const [query, setQuery] = useState("");
  const { data, loading, error } = useFetch(query);
  const faveIds = useMemo(() => {
    return favorites.map((val) => val.id);
  }, [favorites]);

  useEffect(() => {
    if (data) {
      setSearch(data.data);
    }
  }, [data]);

  return (
    <div>
      <h2 className="text-center">Welcome {username}</h2>
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
      {search && (
        <div className="flex-wrap">
          {search.map((gif) => (
            <GifDisplay
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

function mapStateToProps(state) {
  return {
    username: state.user.username,
    favorites: state.favorites,
    search: state.search,
  };
}

const mapDispatchToProps = {
  deleteFavorite,
  addFavorite,
  setSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
