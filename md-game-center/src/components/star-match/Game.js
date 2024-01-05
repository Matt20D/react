import React, { useState, useEffect } from "react";
import MathUtils from "../commons/MathUtils.js";
import StarsDisplay from "./StarsDisplay.js";
import PlayAgain from "../commons/PlayAgain.js";
import PlayFirstTime from "../commons/PlayFirstTime.js";
import PlayNumber from "./PlayNumber.js";
import Scoreboard from "../commons/Scoreboard.js";
import GameTimer from "./GameTimer.js";

// Custom hook: this will be a stateful component
// Convention is to prefix the fun with `use`
// this custom hook manages and transacting the state and sideeffects, and exposes it to transact on the state
const useGameState = () => {
    // logic to get and set state
    const [stars, setStars] = useState(MathUtils.random(1, 9));
    const [availableNums, setAvailableNums] = useState(MathUtils.range(1, 9));
    const [candidateNums, setCandidateNums] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(10);

    // when we introduce an effect, lets ensure that we are actually going to clean it up
    // via a callback.
    useEffect(() => {
        if (secondsLeft > 0 && availableNums.length > 0) {
            const timerId = setTimeout(() => {
                setSecondsLeft(secondsLeft - 1);
            }, 1000);

            // need to clean up after the effect.
            // lets introduce a cleanup the side-effect
            return () => clearTimeout(timerId);
        }
    });

    const setGameState = (newCandidateNums) => {
        if (MathUtils.sum(newCandidateNums) !== stars) {
            setCandidateNums(newCandidateNums);
        } else {
            const newAvailableNums = availableNums.filter(
                n => !newCandidateNums.includes(n)
            );
            // redraw stars from numbers that are playable
            setStars(MathUtils.randomSumIn(newAvailableNums, 9));
            setAvailableNums(newAvailableNums);
            setCandidateNums([]);
        }
    }

    return {
        stars,
        availableNums,
        candidateNums,
        secondsLeft,
        setGameState
    };
}

// react hooks
// React.useState
// React.useEffect

// want to minimize the amount of state that we utilize
// mock data is always nice to use.
const Game = (props) => {
    const {
        stars,
        availableNums,
        candidateNums,
        secondsLeft,
        setGameState
    } = useGameState();

    const {
        setNumberOfWins,
        setNumberOfLosses
    } = props;

    // computations based on state
    const candidatesAreWrong = MathUtils.sum(candidateNums) > stars;
    const gameStatus =
        props.gameId === 0 ?
            'firstGame'
            : availableNums.length === 0
                ? 'won'
                : secondsLeft === 0 ? 'lost' : 'active';

    useEffect(() => {
        if (gameStatus === 'won') {
            setNumberOfWins();

        } else if (gameStatus === 'lost') {
            setNumberOfLosses();
        }
    }, [gameStatus]) // eslint-disable-line react-hooks/exhaustive-deps

    const numberStatus = (number) => {
        if (!availableNums.includes(number)) {
            return 'used';
        }
        if (candidateNums.includes(number)) {
            return candidatesAreWrong ? 'wrong' : 'candidate';
        }
        return 'available';
    };

    const onNumberClick = (number, currentStatus) => {

        if (gameStatus !== 'active' || currentStatus === 'used') {
            return;
        }

        const newCandidateNums =
            currentStatus === 'available'
                ? candidateNums.concat(number)
                : candidateNums.filter(cn => cn !== number);

        setGameState(newCandidateNums);
    }

    // description of the UI based on the state && the computation of the state within the UI
    return (
        <div className="game">
            <div className="help">
                {props.gameTitle}: Pick 1 or more numbers that sum to the number of stars.
            </div>
            <div className="body">
                <div className="left">
                    {gameStatus === 'firstGame' ?
                        <PlayFirstTime onClick={props.startNewGame} gameTitle={props.gameTitle} />
                        : gameStatus !== 'active' ?
                            <PlayAgain
                                onClick={props.startNewGame}
                                gameStatus={gameStatus}
                                gameTitle={props.gameTitle} /> :
                            <StarsDisplay count={stars} />
                    }

                </div>
                <div className="right">
                    {MathUtils.range(1, 9).map(number =>
                        <PlayNumber
                            key={number}
                            status={numberStatus(number)}
                            number={number}
                            onClick={onNumberClick}
                        />
                    )}
                </div>
            </div>
            <Scoreboard
                gameId={props.gameId}
                numberOfWins={props.numberOfWins}
                numberOfLosses={props.numberOfLosses}
                numberOfDraws={null}
            />
            <GameTimer gameStatus={gameStatus} secondsLeft={secondsLeft} />
        </div>
    );
};

export default Game;