import React from "react";
import GifDisplay from "./Display";
import { connect } from "react-redux";
import { deleteFavorite } from "../redux/actions";

const Favorites = ({ favorites, deleteFavorite, username }) => {
  return (
    <>
      <h2 className="text-center">Favorites for {username}</h2>
      <div className="flex-wrap">
        {favorites.map((gif) => (
          <GifDisplay
            id={gif.id}
            isFave={true}
            deleteFavorite={deleteFavorite}
            title={gif.title}
            url={gif.url}
            key={gif.id}
          />
        ))}
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    username: state.user.username,
    favorites: state.favorites,
  };
}

const mapDispatchToProps = {
  deleteFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
