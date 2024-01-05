import LetterDisplay from "./LetterDisplay";
import Table from 'react-bootstrap/Table';

const LetterDisplayList = (props) => (
    <div className="body" style={{ margin: "15px" }}>
        <Table>
            <tbody>
                <tr>
                    {props.gameBoard.map((letter, index) => (
                        <LetterDisplay key={index} letter={letter} />
                    ))}
                </tr>
            </tbody>
        </Table>
    </div>
);

export default LetterDisplayList;