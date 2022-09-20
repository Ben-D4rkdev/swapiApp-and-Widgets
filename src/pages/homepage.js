import React, { useState, useEffect } from "react";
import Planets from "../components/Swapi/planet-data/getPlanet";
import { fetchPlanets } from "../components/Swapi/planet-data/displayPlanet";
import BensSwapi from "../components/Swapi/SwapiFun";
import '../App.scss';

function HomePage() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const planetsData = await fetchPlanets();
      setPlanets(planetsData);
    };
    fetchData();
  }, []);

  const fetchMorePlanets = async () => {
    if (planets && planets.next) {
      const planetsData = await fetchPlanets(planets.next);
      planetsData.results = planets.results.concat(planetsData.results);
      setPlanets(planetsData);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>WELCOME TO BEN's STARWARS APP</h1>
      </div>
      <div className="home-page-wrapper">
        <div className="planet-wrapper">
            <Planets planets={planets} fetchMorePlanets={fetchMorePlanets} />
        </div>
        <div className="people-wrapper">
          <BensSwapi/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;