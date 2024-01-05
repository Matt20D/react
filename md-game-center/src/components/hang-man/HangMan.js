import React, { useState } from "react";

import '../../stylesheets/Game.css';
import AllLinks from '../AllLinks.js';
import Game from './Game.js';
import constants from "../commons/Constants";

const HangMan = () => {
    const [gameId, setGameId] = useState(0);
    const [numberOfWins, setNumberOfWins] = useState(0);
    const [numberOfLosses, setNumberOfLosses] = useState(0);
    const [gameStatus, setGameStatus] = useState("firstGame"); // firstGame, won, lost, active, needNewWord

    const startNewGame = () => {
        setGameStatus("needNewWord");
        setGameId(gameId + 1);
    }

    return (
        <div style={{ margin: "45px" }}>
            <Game key={gameId}
                gameId={gameId}
                startNewGame={startNewGame}
                numberOfWins={numberOfWins}
                numberOfLosses={numberOfLosses}
                setNumberOfWins={() => setNumberOfWins(numberOfWins + 1)}
                setNumberOfLosses={() => setNumberOfLosses(numberOfLosses + 1)}
                gameStatus={gameStatus}
                setGameStatus={setGameStatus}
                gameTitle={constants.gameTitles["hangman"]}
            />
            <div className="game">
                <AllLinks />
            </div>
        </div>
    );
}

export default HangMan;