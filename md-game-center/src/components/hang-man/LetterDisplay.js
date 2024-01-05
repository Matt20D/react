const LetterDisplay = (props) => {

    const color = props.letter === "*" ? "DodgerBlue" : "green";

    return (
        <td style={{ color: color }}>{props.letter}</td>
    );

}

export default LetterDisplay;