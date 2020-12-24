import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from "../ontario-design-system/lib/index";

function StartPage() {

    const history = useHistory();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [])

    return (
        <div className="container">
            <div className="ontario-row">
                <div className="ontario-columns">
                    <h1>Book an appointment at ServiceOntario</h1>
                    <p className="ontario-margin-bottom-16-!">You can book an appointment at specific ServiceOntario locations based on availability.</p>
                    <h2>What you need to know:</h2>
                    <ul>
                        <li>an appointment is 30 minutes long</li>
                        <li>you can book an appointment to do more than one service</li>
                        <li>the appointment can be for multiple individuals if they need the same service</li>
                        <li>you will need an email address or phone number to receive the appointment confirmation and reminder</li>
                        <li>oyu can tell us ahead of time if you will need any accommodation during your visit at our location</li>
                        <li>ensure the location is open and offers the service you need</li>
                    </ul>
                    <p className="ontario-margin-bottom-16-!"><strong>Form completion time: </strong> approximately 2 minutes</p>
                    <p><strong>Terms of use: </strong>By accessing this web app, you are agreeing to the terms of use. Therefore, we suggest that you review these <a>terms of use</a> carefully.</p>
                    <Button
                        className="ontario-margin-top-16-!"
                        data={{
                            id: "appointment",
                            text: "Book an appointment",
                            skin: "primary",
                        }}
                        onClickHandler={() => {
                            history.push("/select-service");
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default StartPage;