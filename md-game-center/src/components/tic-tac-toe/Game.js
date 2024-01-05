import React, { useState, useEffect } from "react";
import PlaySquare from "./PlaySquare.js";
import MathUtils from "../commons/MathUtils.js";
import PlayAgain from "../commons/PlayAgain.js";
import PlayFirstTime from "../commons/PlayFirstTime.js";
import Scoreboard from "../commons/Scoreboard.js";

const squareStatus = (squareId, gameBoard) => {
    if (gameBoard[squareId] === 1) {
        return 'usedByUser';
    }

    if (gameBoard[squareId] === -1) {
        return 'usedByComputer';
    }

    return 'available';
};


const useGameState = (props) => {
    const [availableSquares, setAvailableSquares] = useState(MathUtils.range(0, 8));
    const [gameBoard, setGameBoard] = useState(Array.apply(null, Array(9)).map(Number.prototype.valueOf, 0));
    const [isUser, setIsUser] = useState(MathUtils.randomStartingUser);

    const {
        gameStatus,
        setGameStatus
    } = props;

    const determinAndSetGameStatus = (updatedGameBoard, updatedAvailableSquares) => {
        const userTicTacToeDetails = MathUtils.isTicTacToeOver(updatedGameBoard, 1);
        const computerTicTacToeDetails = MathUtils.isTicTacToeOver(updatedGameBoard, -1);

        const hasUserWon = userTicTacToeDetails["hasWon"];
        const hasComputerWon = computerTicTacToeDetails["hasWon"];

        if (hasUserWon) {
            setGameStatus('won');
        }

        else if (hasComputerWon) {
            setGameStatus('lost');
        }

        else if (updatedAvailableSquares.length === 0) {
            setGameStatus('draw');
        }

        else {
            setGameStatus('active');
        }
    }

    const setGameState = (squareId, isUserTurn) => {
        const updatedGameBoard = [...gameBoard];

        if (isUserTurn) {
            updatedGameBoard[squareId] = 1;
        } else {
            updatedGameBoard[squareId] = -1;
        }

        const sortedAvailableSquaresArr =
            availableSquares.filter(cn => cn !== squareId).sort((a, b) => { return a - b });
        setAvailableSquares(sortedAvailableSquaresArr);

        setGameBoard(updatedGameBoard);
        determinAndSetGameStatus(updatedGameBoard, sortedAvailableSquaresArr);
        setIsUser(!isUser);
    }

    return { gameStatus, setGameState, isUser, availableSquares, gameBoard }
}

const Game = (props) => {

    const {
        gameStatus,
        setGameState,
        isUser,
        availableSquares,
        gameBoard
    } = useGameState(props);

    const {
        setNumberOfWins,
        setNumberOfLosses,
        setNumberOfDraws,
        startNewGame
    } = props;

    const onSquareClick = (squareId, currentStatus, isUserTurn) => {

        // disallow pressing the button
        if (gameStatus !== 'active' || currentStatus !== 'available') {
            return;
        }

        isUserTurn ? setGameState(squareId, true) : setGameState(squareId, false);

    }

    // when we introduce an effect, lets ensure that we are actually going to clean it up
    // via a callback.
    useEffect(() => {
        if (!isUser && gameStatus === 'active') {

            const squareId = MathUtils.computerRandomGridChoice(availableSquares);
            const timerId = setTimeout(() => {
                setGameState(squareId, false);
            }, 1000);

            // need to clean up after the effect.
            // lets introduce a cleanup the side-effect
            return () => clearTimeout(timerId);
        }
    });

    useEffect(() => {
        if (gameStatus === 'won') {
            setNumberOfWins();

        } else if (gameStatus === 'lost') {
            setNumberOfLosses();

        } else if (gameStatus === 'draw') {
            setNumberOfDraws();
        }

    }, [gameStatus]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="game">
            <div className="help">
                {props.gameTitle}: First to three in a row wins, otherwise draw. Computer randomly chooses.
            </div>
            <div className="body">
                <div className="left">
                    {gameStatus === 'firstGame' ?
                        <PlayFirstTime onClick={startNewGame} gameTitle={props.gameTitle} /> :
                        gameStatus !== 'active' ?
                            <PlayAgain
                                onClick={props.startNewGame}
                                gameStatus={gameStatus}
                                gameTitle={props.gameTitle} /> :
                            <div>
                                <p>turn: {isUser ? "user" : "computer"} </p>
                            </div>
                    }

                </div>
                <div className="right">
                    {MathUtils.range(0, 8).map(squareId =>
                        <PlaySquare
                            key={squareId}
                            status={squareStatus(squareId, gameBoard)}
                            squareId={squareId}
                            onClick={onSquareClick}
                            isUserTurn={isUser}
                        />
                    )}
                </div>
            </div>
            <Scoreboard
                gameId={props.gameId}
                numberOfWins={props.numberOfWins}
                numberOfLosses={props.numberOfLosses}
                numberOfDraws={props.numberOfDraws}
            />
        </div>
    );
}

export default Game;