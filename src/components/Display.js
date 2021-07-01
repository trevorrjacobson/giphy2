import React from "react";

function Display({ id, title, url, isFave, addFavorite, deleteFavorite }) {
  return (
    <div className="gifBox flexColumn flexWrap">
      <h4 className="textCenter">{title}</h4>
      <img className="gif" alt="fun gif" src={url} />
      {isFave && (
        <button className="btn faveBtn" onClick={() => deleteFavorite(id)}>
          Remove Favorite
        </button>
      )}
      {!isFave && (
        <button
          className="btn faveBtn"
          onClick={() => addFavorite({ id, title, url })}
        >
          Add Favorite
        </button>
      )}
    </div>
  );
}

export default Display;
