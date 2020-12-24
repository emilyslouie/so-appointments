import React, { useEffect } from 'react';
import ScrollToTop from 'react-scroll-to-top';

import "../css/OtherStyles.css";
import { Button } from "../ontario-design-system/lib/index";
import Callout from '../ontario-design-system/lib/components/Callout/Callout';
import WhatToBring from '../components/WhatToBring';

function Success({ email, services, soLocation, date, time }) {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [])

    function getEndTime(startTime) {
        let result = "";
        let num = 0;
        let number = 0;
        let removeZero = false;
        if (startTime.charAt(0) === "0") {
            number = parseInt(startTime, 10);
            removeZero = true;
        }
        else {
            number = parseInt(startTime);
        }
        let modifiedNum = number % 100;
        modifiedNum += 30;
        if (modifiedNum >= 60) {
            modifiedNum %= 60;
            number /= 100;
            number = parseInt(number, 10);
            number += 1;
            number *= 100;
            num = number + modifiedNum;
        }
        else {
            number /= 100;
            number = parseInt(number, 10);
            number *= 100;
            num = number + modifiedNum;
        }
        result = num.toString();
        if (removeZero === true) {
            result = "0" + result;
        }
        return result;
    }

    function convertDateGoogle(date, time) {
        let result = "";
        let temp = date.toISOString().substring(0, 10);
        let arr = temp.split("-");
        for (let i = 0; i < arr.length; i++) {
            result += arr[i];
        }
        result = result + "T" + time;
        return result;
    }

    function convertToReadableTime(time) {
        let result = "";
        let pm = false;
        let temp = parseInt(time, 10);
        let big = temp / 100;
        big = parseInt(big, 10);
        big -= 4;
        if (big > 12) {
            big %= 12;
            pm = true;
        }
        let small = temp % 100;
        result = big + ":" + small;
        if (pm === true) {
            result += " PM";
        }
        else {
            result += " AM";
        }
        return result;
    }

    function convertToICSTime(time) {
        let result = "";
        let temp = time.split(":");
        let end = temp[1].split(" ");
        result = temp[0] + "%3A" + end[0] + "+" + end[1];
        return result;
    }

    function convertDateICS(date, time) {
        let result = "";
        let arr = [];
        let temp = date.toString().substr(3, 12);
        arr = temp.split(" ");
        result = arr[0] + "+" + arr[1] + "%2C+" + arr[2];

        let icsStartTime = convertToICSTime(convertToReadableTime(time));
        let icsEndTime = convertToICSTime(convertToReadableTime(getEndTime(time)));

        result = result + "&st=" + icsStartTime + "&ed=" + result + "&et=" + icsEndTime;

        return result;
    }

    let googleStart = convertDateGoogle(date, time);
    let googleEnd = convertDateGoogle(date, getEndTime(time));
    let icsDateAndTime = convertDateICS(date, time);

    const successMessage = "An email confirmation has been sent to: " + email;
    const data = {
        type: "success",
        title: "Success! Your appointment has been booked.",
        message: successMessage
    }

    return (
        <div className="container">
            <div className="ontario-row ontario-margin-bottom-64-!">
                <div className="ontario-columns">
                    <ScrollToTop smooth color={'white'} style={{ backgroundColor: "#6e6e6e", }} />
                    <Callout className="success ontario-margin-bottom-24-!" data={data}  >
                        <h1>Success!</h1>
                    </Callout>

                    <div className="ontario-columns ontario-medium-4">
                        <Button data={{
                            id: "google-calendar",
                            text: "Add to Google Calendar",
                            skin: "secondary",
                        }}
                            onClickHandler={() => {
                                window.location = `http://www.google.com/calendar/event?action=TEMPLATE&dates=${googleStart}00Z%2F${googleEnd}00Z&text=Appointment%20at%20ServiceOntario&location=${soLocation.street}`
                            }}
                        />
                    </div>
                    <div className="ontario-columns ontario-medium-4">
                        <Button data={{
                            id: "outlook-calendar",
                            text: "Add to Outlook Calendar",
                            skin: "secondary",
                        }}
                            onClickHandler={() => {
                                window.location = `http://icalgen.yc.sg/?sub=Appointment+at+ServiceOntario&det=Please+arrive+5+-+15+minutes+prior+to+your+appointment+time&tz=EST&allday=false&sd=${icsDateAndTime}&venue=${soLocation.street}&isub=true&idt=true&iv=true&dl=1`
                            }}
                        />
                    </div>
                    <div className="ontario-columns ontario-medium-4">
                        <Button data={{
                            id: "apple-calendar",
                            text: "Add to Apple Calendar",
                            skin: "secondary",
                        }}
                            onClickHandler={() => {
                                window.location = `http://icalgen.yc.sg/?sub=Appointment+at+ServiceOntario&det=Please+arrive+5+-+15+minutes+prior+to+your+appointment+time&tz=EST&allday=false&sd=${icsDateAndTime}&venue=${soLocation.street}&isub=true&idt=true&iv=true&dl=1`
                            }}
                        />
                    </div>
                    <p className="ontario-margin-bottom-24-!">Please contact us by email at <a>accessibility@ontario.ca</a> for other accessibility requests not indicated in the appointment booking. </p>
                    <h2>What to bring with you:</h2>
                    {services.map(s => (<WhatToBring heading={s.label} items={s.documents} />))}
                    <h2>When you arrive:</h2>
                    <p>Please proceed to a service desk upon arrival. A customer representative will assist you with your appointment.</p><br />
                    <p className="ontario-margin-bottom-24-!">Please note that due to the potential high volume of walk-in customers, <strong>we may not be able to serve you at the exact time of the appointment</strong>. However, we will prioritize your appointment when possible.</p>
                    <h4>Thank you for booking an appointment with us.</h4>
                </div>
            </div>
        </div>
    );
}

export default Success;