import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TextAlign from "./components/Widgets/textalign";
import ColorChange from "./components/Widgets/ColorChange";
import Clock from "./components/Widgets/Clock";
import FontSizer from "./components/Widgets/FontSizer";
import SwapiApp from "./components/Swapi/SwapiFun";
import CalcApp from "./components/calc/CalcApp";
import HomePage from "./pages/homepage";
import NavBar from "./navbar";
import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/text-align" element={<TextAlign />} />
          <Route path="/color-change" element={<ColorChange />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/font-sizer" element={<FontSizer />} />
          <Route path="/calculator" element={<CalcApp />} />
        </Routes>
      </Router>
    </div>
  );
}
