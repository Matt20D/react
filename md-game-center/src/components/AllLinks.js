// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";

import constants from "./commons/Constants";
import Table from 'react-bootstrap/Table';
import "../stylesheets/App.css";

const AllLinks = () => {
    return (
        <div className="body" style={{ marginTop: "20px" }}>
            <Table>
                <tbody>
                    <tr>
                        <td>
                            <Link to="/" style={{ marginTop: "20px" }}>Home</Link>
                        </td>
                        <td>
                            <Link to="/starmatch">{constants.gameTitles["starMatch"]}</Link>
                        </td>
                        <td>
                            <Link to="/tictactoe">{constants.gameTitles["ticTacToe"]}</Link>
                        </td>
                        <td>
                            <Link to="/hangman">{constants.gameTitles["hangman"]}</Link>
                        </td>
                        <td>
                            <Link to="/contactme">Contact Me</Link>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default AllLinks;