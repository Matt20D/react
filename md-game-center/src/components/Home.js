import logo from '../logo.svg';
import '../stylesheets/App.css';

import React from "react";
import AllLinks from './AllLinks.js';

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p> Welcome to Matt Duran's Game Center </p>
                <p> Built using React and JS </p>
                <br />
                <div className="home-link">
                    <AllLinks />
                </div>
            </header>
        </div>
    );
}

export default Home;