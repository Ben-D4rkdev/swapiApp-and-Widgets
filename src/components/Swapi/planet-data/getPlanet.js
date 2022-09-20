import React, { useState, useEffect } from "react";
import PlanetInfo from "./infoOfPlanet";
import FeaturedFilms from "./planetInMovie";
import { fetchFilms } from "./displayPlanet";

const Planets = ({ planets, fetchMorePlanets }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async filmUrls => {
      if (!filmUrls || filmUrls.length === 0) {
        setFilms([]);
      } else {
        const filmsToDisplay = await fetchFilms(filmUrls);
        setFilms(filmsToDisplay);
      }
    };
    planets &&
      planets.results &&
      planets.results[currentIndex] &&
      fetchData(planets.results[currentIndex].films);
  }, [planets, currentIndex]);

  if (!planets || !planets.results) {
    return <div>Loading...</div>;
  }

  return (
    <div className="planet-container">
      <h1>Scroll Planets in the Stars</h1>
      <div className="card">
        {planets && planets.results && planets.results.length > 0 && (
          <>
            <div>
              <h3>Index: {currentIndex}</h3>
              <button
                disabled={currentIndex <= 0}
                onClick={() => {
                  setCurrentIndex(currentIndex - 1);
                }}
              >
                Previous
              </button>
              <button
                disabled={planets.results.length <= currentIndex + 1}
                onClick={() => {
                  setCurrentIndex(currentIndex + 1);
                }}
              >
                Next
              </button>
              <button
                disabled={planets.results.length > currentIndex + 1}
                onClick={() => {
                  fetchMorePlanets();
                }}
              >
                Load More
              </button>
            </div>
            <PlanetInfo
              name={planets.results[currentIndex].name}
              population={planets.results[currentIndex].population}
              climate={planets.results[currentIndex].climate}
              terrain={planets.results[currentIndex].terrain}
            />
            <FeaturedFilms films={films} />
          </>
        )}
      </div>

    </div>
  );
};

export default Planets;