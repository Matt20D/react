import constants from "./Constants";

const PlayFirstTime = (props) => {

    const firstPlayMessage = constants.messageConversion["firstGame"];
    const firstPlayColor = constants.colorConversion["firstGame"];

    return (
        <div className="game-done">
            <div
                className="message"
                style={{ color: firstPlayColor }}
            >
                {firstPlayMessage}
            </div>
            <button onClick={props.onClick}>Play {props.gameTitle}</button>
        </div>
    )
};

export default PlayFirstTime;