import React from 'react'
import { useHistory, Link } from "react-router-dom";
import { Button } from "../ontario-design-system/lib/index";
import "../css/OtherStyles.css";
import ScrollToTop from "react-scroll-to-top";

function ServiceSpecific({ setFirstType, addService }) {
    const history = useHistory();

    function handleUpdate() {
        setFirstType("service");
        addService({
            "value": "renew-drivers-licence",
            "label": "Renew a driver's licence",
            "private": true,
            "online": true,
            "link": "https://www.services.gov.on.ca/wps85/portal/s2i/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8ziLdwNzIwcTQz9DLwMDQ0CvT0tzJxCTY38DQz1w_TDCSmJAkob4ACOBkD9UYSURAKtMMdphbuxfjDIjJzEvHT9yNQ8_eDUvHhnR_2CXDfLgNzceEdHRUUAfyHQ6Q!!/dz/d5/L2dBISEvZ0FBIS9nQSEh/",
            "documents": ["your old driver's licence", "personal identificaiton document (verifying your name, date of birth and signature)", "$90 as the renewal fee (cash, debit or credit)"]
        });
        history.push("/abs");

    }

    return (
        <div className="container">
            <div className="ontario-row  ontario-margin-bottom-8-!">
                <div className="ontario-small-12 ontario-large-8 ontario-columns">
                    <ScrollToTop smooth color={'white'} style={{ backgroundColor: "#6e6e6e", }} />
                    <h1>Renew a driver's licence</h1>
                    <p className="ontario-lead-statement ontario-margin-bottom-32-!" style={{ fontFamily: "Open Sans" }}>
                        Renew your driver’s licence, learn about the temporary validation document and find out how to update your address, get a new photo and change your sex designation.
                        <br></br><br></br>
                        If you have a photo health card that expires at the same time, you may be able to renew them together online.
                     </p>
                    <Button data={{
                        id: "driver-online",
                        text: "Renew your driver's licence or health card",
                        skin: "primary",
                    }}
                        onClickHandler={() => {
                            window.location = 'https://www.services.gov.on.ca/wps85/portal/s2i/!ut/p/z1/hZBLT8MwEIR_C4cc612_EodbQKKiSDxUAY0vkROMGylxIic04t_jiBMSVfc2u9_MSAsaDqC9ObXOzO3gTRd1qdNKbTFlhaCPuKMUXx7uVXrzKtkTUniD90uIjmc8MwVGv76ElLEiO1ux5bBfMypnoGSEoVCSSyUIlblSUbKM0BQxo1wytaE0FyIimVwBTlnOGFv9nfEOSuthb311W8AOtOuG-vcLha-5cqCD_bTBBvIV4vo4z-N0nWCCy7KQwc8mtANpTIKjcTbBYL1dNh-hPdkwbbq2sb6x_6Udh2mGw98QGPu7_LnvFRe6_l6Kqx_NqWsn/dz/d5/L2dBISEvZ0FBIS9nQSEh/'
                        }}
                    />
                    {/* <Button data={{
                        id: "service-book",
                        text: "Book an appointment to renew in-person",
                        skin: "secondary",
                    }}
                        onClickHandler={() => {
                            handleUpdate();
                        }}
                    /> */}
                </div>
                <div class="ontario-columns">
                    <hr />
                </div>
            </div>
            <div className="ontario-row  ontario-margin-bottom-8-!">
                <div className="ontario-columns" style={{ fontFamily: "Open Sans" }}>
                    <h4>On this page</h4>
                    <ol>
                        <li><a href="#what-you-need">What you need to know before you renew</a></li>
                        <li><a href="#renew-online">Renew online</a></li>
                        <li><a href="#renew-inperson">Renew in-person</a></li>
                        <li><a href="#temp">Temporary driver's licence validation</a></li>
                        <li><a href="#cost">Cost and delivery</a></li>
                        <li><a href="#address">Recently moved or need to change your address</a></li>
                        <li><a href="#photo">Driver’s licence photo</a></li>
                        <li><a href="#sex">Sex designation</a></li>
                    </ol>
                </div>
                <hr />
            </div>
            <div className="ontario-row  ontario-margin-bottom-8-!">
                <div className="ontario-columns" style={{ fontFamily: "Open Sans" }}>
                    <h2 id="what-you-need">What you need to know before you renew</h2>
                    <p>
                        An Ontario driver’s licence is valid for 5 years. You must renew it every 5 years either online or at a ServiceOntario centre.
                        <br></br><br></br>
                        You cannot renew online if your driver’s licence is cancelled or has been expired for more than 12 months.
                        <br></br><br></br>
                        You can renew online if:
                    </p>
                    <ul>
                        <li>you don’t need a new photo (you must take a new photo every 10 years)</li>
                        <li>you have a full licence (G, M class) that isn’t cancelled, suspended, or expired for more than 12 months</li>
                        <li>you have a combination class of G1M, G2M, GM1, GM2, M1 or M2 (only the full portion will be renewed online)</li>
                        <li>you haven’t updated your address within the last 90 days</li>
                        <li>you don’t need tests (vision, written, or road)</li>
                        <li>you’re not removing a vision condition</li>
                        <li>you have no new medical conditions that may prevent you from driving</li>
                        <li>you don’t have outstanding fines or penalties</li>
                    </ul>
                    <div className="banner ontario-margin-bottom-16-!">
                        <div class="ontario-callout-column-holder">
                            Sign up for email reminders and we’ll notify you 60 and 30 days before your licence expires.
                        </div>
                    </div>
                </div>
                <div class="ontario-columns">
                    <hr />
                </div>
            </div>
            <div className="ontario-row  ontario-margin-bottom-8-!">
                <div className="ontario-columns" style={{ fontFamily: "Open Sans" }}>
                    <h2 id="renew-inperson">Renew online</h2>
                    <p>
                        To renew online, you need:
                    </p>
                    <ul>
                        <li>your driver’s licence number</li>
                        <li>the 7-digit trillium number found on the back of your driver’s licence</li>
                        <li>your postal code</li>
                    </ul>
                    <Button data={{
                        id: "driver-online",
                        text: "Renew your driver's licence online",
                        skin: "secondary",
                    }}
                        onClickHandler={() => {
                            window.location = 'https://www.services.gov.on.ca/wps85/portal/s2i/!ut/p/z1/hZBLT8MwEIR_C4cc612_EodbQKKiSDxUAY0vkROMGylxIic04t_jiBMSVfc2u9_MSAsaDqC9ObXOzO3gTRd1qdNKbTFlhaCPuKMUXx7uVXrzKtkTUniD90uIjmc8MwVGv76ElLEiO1ux5bBfMypnoGSEoVCSSyUIlblSUbKM0BQxo1wytaE0FyIimVwBTlnOGFv9nfEOSuthb311W8AOtOuG-vcLha-5cqCD_bTBBvIV4vo4z-N0nWCCy7KQwc8mtANpTIKjcTbBYL1dNh-hPdkwbbq2sb6x_6Udh2mGw98QGPu7_LnvFRe6_l6Kqx_NqWsn/dz/d5/L2dBISEvZ0FBIS9nQSEh/'
                        }}
                    />
                    <Button data={{
                        id: "driver-online",
                        text: "Renew your driver's licence or health card",
                        skin: "primary",
                    }}
                        onClickHandler={() => {
                            window.location = 'https://www.services.gov.on.ca/wps85/portal/s2i/!ut/p/z1/hZBLT8MwEIR_C4cc612_EodbQKKiSDxUAY0vkROMGylxIic04t_jiBMSVfc2u9_MSAsaDqC9ObXOzO3gTRd1qdNKbTFlhaCPuKMUXx7uVXrzKtkTUniD90uIjmc8MwVGv76ElLEiO1ux5bBfMypnoGSEoVCSSyUIlblSUbKM0BQxo1wytaE0FyIimVwBTlnOGFv9nfEOSuthb311W8AOtOuG-vcLha-5cqCD_bTBBvIV4vo4z-N0nWCCy7KQwc8mtANpTIKjcTbBYL1dNh-hPdkwbbq2sb6x_6Udh2mGw98QGPu7_LnvFRe6_l6Kqx_NqWsn/dz/d5/L2dBISEvZ0FBIS9nQSEh/'
                        }}
                    />
                </div>
                <div class="ontario-columns">
                    <hr />
                </div>
            </div>
            <div className="ontario-row  ontario-margin-bottom-8-!">
                <div className="ontario-columns" style={{ fontFamily: "Open Sans" }}>
                    <h2 id="renew-inperson">Renew in-person</h2>
                    <p>
                        If you’re not eligible to renew online, <Link to="/service/service">book an appointment </Link>to visit a ServiceOntario centre.
                        <br /><br />
                    </p>
                    <Button data={{
                        id: "driver-online",
                        text: "Book appointment",
                        skin: "primary",
                    }}
                        onClickHandler={() => {
                            handleUpdate();
                        }}
                    />
                </div>
                <div class="ontario-columns">
                    <hr />
                </div>
            </div>
            <div className="ontario-row  ontario-margin-bottom-8-!">
                <div className="ontario-columns" style={{ fontFamily: "Open Sans" }}>
                    <h2 id="temp">Temporary driver's licence validation</h2>
                    <p>
                        When you renew online you will receive a temporary driver’s licence validation document if:
                    </p>
                    <ul>
                        <li>your driver’s licence has already expired</li>
                        <li>you renew online within 28 days of your current driver’s licence expiry date</li>
                    </ul>
                    <div className="banner ontario-margin-bottom-16-!">
                        <div class="ontario-callout-column-holder">
                            You must download, print and keep the temporary validation document with your old licence until your new driver’s licence card arrives in the mail.
                        </div>
                    </div>
                    <p>
                        Visit a ServiceOntario centre if:
                    </p>
                    <ul>
                        <li>you are unable to download and print your temporary document</li>
                        <li>you lose or need to replace your temporary document</li>
                        <li>your new driver’s licence has not arrived and your temporary validation document is about to expire</li>
                    </ul>
                </div>
                <div class="ontario-columns">
                    <hr />
                </div>
            </div>
            <div className="ontario-row  ontario-margin-bottom-8-!">
                <div className="ontario-columns" style={{ fontFamily: "Open Sans" }}>
                    <h2 id="cost">Cost and delivery</h2>
                    <h3>Cost</h3>
                    <p>
                        $90 for a 5-year licence.
                        <br /><br />
                        The fees may vary if:
                    </p>
                    <ul>
                        <li>the renewal period is not for a full 5 years, for example the expiry date on your driver’s licence is changing to match the expiry date on your health card</li>
                        <li>you are over 76 years of age</li>
                    </ul>
                    <h4>How you can pay</h4>
                    <ul>
                        <li>VISA, Mastercard Credit Cards</li>
                        <li>Interac® Online</li>
                    </ul>
                    <h3>Delivery</h3>
                    <p>
                        Your new driver’s licence card will arrive in the mail within 4 to 6 weeks.
                        <br /><br />
                    </p>

                </div>
                <div class="ontario-columns">
                    <hr />
                </div>
            </div>
            <div className="ontario-row  ontario-margin-bottom-8-!">
                <div className="ontario-columns" style={{ fontFamily: "Open Sans" }}>
                    <h2 id="address">Recently moved or need to change your address</h2>
                    <p>
                        If you recently moved, you need to update your address with the Ontario government. You cannot renew your driver’s licence online within 90 days of changing your address. Instead, you must:
                    </p>
                    <ul>
                        <li>visit a ServiceOntario centre to update both your address, and driver’s licence, or</li>
                        <li>update your address online and visit a ServiceOntario centre to renew your driver’s licence in-person</li>
                    </ul>
                </div>
                <div class="ontario-columns">
                    <hr />
                </div>
            </div>
            <div className="ontario-row  ontario-margin-bottom-8-!">
                <div className="ontario-columns" style={{ fontFamily: "Open Sans" }}>
                    <h2 id="photo">Driver’s licence photo</h2>
                    <p>
                        You must take a new driver’s licence photo every 10 years.
                        <br /><br />
                        You can also have your photo retaken, at any time, for $35.75.
                        <br /><br />
                        Headwear worn for religious or medical reasons can be worn, but must not cover any part of your face. You may be asked to remove any head or face wear (e.g. eyeglasses) when taking a photo for government-issued identification.
                        <br /><br />
                        If you need a new photo, visit a ServiceOntario centre. Please bring:
                    </p>
                    <ul>
                        <li>your current driver’s licence</li>
                        <li>a personal identification document (verifying your name, date of birth and signature)</li>
                    </ul>
                    <p>
                        A new driver’s licence will be mailed to you within 4 to 6 weeks.
                    </p>
                </div>
                <div class="ontario-columns ontario-margin-top-8-!">
                    <hr />
                </div>
            </div>
            <div className="ontario-row  ontario-margin-bottom-64-!">
                <div className="ontario-columns" style={{ fontFamily: "Open Sans" }}>
                    <h2 id="sex">Sex designation</h2>
                    <h3>Change from M to F or F to M</h3>
                    <p>
                        To change the sex designation on your driver’s licence from male (M) to female (F) or female (F) to male (M), go to a ServiceOntario centre near you and bring an original, valid birth certificate (this includes birth certificate with parental information) or certified copy of birth registration.
                        <br /><br />
                        If you don’t have a birth certificate or certified copy of birth registration, you can order one online.
                        <br /><br />
                        Learn more about what you need to change your sex designation.
                        <br /><br />
                    </p>
                    <h3>Change to X</h3>
                    <p>
                        To change the sex designation on your driver’s licence to an X (gender neutral), visit a ServiceOntario centre. You do not have to bring any supporting documents.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default ServiceSpecific;