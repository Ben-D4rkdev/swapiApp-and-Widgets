import React from "react";

const PlanetInfo = ({ name, population, climate, terrain, films }) => {
  return (
    <div>
      <p>
        <b>Name:</b> {name}
      </p>
      <p>
        <b>Population:</b> {population}
      </p>
      <p>
        <b>Climate:</b> {climate}
      </p>
      <p>
        <b>Terrain:</b> {terrain}
      </p>
    </div>
  );
};

export default PlanetInfo;