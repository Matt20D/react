import constants from "./Constants";

const PlayAgain = props => {

    const messageColor = constants.colorConversion[props.gameStatus];

    const message = constants.messageConversion[props.gameStatus];

    return (
        <div className="game-done">
            <div
                className="message"
                style={{ color: messageColor }}
            >
                {message}
            </div>
            <button onClick={props.onClick}>Play {props.gameTitle} Again</button>
        </div>
    )
};

export default PlayAgain;