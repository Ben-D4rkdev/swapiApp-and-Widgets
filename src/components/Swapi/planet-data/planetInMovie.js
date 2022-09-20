import React from "react";

const FeaturedFilms = ({ films }) => {
  if (!films || films.length === 0) {
    return <div />;
  }

  return (
    <>
      <b>Featured in films:</b>
      <ul>
        {films.map(film => {
          return <li key={film.url}>{film.title}</li>;
        })}
      </ul>
    </>
  );
};

export default FeaturedFilms;