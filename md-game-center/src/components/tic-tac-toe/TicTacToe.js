import React, { useState } from "react";

import '../../stylesheets/Game.css';
import AllLinks from '../AllLinks.js';
import Game from './Game.js';
import constants from "../commons/Constants";

const TicTacToe = () => {
    const [gameId, setGameId] = useState(0);
    const [numberOfWins, setNumberOfWins] = useState(0);
    const [numberOfLosses, setNumberOfLosses] = useState(0);
    const [numberOfDraws, setNumberOfDraws] = useState(0);
    const [gameStatus, setGameStatus] = useState("firstGame");

    const startNewGame = () => {
        setGameStatus("active");
        setGameId(gameId + 1);
    }

    return (
        <div style={{ margin: "45px" }}>
            <Game key={gameId}
                gameId={gameId}
                startNewGame={startNewGame}
                numberOfWins={numberOfWins}
                numberOfLosses={numberOfLosses}
                numberOfDraws={numberOfDraws}
                setNumberOfWins={() => setNumberOfWins(numberOfWins + 1)}
                setNumberOfLosses={() => setNumberOfLosses(numberOfLosses + 1)}
                setNumberOfDraws={() => setNumberOfDraws(numberOfDraws + 1)}
                gameStatus={gameStatus}
                setGameStatus={setGameStatus}
                gameTitle={constants.gameTitles["ticTacToe"]}
            />
            <div className="game">
                <AllLinks />
            </div>
        </div>
    );
}

export default TicTacToe;
