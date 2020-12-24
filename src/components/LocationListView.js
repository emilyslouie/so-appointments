import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from "../ontario-design-system/lib/index";
import locationsJson from '../shared/so-locations.json';
import ModifiedAccordion from '../components/ModifiedAccordion';

function ListView({ letter, setSOLocation, publicService }) {
    const history = useHistory();

    let allLocations = [];
    locationsJson.result.pageContext.locations.map(location => (allLocations.push(location)));

    let specifiedLocations = [];
    allLocations.map(so => {
        if (so.city.charAt(0) === letter) {
            if (publicService && so.location_type === "SO_CNTR") {
                specifiedLocations.push(so);
            } else if (!publicService) {
                specifiedLocations.push(so);
            }
        }
    });

    let otherInfo = [];
    locationsJson.result.pageContext.availabilityList.map(pc => (otherInfo.push(pc)));

    const schedule = (
        <div className="accordion-content">
            <table className="hours">
                <tbody>
                    <tr>
                        <th>Monday</th>
                        <td>8:30 a.m. to 5:00p.m.</td>
                    </tr>
                    <tr>
                        <th>Tuesday</th>
                        <td>8:30 a.m. to 5:00p.m.</td>
                    </tr>
                    <tr>
                        <th>Wednesday</th>
                        <td>8:30 a.m. to 5:00p.m.</td>
                    </tr>
                    <tr>
                        <th>Thursday</th>
                        <td>8:30 a.m. to 5:00p.m.</td>
                    </tr>
                    <tr>
                        <th>Friday</th>
                        <td>8:30 a.m. to 5:00p.m.</td>
                    </tr>
                    <tr>
                        <th>Saturday</th>
                        <td>closed</td>
                    </tr>
                    <tr>
                        <th>Sunday</th>
                        <td>closed</td>
                    </tr>
                    <tr>
                        <th></th>
                    </tr>
                </tbody>
            </table>
        </div>
    );

    const list = (

        specifiedLocations.map(location => (
            <div className="ontario-margin-bottom-24-!" key={Math.random().toString()} >
                <h4><a
                    href={'https://ontario.ca' + location.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'capitalize' }}
                >
                    {location.url.substring(26, (location.url.length - location.city.length)).split('-').join(' ')} ({location.city})
            </a></h4>
                <p>{location.street}</p>
                <p>{location.city}, Ontario</p><br />
                <ModifiedAccordion data={{
                    id: "hours",
                    openedByDefault: false,
                    title: "Hours",
                    content: schedule
                }} />
                <Button data={{
                    id: "select-so-location",
                    text: "Select this location",
                    skin: "primary",
                }}
                    onClickHandler={() => {
                        setSOLocation(location);
                        history.push("/confirm-location");
                    }}
                />
                <hr />
            </div>))
    );

    return (list);
}

export default ListView;