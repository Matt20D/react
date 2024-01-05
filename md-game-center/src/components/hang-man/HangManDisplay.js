import phases from "./images/HangmanPhases.js";

const HangManDisplay = (props) => {
    const {
        numMisses,
        guesses
    } = props;

    const hangManPhase = () => {
        switch (numMisses) {
            case 1:
                return <div><pre>{phases[1]}</pre></div>;
            case 2:
                return <div><pre>{phases[2]}</pre></div>;
            case 3:
                return <div><pre>{phases[3]}</pre></div>;
            case 4:
                return <div><pre>{phases[4]}</pre></div>;
            case 5:
                return <div><pre>{phases[5]}</pre></div>;
            case 6:
                return <div><pre>{phases[6]}</pre></div>;
            default:
                return <div><pre>{phases[0]}</pre></div>;
        }
    }

    return (
        <>
            <div style={{ margin: "15px" }}>
                <p style={{ color: "DodgerBlue" }}>Guesses = {guesses.toString()}</p>
            </div>
            <div style={{ margin: "15px" }}>
                {hangManPhase()}
            </div>
        </>
    );
}

export default HangManDisplay;