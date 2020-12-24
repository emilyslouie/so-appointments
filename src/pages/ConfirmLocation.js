import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import BackButton from '../components/Back';
import "../css/OtherStyles.css";
import { Button } from "../ontario-design-system/lib/index";
import SOImage from '../images/777Bay.jpg';

import ProgressBar from '../components/ProgressBar';

function ConfirmLocation({ soLocation }) {
    let history = useHistory();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    const hours = (
        <table className="hours" style={{ marginBottom: '2vh', maxWidth: '500px' }} >
            <tbody>
                <tr>
                    <th >Monday</th>
                    <td style={{ textAlign: 'right' }} >8:30 a.m. to 5:00p.m.</td>
                </tr>
                <tr>
                    <th >Tuesday</th>
                    <td style={{ textAlign: 'right' }} >8:30 a.m. to 5:00p.m.</td>
                </tr>
                <tr>
                    <th >Wednesday</th>
                    <td style={{ textAlign: 'right' }} >8:30 a.m. to 5:00p.m.</td>
                </tr>
                <tr>
                    <th >Thursday</th>
                    <td style={{ textAlign: 'right' }} >8:30 a.m. to 5:00p.m.</td>
                </tr>
                <tr>
                    <th >Friday</th>
                    <td style={{ textAlign: 'right' }} >8:30 a.m. to 5:00p.m.</td>
                </tr>
                <tr >
                    <th >Saturday</th>
                    <td style={{ textAlign: 'right' }} >closed</td>
                </tr>
                <tr>
                    <th >Sunday</th>
                    <td style={{ textAlign: 'right' }} >closed</td>
                </tr>
                <tr>
                    <th></th>
                </tr>
            </tbody>
        </table>
    )

    return (
        <div className="container">
            <div className="ontario-row">
                <div className="ontario-columns ontario-margin-bottom-32-!" >
                    <BackButton path={"/select-so-location"} />
                    <ProgressBar percent={33} step={2} phrase={"Select location"} />
                    <ScrollToTop smooth color={'white'} style={{ backgroundColor: "#6e6e6e" }} />
                    <h1>Confirm location</h1>
                    <strong><a
                        href={'https://ontario.ca' + soLocation.url}
                        target="_blank"
                        style={{ textTransform: 'capitalize', textDecoration: 'none' }}
                    >
                        {soLocation.url.substring(26, (soLocation.url.length - soLocation.city.length)).split('-').join(' ')} ({soLocation.city})
                    </a></strong><br /><br />
                    <p>{soLocation.street}</p>
                    <p>{soLocation.city}, Ontario</p><br />
                    <img src={SOImage} alt="Service Ontario Image" style={{ width: '93vw', maxWidth: '500px', marginBottom: '5vh' }} />
                    <h2>Hours</h2>
                    {hours}
                    <div style={{ display: 'flex', flexDirection: 'row' }} >
                        <Button data={{
                            id: "toggle-location-view",
                            text: "Confirm location",
                            skin: "primary",
                        }}
                            onClickHandler={() => {
                                history.push("/group-size");
                            }}
                        /><br />
                        <div style={{ width: '1rem' }} />
                        <Button
                            data={{
                                id: "toggle-location-view",
                                text: "Change location",
                                skin: "secondary",
                            }}
                            onClickHandler={() => {
                                history.push("/select-location");
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmLocation;