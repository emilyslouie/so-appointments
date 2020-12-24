import React, { useState, useEffect } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { useHistory } from 'react-router-dom';

import Calendar from '../components/DatePicker'
import { Button, Label, Hint } from "../ontario-design-system/lib/index";
import ProgressBar from '../components/ProgressBar';
import BackButton from '../components/Back';
import editIcon from '../ontario-design-system/icons/svg/ontario-icon-edit.svg';


function SelectDate({ soLocation, setTime, setDate, date, groupSize, groupService, service }) {
    const [timeSelected, setTimeSelected] = useState(false);

    const mediaMatch = window.matchMedia('(min-width: 500px)');
    const [matches, setMatches] = useState(mediaMatch.matches);

    let estimatedTime = 0;
    if (groupService) {
        Object.values(groupSize).forEach(function (element) {
            if (element.size > 1) {
                estimatedTime += 15 * (element.size + 1);
            }
            else {
                estimatedTime += 15;
            }
        })
        // estimatedTime = (groupSize * 15) * service.length;
    } else if (!groupService) {
        estimatedTime = 15 * service.length;
    }

    let history = useHistory();

    let todaysDate = new Date();
    todaysDate.setDate(todaysDate.getDate() + 1);

    function onClickHandler() {
        if (timeSelected) {
            history.push('/contact-information')
        }
    }
    useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addListener(handler);

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        return () => mediaMatch.removeListener(handler);
    }, []);

    const divStyles = {
        container: isRowBased => ({
            display: 'flex',
            flexDirection: isRowBased ? 'row' : 'column'
        })
    }

    const timeOptions = (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            <div style={divStyles.container(matches)} >
                <div style={divStyles.container(!matches)} >
                    <Button data={{
                        id: "toggle-location-view",
                        text: "9:00 AM",
                        skin: "secondary",
                    }}
                        onClickHandler={() => {
                            setTimeSelected(true);
                            setTime("1300",);
                        }}
                    />
                    <div style={{ width: '1rem' }} ></div>
                    <Button data={{
                        id: "toggle-location-view",
                        text: "10:15 AM",
                        skin: "secondary",
                    }}
                        onClickHandler={() => {
                            setTimeSelected(true);
                            setTime("1415");
                        }}
                    />
                </div>
            </div>
            <div style={divStyles.container(matches)} >
                <div style={divStyles.container(!matches)} >
                    <Button data={{
                        id: "toggle-location-view",
                        text: "11:30 AM",
                        skin: "secondary",
                    }}
                        onClickHandler={() => {
                            setTimeSelected(true);
                            setTime("1530");
                        }}
                    />
                    <div style={{ width: '1rem' }} ></div>
                    <Button data={{
                        id: "toggle-location-view",
                        text: "1:00 PM",
                        skin: "secondary",
                    }}
                        onClickHandler={() => {
                            setTimeSelected(true);
                            setTime("1700");
                        }}
                    />
                </div>
            </div>
            <div style={divStyles.container(matches)} >
                <div style={divStyles.container(!matches)} >
                    <Button data={{
                        id: "toggle-location-view",
                        text: "1:15 PM",
                        skin: "secondary",
                    }}
                        onClickHandler={() => {
                            setTimeSelected(true);
                            setTime("1715");
                        }}
                    />
                    <div style={{ width: '1rem' }} ></div>
                    <Button data={{
                        id: "toggle-location-view",
                        text: "3:30 PM",
                        skin: "secondary",
                    }}
                        onClickHandler={() => {
                            setTimeSelected(true);
                            setTime("1930");
                        }}
                    />
                </div>
            </div>
        </div>
    )

    let selectDateLabel = <p>Select a date <span class="ontario-label__flag">(required)</span></p>
    let locationSelectedLabel = <h3>Location selected: <span className="pseudolink">(<img className="iconlink" src={editIcon} /> <a href="#" className="ontario-link">Edit</a>)</span></h3>

    let selectTime = timeOptions;

    let styles = {};
    let classes = "ontario-button";

    if (date == null) {
        selectTime = <p><strong>Please select a date first.</strong></p>
    }

    if (!timeSelected) {
        styles = {
            backgroundColor: '#BDBDBD',
            color: 'white',
            cursor: 'not-allowed',
            marginTop: '3vh'
        }
    } else if (timeSelected) {
        styles = { marginTop: '3vh' };
        classes = "ontario-button ontario-button--primary";
    }

    return (
        <div className="container" style={{ marginBottom: 100 }}>
            <div className="ontario-row">
                <div className="ontario-columns">
                    <BackButton path={"/group-size"} />
                    <ProgressBar percent={66} step={4} phrase={"Select a date and time"} />
                    <ScrollToTop smooth color={'white'} style={{ backgroundColor: "#6e6e6e", }} />
                    <h1>Select a date and time</h1>
                    <Label
                        data={{
                            text: locationSelectedLabel
                        }} />
                    <p style={{ textTransform: 'capitalize', marginBottom: '2vh' }} >{soLocation.url.substring(26, (soLocation.url.length - soLocation.city.length)).split('-').join(' ')} ({soLocation.city})</p>
                    <div className="ontario-form-group">
                        <Label
                            data={{
                                text: selectDateLabel
                            }} />
                        <Hint data={{
                            hintText: "Date format: yyyy-mm-dd"
                        }} />
                    </div>
                    <div className="ontario-margin-bottom-16-!" style={{ width: '50vw' }} >
                        <Calendar setDate={setDate} />
                    </div>
                    <Label
                        data={{
                            text: "Select an available time",
                            flag: "(required)"
                        }} />
                    <p className="ontario-margin-bottom-16-!">Appointment duration: {estimatedTime} minutes</p>
                    {selectTime}
                    <a class={classes} style={styles} onClick={() => onClickHandler()}>
                        Next
                    </a>
                </div>
            </div>
        </div>

    );
}

export default SelectDate;