import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Button, Accordion } from "../ontario-design-system/lib/index";
import "../css/OtherStyles.css";
import ScrollToTop from "react-scroll-to-top";

function LocationSpecific({ setFirstType, setFirstSpecific, setCity, setSOLocation }) {
    const [location, setLocation] = useState('');
    const history = useHistory();

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
    const waitTimes = (
        <div className="accordion-content">
            <p>
                At this location, wait times are usually longer than 20 minutes. Try our online services to avoid lining up.
                <br></br><br></br>
                You must book an appointment to take a written driving test as this location is very busy.
            </p>
        </div>
    );
    const transit = (
        <div className="accordion-content">
            <ul>
                <li>Underground paid-parking available.</li>
                <li>Subway: College (Yonge Line)</li>
                <li>Streetcar: College streetcar</li>
            </ul>
        </div>
    );
    const amenities = (
        <div className="accordion-content">
            <ul>
                <li>Services offered in English and French</li>
            </ul>
        </div>
    );
    const accessibility = (
        <div className="accordion-content">
            <ul>
                <li>Accessible parking available</li>
                <li>Unobstructed route to office</li>
                <li>Accessible entrance</li>
                <li>Wheelchair and companion seating</li>
                <li>Lower level counter</li>
                <li>Active offer of assistance provided</li>
                <li>Sign language interpreter available upon request via email</li>
            </ul>
        </div>
    );

    const driversLicences = (
        <div className="accordion-content">

            <a>Get a driver's licence</a>
            <hr />
            <div className="ah">
                <a>Renew a driver's licence</a>
                <Button data={{
                    text: "Renew online",
                    skin: "secondary",
                }}
                />
            </div>
            <hr />
            <div className="ah">
                <a>Change address on a driver's licence</a>
                <Button data={{
                    text: "Change online",
                    skin: "secondary",
                }}
                />
            </div>
            <hr />
            <a>Replace a driver's licence</a>
            <hr />
            <a>Retake a driver's licence photo</a>
            <hr />
            <a>Change a driver's licence class</a>
            <hr />
            <a>Change a driver's licence endorsement</a>
            <hr />
            <div className="ah">
                <a>Reinstate a driver's licence</a>
                <Button data={{
                    text: "Reinstate online",
                    skin: "secondary",
                }}
                />
            </div>
            <hr />
            <div className="ah">
                <a>Pay defaulted driver fines</a>

                <Button data={{
                    text: "Pay online",
                    skin: "secondary",
                }}
                />
            </div>
            <hr />
            <p>Take a written test for a driver's licence</p>
            <hr />
            <a>Take a vision test (80 years and older)</a>
            <hr />
            <p>Renew or replace a driving instructor licence</p>
            <hr />
            <a>Change information on a driver's licence</a>
            <hr />
            <a>Convert an enhanced driver's licence to a regular driver's licence</a>
        </div>
    );
    const vehicles = (
        <div className="accordion-content">
            <a>Register a vehicle</a>
            <hr />
            <div className="ah">
                <a>Renew a licence plate sticker</a>
                <Button data={{
                    text: "Renew online",
                    skin: "secondary",
                }}
                />
            </div>
            <hr />
            <a>Replace a licence plate sticker</a>
            <hr />
            <a>Get a temporary licence plate sticker</a>
            <hr />
            <div className="ah">
                <a>Change address on a vehicle permit</a>
                <Button data={{
                    text: "Change online",
                    skin: "secondary",
                }}
                />
            </div>
            <hr />
            <a>Change name on a vehicle permit</a>
            <hr />
            <a>Change status of a vehicle permit</a>
            <hr />
            <a>Replace a vehicle permit</a>
            <hr />
            <a>Replace a licence plate</a>
            <hr />
            <a>Order a personalized licence plate</a>
            <hr />
            <a>Replace a personalized licence plate</a>
        </div>
    );

    const accessible = (
        <div className="accordion-content">
            <a>Get an accessible parking permit</a>
            <hr />
            <a>Change information on an accessible parking permit</a>
            <hr />
            <a>Renew or replace an accessible parking permit</a>
        </div>
    );
    const records = (
        <div className="accordion-content">
            <div className="ah">
                <a>Order driver's records</a>
                <Button data={{
                    text: "Order online",
                    skin: "secondary",
                }}
                />
            </div>
            <hr />
            <div className="ah">
                <a>Order a used vehicle information package</a>
                <Button data={{
                    text: "Order online",
                    skin: "secondary",
                }}
                />
            </div>
            <hr />
            <div className="ah">
                <a>Order a vehicle record</a>
                <Button data={{
                    text: "Order online",
                    skin: "secondary",
                }}
                />
            </div>
            <hr />
            <div className="ah">
                <a>Order the most recent owner abstract (uncertified)</a>
                <Button data={{
                    text: "Order online",
                    skin: "secondary",
                }}
                />
            </div>
            <hr />
            <a>Replace a licence plate sticker</a>
            <hr />
            <a>Get a temporary licence plate sticker</a>
            <hr />
            <div className="ah">
                <a>Change address on a vehicle permit</a>
                <Button data={{
                    text: "Change online",
                    skin: "secondary",
                }}
                />
            </div>
            <hr />
            <a>Get or renew a commercial vehicle operator record</a>
            <hr />
            <a>Order an off-road vehicle's history record</a>
            <hr />
            <a>Order a snow vehicle's history record</a>
        </div>
    );

    const ohip = (
        <div className="accordion-content">
            <a>Switch to a photo health card</a>
            <hr />
            <a>Apply for a health card</a>
            <hr />
            <div className="ah">
                <a>Renew a health card</a>
                <Button data={{
                    text: "Renew online",
                    skin: "secondary",
                }}
                />
            </div>
            <hr />
            <div className="ah">
                <a>Change address on a health card</a>
                <Button data={{
                    text: "Change online",
                    skin: "secondary",
                }}
                />
            </div>
            <hr />

            <a>Change the name on a health card</a>
            <hr />
            <a>Replace a health card</a>
            <hr />
            <a>Register to keep OHIP coverage while outside Canada</a>
            <hr />
            <a>Resume OHIP coverage after moving back to Ontario</a>
        </div>
    );
    const organ = (
        <div className="accordion-content">

            <div className="ah">
                <a>Register to be an organ and tissue donor</a>
                <Button data={{
                    text: "Register online",
                    skin: "secondary",
                }}
                />
            </div>

        </div>
    );

    const photo = (
        <div className="accordion-content">
            <a>Get or renew an Ontario photo card</a>
        </div>
    );
    const authentication = (
        <div className="accordion-content">
            <a>Commissioner of Oaths</a>
        </div>
    );
    const fishing = (
        <div className="accordion-content">
            <a>Change address on an Outdoors card</a>
            <hr />
            <a>Get or renew an Outdoors card</a>
            <hr />
            <a>Replace an Outdoors card</a>

        </div>
    );
    const housing = (
        <div className="accordion-content">
            <a>File an application with the Landlord and Tenant Board</a>

        </div>
    );

    const business = (
        <div className="accordion-content">

            <div className="ah">
                <a>Register a sole proprietorship/general partnership</a>
                <Button data={{
                    text: "Register online",
                    skin: "secondary",
                }}
                />
            </div>
            <hr />
            <div className="ah">
                <a>Register a trade/style/operating name for an existing corporation</a>
                <Button data={{
                    text: "Register online",
                    skin: "secondary",
                }}
                />
            </div>

        </div>
    );

    const corp = (
        <div className="accordion-content">
            <a>Request Articles of Dissolution - Form 10</a>
            <hr />
            <a>Request Articles of Dissolution - Form 11</a>
            <hr />
            <div className="ah">
                <a>Request Articles of Incorporation</a>
                <Button data={{
                    text: "Request online",
                    skin: "secondary",
                }}
                />
            </div>

        </div>
    );

    const taxes = (
        <div className="accordion-content">

            <div className="ah">
                <a>Pay corporations tax insurance premium</a>
                <Button data={{
                    text: "Pay online",
                    skin: "secondary",
                }}
                />
            </div>
            <hr />
            <div className="ah">
                <a>Pay employer health tax</a>
                <Button data={{
                    text: "Pay online",
                    skin: "secondary",
                }}
                />
            </div>
            <hr />
            <a>File an estate information return</a>
            <hr />
            <div className="ah">
                <a>Pay fuel tax</a>
                <Button data={{
                    text: "Pay online",
                    skin: "secondary",
                }}
                />
            </div>
            <hr /><div className="ah">
                <a>Pay land transfer tax</a>
                <Button data={{
                    text: "Pay online",
                    skin: "secondary",
                }}
                />
            </div>
            <hr />
            <div className="ah">
                <a>Pay mining tax</a>
                <Button data={{
                    text: "Pay online",
                    skin: "secondary",
                }}
                />
            </div>
            <hr />
            <a>Pay retail sales tax on a boat or used vehicle</a>
            <hr />
            <a>Pay retail sales tax on a boat or used vehicle</a>
            <hr />
            <div className="ah">
                <a>Register a retail sales tax insurance premium account</a>
                <Button data={{
                    text: "Pay online",
                    skin: "secondary",
                }}
                />
            </div>
            <hr />
            <div className="ah">
                <a>Pay retail sales tax insurance premium</a>
                <Button data={{
                    text: "Pay online",
                    skin: "secondary",
                }}
                />
            </div>
            <hr />
            <div className="ah">
                <a>Pay tobacco tax</a>
                <Button data={{
                    text: "Pay online",
                    skin: "secondary",
                }}
                />
            </div>
        </div>
    );

    function handleUpdate() {
        setCity("Toronto");
        setLocation('Bay and College (Toronto)');
        setSOLocation(
            {
                "id": 12043,
                "city": "Toronto",
                "url": "/locations/serviceontario/bay-and-college-toronto",
                "street": "777 Bay Street",
                "location_type": "SO_CNTR"
            }
        );
        history.push("/abs");
    }


    return (
        <div className="container">

            <div className="ontario-row">

                <div className="ontario-columns">
                    <ScrollToTop smooth color={'white'} style={{ backgroundColor: "#6e6e6e", }} />
                    <h1>Bay and College (Toronto)</h1>
                    <address style={{ fontFamily: "Open Sans" }}>
                        <strong>Located at: College Park Lower Level</strong>
                        <br></br> 777 Bay Street, Lower Level
                        <br></br> Toronto, Ontario M5G 2C8
                    </address>
                    <p><a href="https://www.google.com/maps/dir/?api=1&destination=ServiceOntario+777+Bay+Street+Lower+Level+Toronto+Ontario+M5G+2C8&hl=en&destination_place_id=ChIJnUz2uLU0K4gREa-a4K-bZ-A">Get directions</a></p>
                    <div className="large-hide">
                        <p><a href="#services-at-this-location">Services at this location</a></p>

                    </div>
                </div>
            </div>
            <div className="ontario-row" style={{ fontFamily: "Open Sans" }}>
                <div className="ontario-small-12 ontario-large-4 ontario-columns ontario-margin-bottom-12-!">
                    <div className="ontario-grid-spacing-escape lt-large">
                        <Accordion data={{
                            id: "hours",
                            openedByDefault: true,
                            title: "Hours",
                            content: schedule
                        }} />

                        <Accordion data={{
                            id: "wait-times",
                            title: "Wait times",
                            content: waitTimes
                        }} />
                        <Accordion data={{
                            id: "parking",
                            title: "Parking and transit",
                            content: transit
                        }} />
                        <Accordion data={{
                            id: "amenities",
                            title: "Amenities",
                            content: amenities
                        }} />
                        <Accordion data={{
                            id: "accessibility",
                            title: "Accessibility",
                            content: accessibility
                        }} />
                    </div>
                </div>
                <div className="ontario-small-12 ontario-large-8 ontario-columns ontario-margin-bottom-4-">
                    <br></br>
                    <h3 id="services-at-this-location">
                        Services at this location
                    </h3>
                    <div className="banner">
                        <div>
                            <h4>Before you visit</h4>
                        </div>
                        <div className="ontario-callout-column-holder">
                            <ul>
                                <li>find the service you need in the list below to confirm it is available here</li>
                                <li>click on the service to get details such as eligibility</li>
                                <li>choose the online option, if it is available, otherwise</li>
                                <li><a onClick={handleUpdate}>book an appointment to avoid line ups</a></li>
                            </ul>
                            {/* <Button data={{
                                id: "location-book",
                                text: "Book an appointment",
                                skin: "primary",
                            }}
                                onClickHandler={() => {
                                    setLocation('Bay and College (Toronto)');
                                    handleUpdate();
                                }}
                            /> */}
                        </div>
                    </div>
                    <div className="ontario-grid-spacing-escape lt-large " className=" ontario-margin-bottom-64-!">
                        <Accordion data={{
                            id: "drivers",
                            title: "Driver's licences",
                            content: driversLicences
                        }} />

                        <Accordion data={{
                            id: "vehicle",
                            title: "Vehicle permits, plates and stickers",
                            content: vehicles
                        }} />
                        <Accordion data={{
                            id: "accessible-permit",
                            title: "Accessible parking permit",
                            content: accessible
                        }} />
                        <Accordion data={{
                            id: "driver-record",
                            title: "Driver and vehicle records",
                            content: records
                        }} />
                        <Accordion data={{
                            id: "health-card",
                            title: "Health card and insurance (OHIP)",
                            content: ohip
                        }} />
                        <Accordion data={{
                            id: "organ",
                            title: "Organ and tissue donation",
                            content: organ
                        }} />
                        <Accordion data={{
                            id: "photo-card",
                            title: "Photo card",
                            content: photo
                        }} />
                        <Accordion data={{
                            id: "authentication",
                            title: "Authentication of documents",
                            content: authentication
                        }} />
                        <Accordion data={{
                            id: "fishing",
                            title: "Fishing, hunting and camping",
                            content: fishing
                        }} />
                        <Accordion data={{
                            id: "housing",
                            title: "Housing and property",
                            contnet: housing
                        }} />
                        <Accordion data={{
                            id: "business",
                            title: "Business registration",
                            content: business
                        }} />
                        <Accordion data={{
                            id: "corp",
                            title: "Corporation registration",
                            content: corp
                        }} />
                        <Accordion data={{
                            id: "taxes",
                            title: "Taxes",
                            content: taxes
                        }} />
                    </div>

                </div>

            </div>
        </div>
    );
}

export default LocationSpecific;