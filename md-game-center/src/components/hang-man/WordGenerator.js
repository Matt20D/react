import { useEffect } from "react";

const guessDelimter = "*";

const fetchWordAsync = async () => {
    try {
        const response = await fetch("https://random-word-api.herokuapp.com/word", {
            method: "GET",
            // headers: {
            //     "X-RapidAPI-Key": "your-api-key",
            //     "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
            // },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data[0].toLowerCase();

    } catch (error) {
        console.error('Error:', error);
        console.log("using backup word so no crash");
        return "backup";
    }
}

const WordGenerator = (props) => {

    const {
        needNewWord,
        setWord,
        setGameBoard,
        setGameStatus
    } = props;

    useEffect(() => {
        if (needNewWord) {
            fetchWordAsync().then(
                fetchedWord => {
                    const fetchedWordCharArray = [...fetchedWord];
                    const newGameBoard = Array(fetchedWordCharArray.length).fill(guessDelimter);

                    console.log("fetched word from api: " + fetchedWord);
                    setWord(fetchedWordCharArray);
                    setGameBoard(newGameBoard);
                    setGameStatus("active");
                });
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

}

export default WordGenerator;