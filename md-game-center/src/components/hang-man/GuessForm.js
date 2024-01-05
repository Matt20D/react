import { useState } from "react";

const GuessForm = (props) => {
    const [guess, setGuess] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onGuess(guess);
        event.target.reset();
    };

    return (
        <div className="body" style={{ margin: "15px" }}>
            <form onSubmit={handleSubmit}>
                Guess Letter:
                <input
                    type="text"
                    onChange={event => setGuess(event.target.value)}
                    placeholder="Your Guess"
                    maxLength="1"
                    required />
            </form>
        </div>
    );
}

export default GuessForm;