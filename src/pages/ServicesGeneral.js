import React from 'react'
import { useHistory } from "react-router-dom";
import { Button } from "../ontario-design-system/lib/index";
import "../css/OtherStyles.css";
import ScrollToTop from "react-scroll-to-top";

function ServicesGeneral({ setFirstType, setFirstSpecific }) {
    const history = useHistory();

    function handleUpdate() {
        setFirstType("");
        setFirstSpecific("");
        history.push("/abs");
    }

    return (
        <div className="container">
            <div className="ontario-row  ontario-margin-bottom-8-!">
                <div className="ontario-columns">
                    <ScrollToTop smooth color={'white'} style={{ backgroundColor: "#6e6e6e", }} />
                    <p className="ontario-lead-statement ontario-margin-bottom-32-!" style={{ fontFamily: "Open Sans" }}>
                        Driver’s licences, plate stickers, health cards, birth certificates and other services provided by the Ontario government.
                     </p>
                </div>
                <div class="ontario-columns">
                    <hr />
                </div>
            </div>
            <div className="ontario-row  ontario-margin-bottom-8-!">
                <div className="ontario-columns">
                    <div className="banner3 ontario-margin-bottom-16-!">
                        <div class="ontario-callout-column-holder">
                            <h2>Service changes due to COVID-19 (coronavirus)</h2>
                            We urge you not to visit ServiceOntario unless absolutely necessary. <br /><br />
                            Some ServiceOntario locations are closed and others are operating with reduced hours. <a onClick={handleUpdate}>Find out which locations are open and book an appointment before you visit.</a> <br /><br />
                            <a>Learn about the ServiceOntario COVID-19 (coronavirus) response.</a>
                        </div>
                    </div>
                </div>
                <div class="ontario-columns">
                    <hr />
                </div>
            </div>
            <div className="ontario-row  ontario-margin-bottom-8-!">
                <div className="ontario-columns ontario-large-4">
                    <h4>Drivers</h4>
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">First-time driver: get a licence</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Renew a driver's licence</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Renew a driver’s licence: 80 years and over</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Renew a driver’s licence: outside Ontario</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Pay defaulted driver fines </a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Change address: driver’s licence</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Replace a lost, stolen or damaged driver’s licence</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Exchange out-of-province or out-of-country driver’s licence</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Driver records</a><br />

                </div>
                <div className="ontario-columns ontario-large-4">
                    <h4>Vehicles</h4>
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Buy/sell a used vehicle</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Register a farm vehicle</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Licence plate sticker renewal</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Licence plate sticker renewal: outside Ontario</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Temporary licence plate sticker</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Used vehicle information package (UVIP)</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Personalized licence plate</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Graphic licence plate</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Vintage licence plate for a classic car</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Special permit</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Garage licence</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Vehicle records</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Change information on a vehicle permit</a><br />
                </div>
                <div className="ontario-columns ontario-large-4">
                    <h4><a href="/service" className="ontario-header-link ontario-margin-bottom-8-!">Locations, hours and contact</a></h4>
                    {/* <Button data={{
                        id: "services-book",
                        text: "Book an appointment",
                        skin: "secondary",
                    }}
                        onClickHandler={() => {
                            handleUpdate();
                        }}
                    /> */}
                    <h4><a href="/service" className="ontario-header-link">Forms</a> and <a href="/service" className="ontario-header-link">publications</a></h4>
                    <hr className="ontario-margin-bottom-8-! ontario-margin-top-8-!" />
                    <h4><a href="/service" className="ontario-header-link ">Service Canada</a></h4>
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Canada Emergency Response Benefit</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Employment Insurance</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Passports</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Social Insurance Number</a><br />
                </div>
            </div>
            <div className="ontario-row">
                <div className="ontario-columns ontario-large-8 ontario-margin-bottom-16-!">
                    <div class="banner">
                        <div class="ontario-callout-column-holder">
                            <p><a href="/service" className="ontario-link">Get email reminders</a> 60 and 30 days before your driver’s licence or plate sticker expire.</p>
                        </div>
                    </div>
                </div>
                <div class="ontario-columns">
                    <hr />
                </div>
            </div>
            <div className="ontario-row  ontario-margin-bottom-8-!">
                <div className="ontario-columns ontario-large-4">
                    <h4>Health card</h4>
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Renew your health card</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Replace, cancel or change information on your health card</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Switch to a photo health card</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">First-time health card</a><br />
                    <h4>Organ and tissue donation</h4>
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Register to be an organ and tissue donor</a><br />

                </div>
                <div className="ontario-columns ontario-large-4">
                    <h4>Birth, marriage and death</h4>
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Newborn baby registration</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Birth certificate</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Marriage certificate</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Death certificate</a><br />
                </div>
                <div className="ontario-columns ontario-large-4">
                    <h4>ID</h4>
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Ontario Photo Card</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Change your address</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Change your name</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Change your last name</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Change your sex designation</a><br />
                </div>

            </div>
            <div className="ontario-row">
                <div class="ontario-columns ontario-margin-top-16-!">
                    <hr />
                </div>
            </div>

            <div className="ontario-row  ontario-margin-bottom-8-!">
                <div className="ontario-columns ontario-large-4">
                    <h4>Fishing, hunting and camping</h4>
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Fishing licence</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Hunting licence</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Outdoors Card</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Camping on Crown land</a><br />

                </div>
                <div className="ontario-columns ontario-large-4">
                    <h4>Housing and property</h4>
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Land registration</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Register or search for a personal property lien</a><br />
                </div>
                <div className="ontario-columns ontario-large-4">
                    <div className="banner2 ontario-margin-bottom-16-!">
                        <div class="ontario-callout-column-holder">
                            <h4><a href="/service" className="ontario-header-link ">Business services</a></h4>
                            <h4><a href="/service" className="ontario-header-link ">Not-for-profits</a></h4>
                            Sign up to access convenient tools, services and information to help start and grow your business or not-for-profit.
                        </div>
                    </div>
                </div>

            </div>
            <div className="ontario-row">
                <div class="ontario-columns ontario-margin-top-16-!">
                    <hr />
                </div>
            </div>
            <div className="ontario-row  ontario-margin-bottom-8-!">
                <div className="ontario-columns ontario-large-4">
                    <h4>Security guards and private investigators</h4>
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Individual licence</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Agency sole proprietorship licence</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Agency partnership licence</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Agency corporation licence</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Register as an employer</a><br />
                </div>
                <div className="ontario-columns ontario-large-4">
                    <h4>College or university</h4>
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">OSAP: Ontario Student Assistance Program</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Search for registered Private Career Colleges (for students)</a><br />
                    <a href="/service" className="ontario-link ontario-margin-bottom-8-!">Register a Private Career College (for colleges)</a><br />
                </div>
                <div className="ontario-columns ontario-large-4">
                    <Button data={{
                        id: "faker",
                        text: "Search services",
                        skin: "secondary",
                    }}
                    />
                </div>

            </div>
            <div className="ontario-row">
                <div class="ontario-columns ontario-margin-top-16-!">
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default ServicesGeneral;