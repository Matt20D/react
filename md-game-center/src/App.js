import './stylesheets/App.css';

// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// import Home component
import Home from "./components/Home";
// import About component
import StarMatch from "./components/star-match/StarMatch";
// import ContactUs component
import ContactMe from "./components/ContactMe";
import TicTacToe from './components/tic-tac-toe/TicTacToe';
import HangMan from './components/hang-man/HangMan';

// import React, {useState, useEffect} from 'react';

function App() {
  return (
    <>
      {/* https://react-bootstrap.netlify.app/docs/getting-started/introduction/ */}
      {/* <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>

      <script>var Alert = ReactBootstrap.Alert;</script> */}

      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>

          <Route
            exact
            path="/"
            element={<Home />}
          />

          <Route
            path="/starmatch"
            element={<StarMatch />}
          />

          <Route
            path="/tictactoe"
            element={<TicTacToe />}
          />

          <Route
            path="/hangman"
            element={<HangMan />}
          />

          <Route
            path="/contactme"
            element={<ContactMe />}
          />

          {/* If any route mismatches the upper 
        route endpoints then, redirect triggers 
        and redirects app to home component with to="/" */}
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
