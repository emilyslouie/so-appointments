import React from 'react'
import { useHistory } from "react-router-dom";
import { Button, Callout } from "../ontario-design-system/lib/index";
import "../css/OtherStyles.css";
import ScrollToTop from "react-scroll-to-top";

function LocationGeneral({ setFirstType, setFirstSpecific }) {
    const history = useHistory();

    function handleUpdate() {
        setFirstType("");
        setFirstSpecific("");
        history.push("/abs");
    }

    function handleUpdate2() {
        setFirstType("location");
        setFirstSpecific("777 bay street");
        history.push("/specific-location");
    }

    return (
        <div className="container">
            <div className="ontario-row  ontario-margin-bottom-8-!">
                <div className="ontario-columns">
                    <ScrollToTop smooth color={'white'} style={{ backgroundColor: "#6e6e6e", }} />
                    <h1>ServiceOntario locations, hours and contact</h1>
                    <p className="ontario-lead-statement ontario-margin-bottom-32-!" style={{ fontFamily: "Open Sans" }}>
                        Find out which ServiceOntario locations are open and what services are available when you visit.
                     </p>
                </div>
                <div class="ontario-columns">
                    <hr />
                </div>
            </div>
            <div className="ontario-row  ontario-margin-bottom-8-!">
                <div className="ontario-columns">
                    {/* <Callout className="ontario-margin-bottom-8-!"
                        data={{
                            type: "warning",
                            title: "Service changes due to COVID-19 (coronavirus)",
                            message: "We urge you not to visit ServiceOntario unless absolutely necessary. Some ServiceOntario locations are closed and others are operating with reduced hours. Find out which locations are open. Learn about the ServiceOntario COVID-19 (coronavirus) response."
                        }}
                    /> */}
                    <div className="banner3 ontario-margin-bottom-16-!">
                        <div class="ontario-callout-column-holder">
                            <h2>Service changes due to COVID-19 (coronavirus)</h2>
                            We urge you not to visit ServiceOntario unless absolutely necessary. <br /><br />
                            Some ServiceOntario locations are closed and others are operating with reduced hours.<br /><br />
                            <a>Learn about the ServiceOntario COVID-19 (coronavirus) response.</a>
                        </div>
                    </div>
                    <h2>Before you go to a ServiceOntario location</h2>
                    <ul>
                        <li>check if your service is available online and give it a try</li>
                        <li><a onClick={handleUpdate}>book an appointment online</a></li>
                        <li>ensure the location is open and offers the service you need</li>
                    </ul>
                    <p>If you must visit us, please:</p>
                    <ul>
                        <li>wash your hands thoroughly</li>
                        <li>do your best to keep at least 2 metres away from others</li>
                        <li>cough or sneeze into your sleeve or tissue, washing your hands after</li>
                    </ul>
                </div>
                <div class="ontario-columns">
                    <hr />
                </div>
            </div>

            <div className="ontario-row  ontario-margin-bottom-8-!">
                <div className="ontario-columns">
                    <h1>All locations</h1>
                </div>
                <div className="ontario-columns ontario-large-4">
                    <h3>Ajax</h3>
                    <a href="/location">509 Bayly Street East</a>
                    <br /><br />
                    <h3>Alexandria</h3>
                    <a href="/location">101 Main Street North</a>
                    <br /><br />
                    <h3>Alliston</h3>
                    <a href="/location">180 Parsons Road</a>
                    <br /><br />
                    <h3>Amherstburg</h3>
                    <a href="/location">80 Richmond Street</a>
                    <br /><br />
                    <h3>Arnprior</h3>
                    <a href="/location">100 Madawaska Boulevard</a>
                    <br /><br />
                    <h3>Atikokan</h3>
                    <a href="/location">108 Saturn Avenue</a>
                    <br /><br />
                    <h3>Aurora</h3>
                    <a href="/location">50 Bloomington Road West</a><br />
                    <a href="/location">297 Wellington Street East</a>
                    <br /><br />
                    <h3>Aylmer</h3>
                    <a href="/location">615 John Street North</a>
                    <br /><br />
                    <h3>Bancroft</h3>
                    <a href="/location">50 Monck Street</a>
                    <br /><br />
                    <h3>Barrie</h3>
                    <a href="/location">320 Bayfield Street</a><br />
                    <a href="/location">274 Burton Avenue</a>
                    <br />
                    <a href="/location">34 Simcoe Street</a>
                    <br /><br />
                    <h3>Beardmore</h3>
                    <a href="/location">285 Main Street</a>
                    <br /><br />
                    <h3>Beaverton</h3>
                    <a href="/location">397 Simcoe Street</a>
                    <br /><br />
                    <h3>Belle River</h3>
                    <a href="/location">195 Ouellette Street</a>
                    <br /><br />
                    <h3>Belleville</h3>
                    <a href="/location">199 Front Street</a>
                    <br /><br />
                    <h3>Blenheim</h3>
                    <a href="/location">45 James Street</a>
                    <br /><br />
                    <h3>Blind River</h3>
                    <a href="/location">62 Queen Avenue</a>
                    <br /><br />
                    <h3>Bobcaygeon</h3>
                    <a href="/location">21 Canal Street East</a>
                    <br /><br />
                    <h3>Bolton</h3>
                    <a href="/location">
                        18 King Street East</a>
                    <br /><br />
                    <h3>Bowmanville</h3>
                    <a href="/location">
                        191 Church Street</a>
                    <br /><br />
                    <h3>Bracebridge</h3>
                    <a href="/location">
                        15 Dominion Street</a>
                    <br /><br />
                    <h3>Bradford</h3>
                    <a href="/location">
                        100 Dissette Street</a>
                    <br /><br />
                    <h3>Brampton</h3>
                    <a href="/location">
                        125 Chrysler Street</a>
                    <br /> <a href="/location">1 Gateway Boulevard</a><br />
                    <a href="/location">
                        4 McLaughlin Road South</a>
                    <br /> <a href="/location">55 Mountainash Road</a><br />
                    <a href="/location">
                        2150 Steeles Avenue East</a>
                    <br /> <a href="/location">
                        1 Wexford Road</a>
                    <br /><br />
                    <h3>Brantford</h3>
                    <a href="/location">325A West Street</a>
                    <br /><br />
                    <h3>Brighton</h3>
                    <a href="/location">
                        140 Prince Edward Street</a>
                    <br /><br />
                    <h3>Brockville</h3>
                    <a href="/location">
                        7 King Street West</a>
                    <br /><br />
                    <h3>Burk's Falls</h3>
                    <a href="/location">
                        303 Ontario Street</a>
                    <br /><br />
                    <h3>Burlington</h3>
                    <a href="/location">
                        1250 Brant Street</a>
                    <br /><a href="/location">
                        3455 Fairview Street</a>
                    <br /><br />
                    <h3>Caledonia</h3>
                    <a href="/location">45 Caithness Street East</a>
                    <br /><br />
                </div>
                <div className="ontario-columns ontario-large-4">
                    <h3>Hamilton</h3>
                    <a href="/location">163 Centennial Parkway North</a>
                    <br /><a href="/location">50 Dundurn Street South</a>
                    <br /><a href="/location">119 King Street West</a>
                    <br /><a href="/location">1400 Upper James Street</a>
                    <br /><a href="/location">1439 Upper Ottawa Street</a>
                    <br /><br />
                    <h3>Harriston</h3>
                    <a href="/location">
                        36 Elora Street South</a>
                    <br /><br />
                    <h3>Harrow</h3>
                    <a href="/location">
                        72 King Street East</a>
                    <br /><br />
                    <h3>Hawkesbury</h3>
                    <a href="/location">179 Main Street East</a>
                    <br /><br />
                    <h3>Hearst</h3>
                    <a href="/location">613 Front Street</a>
                    <br /><br />
                    <h3>Hornepayne</h3>
                    <a href="/location">68 Front Street</a>
                    <br /><br />
                    <h3>Huntsville</h3>
                    <a href="/location">
                        207 Main Street West</a>
                    <br /><br />
                    <h3>Ignace</h3>
                    <a href="/location">Highway 17 and Highway 599</a>
                    <br /><br />
                    <h3>Ingersoll</h3>
                    <a href="/location">37 King Street West</a>
                    <br /><br />
                    <h3>Iroquois Falls</h3>
                    <a href="/location">33 Ambridge Drive</a>
                    <br /><br />
                    <h3>Kapuskasing</h3>
                    <a href="/location">122 Government Road West</a>
                    <br /><br />
                    <h3>Kemptville</h3>
                    <a href="/location">10 Campus Drive</a>
                    <br /><br />
                    <h3>Kenora</h3>
                    <a href="/location">220 Main Street South</a>
                    <br /><br />
                    <h3>Keswick</h3>
                    <a href="/location">1 Church Street</a>
                    <br /><br />
                    <h3>Killaloe</h3>
                    <a href="/location">4 Lake Street</a>
                    <br /><br />
                    <h3>Kincardine</h3>
                    <a href="/location">1771 Highway 21 North</a>
                    <br /><br />
                    <h3>Kingston</h3>
                    <a href="/location">1650 Bath Road</a>
                    <br /><a href="/location">1201 Division Street</a>
                    <br /><br />
                    <h3>Kirkland Lake</h3>
                    <a href="/location">145 Government Road West</a>
                    <br /><br />
                    <h3>Kitchener</h3>
                    <a href="/location">30 Duke Street West</a>
                    <br /><a href="/location">30 Manitou Drive</a>
                    <br /><a href="/location">
                        1151 Victoria Street North</a>
                    <br /><br />
                    <h3>Lakefield</h3>
                    <a href="/location">133 Water Street</a>
                    <br /><br />
                    <h3>Leamington</h3>
                    <a href="/location">24 Seacliff Drive East</a>
                    <br /><br />
                    <h3>Lindsay</h3>
                    <a href="/location">322 Kent Street West</a>
                    <br /><br />
                    <h3>Listowel</h3>
                    <a href="/location">975 Wallace Avenue North</a>
                    <br /><br />
                    <h3>Lively</h3>
                    <a href="/location">140 Regional Road 24</a>
                    <br /><br />
                    <h3>London</h3>
                    <a href="/location">920 Commissioners Road East</a>
                    <br /><a href="/location">1790 Dundas Street East</a>
                    <br /><a href="/location">100 Dundas Street</a>
                    <br /><a href="/location">2295 Wharncliffe Road South</a>
                    <br /><br />
                    <h3>Lucan</h3>
                    <a href="/location">186 Main Street</a>
                    <br /><br />
                    <h3>MacTier</h3>
                    <a href="/location">485 High Street</a>
                    <br /><br />
                    <h3>Madoc</h3>
                    <a href="/location">26 St. Lawrence Street West</a>
                    <br /><br />
                </div>
                <div className="ontario-columns ontario-large-4">
                    <h3>Petawawa</h3>
                    <a href="/location">14 Ypres Boulevard</a>
                    <br /><br />
                    <h3>Peterborough</h3>
                    <a href="/location">300 Water Street</a>
                    <br /><br />
                    <h3>Petrolia</h3>
                    <a href="/location">4178 Petrolia Line</a>
                    <br /><br />
                    <h3>Pickering</h3>
                    <a href="/location">1410 Bayly Street</a>
                    <br /><br />
                    <h3>Pickle Lake</h3>
                    <a href="/location">2 Anne Street South</a>
                    <br /><br />
                    <h3>Picton</h3>
                    <a href="/location">1 Pitt Street</a>
                    <br /><br />
                    <h3>Port Colborne</h3>
                    <a href="/location">216 King Street</a>
                    <br /><br />
                    <h3>Port Dover</h3>
                    <a href="/location">215 Market Street East</a>
                    <br /><br />
                    <h3>Port Elgin</h3>
                    <a href="/location">559 Goderich Street</a>
                    <br /><br />
                    <h3>Port Hope</h3>
                    <a href="/location">58 Queen Street</a>
                    <br /><br />
                    <h3>Port Perry</h3>
                    <a href="/location">72 Water Street</a>
                    <br /><br />
                    <h3>Port Rowan</h3>
                    <a href="/location">1115 Bay Street</a>
                    <br /><br />
                    <h3>Powassan</h3>
                    <a href="/location">520B Main Street</a>
                    <br /><br />
                    <h3>Prescott</h3>
                    <a href="/location">132 King Street East</a>
                    <br /><br />
                    <h3>Rainy River</h3>
                    <a href="/location">334 4th Street</a>
                    <br /><br />
                    <h3>Red Lake</h3>
                    <a href="/location">227 Howey Street</a>
                    <br /><br />
                    <h3>Renfrew</h3>
                    <a href="/location">316 Plaunt Street South</a>
                    <br /><br />
                    <h3>Richmond Hill</h3>
                    <a href="/location">10909 Yonge Street</a>
                    <br /><br />
                    <h3>Rockland</h3>
                    <a href="/location">928 Laporte Street</a>
                    <br /><br />
                    <h3>Sarnia</h3>
                    <a href="/location">150 Christina Street North</a>
                    <br /><br />
                    <h3>Sault Ste. Marie</h3>
                    <a href="/location">237 Bruce Street</a>
                    <br /><a href="/location">420 Queen Street East</a>
                    <br /><br />
                    <h3>St. Catharines</h3>
                    <a href="/location">350 Scott Street</a>
                    <br /><a href="/location">301 St. Paul Street</a>
                    <br /><br />
                    <h3>Simcoe</h3>
                    <a href="/location">50 Frederick Hobson VC Drive</a>
                    <br /><br />
                    <h3>Thornhill</h3>
                    <a href="/location">100 Steeles Avenue West</a>
                    <br /><br />
                    <h3>Thunder Bay</h3>
                    <a href="/location">400 Balmoral Place</a>
                    <br /> <a href="/location">435 James Street South</a>
                    <br /> <a href="/location">
                        581 Red River Road</a>
                    <br /><br />
                    <h3>Toronto</h3>
                    <a onClick={handleUpdate2}>777 Bay Street</a>
                    <br /><a href="/location">3300 Bloor Street West</a>
                    <br /><a href="/location">747 Don Mills Road</a>
                    <br /><a href="/location">3555 Don Mills Road</a>
                    <br /><a href="/location">2700 Dufferin Street</a>
                    <br /><a href="/location">846 Dundas Street West</a>
                    <br /><a href="/location">3025 Kingston Road</a>
                    <br />
                    <a href="/location">1025 Lake Shore Boulevard East</a>
                    <br />
                    <a href="/location">3495 Lawrence Avenue East</a>
                    <br />
                    <a href="/location">1871 O’Connor Drive</a>
                    <br /><a href="/location">47 Sheppard Avenue East</a>
                    <br /><a href="/location">4800 Sheppard Avenue East</a>
                    <br /><a href="/location">1170 Sheppard Avenue West</a>
                    <br /><a href="/location">2129 St. Clair Avenue West</a>
                    <br /><a href="/location">250 The East Mall</a>
                    <br /><br />

                </div>
                <div class="ontario-columns">
                    <hr />
                </div>
            </div>
        </div >
    );
}

export default LocationGeneral;