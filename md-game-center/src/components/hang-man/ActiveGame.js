import LetterDisplayList from "./LetterDisplayList.js";
import GuessForm from "./GuessForm.js";

const ActiveGame = (props) => {

    return (
        <div style={{ margin: "15px" }}>
            <GuessForm onGuess={props.onGuess} />
            <br />
            <LetterDisplayList gameBoard={props.gameBoard} />
        </div>
    );
}

export default ActiveGame;