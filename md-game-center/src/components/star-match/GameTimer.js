const GameTimer = (props) => {

    if (props.gameStatus !== 'firstGame') {
        return <div className="timer"> Time Remaining: {props.secondsLeft}</div>;
    }
}

export default GameTimer;