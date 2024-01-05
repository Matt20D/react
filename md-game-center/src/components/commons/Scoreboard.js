import constants from "./Constants";

const TrackDraw = (numberOfDraws, drawColor) => {
    return (
        <div className="right" style={{ color: drawColor }}>
            Number of draws: {numberOfDraws}
        </div>
    );
}

const Scoreboard = (props) => {

    const {
        gameId,
        numberOfWins,
        numberOfLosses,
        numberOfDraws
    } = props;

    const winsColor = constants.colorConversion["won"];
    const lossesColor = constants.colorConversion["lost"];
    const drawColor = constants.colorConversion["draw"];
    const numPlayTimes = constants.colorConversion["gamesCounter"];

    if (gameId !== 0) {
        return (
            <div className="body">
                <div className="right" style={{ color: winsColor }}>
                    Number of wins: {numberOfWins}
                </div>
                <div className="right" style={{ color: lossesColor }}>
                    Number of losses: {numberOfLosses}
                </div>
                {numberOfDraws !== null && TrackDraw(numberOfDraws, drawColor)}
                <div className="right" style={{ color: numPlayTimes }}>
                    Number of games played: {gameId}
                </div>
            </div>
        );
    }
}

export default Scoreboard;