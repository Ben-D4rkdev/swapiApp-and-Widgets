import React, { useState } from "react";

export default function BensSwapi() {
  const urls = [
    "https://www.swapi.dev/api/people",
    "https://www.swapi.dev/api/planets",
    "https://www.swapi.dev/api/films",
    "https://www.swapi.dev/api/species",
    "https://www.swapi.dev/api/starships"
  ];
  const [url, setUrl] = useState("");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([])
  const [encoding, setEncoding] = useState("");

  function handleSelectCategory(e) {
    let request = url;
    if (search) {
      request = `${url}/?name=${search}`;
    }

    if (encoding) {
      request = `${request}/?format=${encoding}`;
    }

    fetch(request)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSearch("");
        setResults(data.result || data.results)
      });
      
      
  }
  return (
    <div className="App">
      <h1>Hello from Ben's App</h1>
      <select onChange={(e) => setUrl(e.target.value)}>
        <option>Select a Category</option>
        {urls.map((url) => {
          return (
            <option key={url} value={url}>
              {url.split("/").at(-1)}
            </option>
          );
        })}
      </select>
      {url && (
        <>
          <input
            type="text"
            value={search}
            placeholder="Enter a search"
            onChange={(e) => setSearch(e.target.value)}
          />

          <select onChange={(e) => setEncoding(e.target.value)}>
            <option>Select Encoding Type</option>
            <option value="WOOKIEE">wookiee</option>
            <option value="JSON">JSON</option>
          </select>
          <button onClick={handleSelectCategory}>Search</button>
        </>
      )}
      {results.map((result) => (
            <div key={result.uid} className="swapi-data">
              <div>
                  <h3>{result.properties.name}</h3>
              </div>
                <ul key={result.uid}>
                  <li>{result.properties.gender}</li>
                  <li>{result.properties.birth_year}</li>
                  <li>{result.properties.height}</li>
                </ul>
              <div>
              </div>
            </div>
          ))}
      <div id="result-before"></div>
    </div>
  );
}
