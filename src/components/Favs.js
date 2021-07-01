import React from "react";
import Display from "./Display";

const Favs = ({ favorites, deleteFavorite, loggedInUser }) => {
  return (
    <>
      <h2 className="textCenter">{loggedInUser}'s Favorite Gifs</h2>
      <div className="flex-wrap">
        {favorites.map((gif) => (
          <Display
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

export default Favs;
