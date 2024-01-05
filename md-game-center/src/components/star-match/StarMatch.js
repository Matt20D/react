import React, { useState } from "react";

import '../../stylesheets/Game.css';
import AllLinks from '../AllLinks.js';
import Game from './Game.js';
import constants from "../commons/Constants";

const StarMatch = () => {
    const [gameId, setGameId] = useState(0);
    const [numberOfWins, setNumberOfWins] = useState(0);
    const [numberOfLosses, setNumberOfLosses] = useState(0);

    return (
        <div style={{ margin: "45px" }}>
            <Game key={gameId}
                gameId={gameId}
                startNewGame={() => setGameId(gameId + 1)}
                numberOfWins={numberOfWins}
                numberOfLosses={numberOfLosses}
                setNumberOfWins={() => setNumberOfWins(numberOfWins + 1)}
                setNumberOfLosses={() => setNumberOfLosses(numberOfLosses + 1)}
                gameTitle={constants.gameTitles["starMatch"]}
            />
            <div className="game">
                <AllLinks />
            </div>
        </div>
    );
}

export default StarMatch;