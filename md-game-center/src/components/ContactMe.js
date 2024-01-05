import React from "react";
import AllLinks from "./AllLinks";

const ContactMe = () => {
    return (
        <>
            <header className="App-header">
                <div style={{ margin: "45px" }}>
                    <h1>Contact Matt Duran</h1>
                    <div style={{ margin: "5px", color: "white" }}>
                        <a href="mailto:mattduran2011@gmail.com?subject=Contact Matt Duran" style={{ color: "white" }}>
                            Send Feedback
                        </a>
                    </div>
                    <br />
                    <div style={{ margin: "5px" }}>
                        <a
                            href="https://mmduran.com/"
                            style={{ color: "white" }}
                            target="_blank" rel="noopener noreferrer"
                        >
                            Matt's Resume Website
                        </a>
                    </div>
                </div>
                <div style={{ margin: "45px" }} className="home-link">
                    <AllLinks />
                </div>
            </header>
        </>
    );
};

export default ContactMe;