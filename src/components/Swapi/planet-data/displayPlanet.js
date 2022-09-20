import axios from "axios";
const PLANETS_API_URL = "https://swapi.dev/api/planets/";

export const fetchPlanets = async nextUrl => {
  const response = await axios.get(nextUrl || PLANETS_API_URL);
  return response.data;
};

export const fetchFilm = async filmUrl => {
  const response = await axios.get(filmUrl);
  return response.data;
};

export const fetchFilms = async filmUrls => {
  const films = [];
  for (let filmUrl of filmUrls) {
    const film = await fetchFilm(filmUrl);
    films.push(film);
  }

  return films;
};