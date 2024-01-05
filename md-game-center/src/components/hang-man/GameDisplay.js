import WordGenerator from "./WordGenerator.js";
import ActiveGame from "./ActiveGame.js";
import PlayFirstTime from "../commons/PlayFirstTime.js";
import PlayAgain from "../commons/PlayAgain.js";
import constants from "../commons/Constants";
import HangManDisplay from "./HangManDisplay.js";

const GameDisplay = (props) => {

    const {
        gameStatus,
        setWord,
        setGameBoard,
        setGameStatus,
        handleClick,
        gameBoard,
        guesses,
        numMisses,
        startNewGame,
        gameTitle,
        word
    } = props;

    const firstGameHTML = () => {
        return (
            <PlayFirstTime onClick={startNewGame} gameTitle={gameTitle} />
        );
    }

    const playAgainHTML = () => {
        return (
            <>
                <PlayAgain onClick={startNewGame} gameStatus={gameStatus} gameTitle={gameTitle} />
                <p style={{ color: constants.colorConversion[gameStatus] }}>Word: {word}</p>
            </>
        );
    }

    const activeGameHTML = () => {
        return <ActiveGame onGuess={handleClick} gameBoard={gameBoard} />;
    }

    const controlDisplay = () => {
        switch (gameStatus) {
            case "active":
                return activeGameHTML();

            case "needNewWord":
                return <WordGenerator
                    needNewWord={gameStatus === "needNewWord"}
                    setWord={setWord}
                    setGameBoard={setGameBoard}
                    setGameStatus={setGameStatus}
                />

            case "firstGame":
                return firstGameHTML();

            case "won":
            case "lost": return playAgainHTML();

            default: return <></>;
        }
    }

    return (
        <>
            <div className="left">
                {controlDisplay()}
            </div>

            <div className="right">
                <HangManDisplay guesses={guesses} numMisses={numMisses} />
            </div>
        </>
    );
};

export default GameDisplay;