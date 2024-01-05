import React, { useState } from "react";

import MathUtils from "../commons/MathUtils.js";
import Scoreboard from "../commons/Scoreboard.js";
import GameDisplay from "./GameDisplay.js";

const allowedNumberOfMisses = 6;

const Game = (props) => {
    const [word, setWord] = useState([]);
    const [guesses, setGuesses] = useState([]);
    const [numMisses, setNumMisses] = useState(0);
    const [gameBoard, setGameBoard] = useState([]);

    const {
        gameId,
        gameStatus,
        setGameStatus,
        numberOfWins,
        numberOfLosses,
        setNumberOfWins,
        setNumberOfLosses,
        gameTitle,
        startNewGame
    } = props;

    const determinAndSetGameStatus = (updatedGameBoard, numMisses) => {

        const hasUserWon = MathUtils.compareWordWithGameBoard(word, updatedGameBoard);

        if (hasUserWon) {
            console.log("user won");
            setGameStatus('won');
            setNumberOfWins();

        } else if (numMisses === allowedNumberOfMisses) {
            console.log("user lost");
            setGameStatus('lost');
            setNumberOfLosses();

        } else {
            console.log("game is active");
            setGameStatus('active');
        }
    }

    const handleClick = (letter) => {

        if (gameStatus === "won"
            || gameStatus === "lost"
            || guesses.includes(letter)) {
            return;
        }

        const guess = letter.toLowerCase();
        let foundMatch = false;
        const updatedGameBoard = gameBoard;

        for (let i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                updatedGameBoard[i] = guess;
                foundMatch = true;
                console.log("found match");
            }
        }

        let currentNumMisses = numMisses;

        if (!foundMatch) {
            currentNumMisses = currentNumMisses + 1;
            setNumMisses(currentNumMisses);
        }

        setGuesses(guesses.concat(letter));
        setGameBoard(updatedGameBoard);
        determinAndSetGameStatus(updatedGameBoard, currentNumMisses);
    }

    return (
        <div className="game">
            <div className="help">
                {props.gameTitle}: Guess the word, {allowedNumberOfMisses} misses allowed.
            </div>

            <div className="body">
                <GameDisplay
                    gameStatus={gameStatus}
                    setWord={setWord}
                    setGameBoard={setGameBoard}
                    setGameStatus={setGameStatus}
                    handleClick={handleClick}
                    gameBoard={gameBoard}
                    guesses={guesses}
                    numMisses={numMisses}
                    startNewGame={startNewGame}
                    gameTitle={gameTitle}
                    word={word}
                />
            </div>

            <div className="body">
                <Scoreboard
                    gameId={gameId}
                    numberOfWins={numberOfWins}
                    numberOfLosses={numberOfLosses}
                    numberOfDraws={null}
                />
            </div>

            {/* // give a timelimit for a turn? */}
            {/* <GameTimer gameStatus={gameStatus} secondsLeft={secondsLeft} /> */}
        </div>
    );
};

export default Game;