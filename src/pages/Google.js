import React from 'react';
import "../css/Google.css";
import gooogle from "../images/googlesearch.png"

function Google({ path }) {

    if (path === "/specific-location") {
        return (
            <div class="wrapper">

                <div class="header">
                    <img class="tennis" src="https://www.google.com/logos/doodles/2015/start-of-the-2015-us-open-tennis-championship-5723562658758656.2-res.png" alt="" />

                    <input class="search-box" type="text" size="48" placeholder="777 bay street serviceontario" />

                    <a href="/"><img class="mic" src="http://iconshow.me/media/images/ui/ios7-icons/png/512/mic-outline.png" alt="" /></a>

                    <a class="mag-button" href="/"><img class="mag-glass" src="http://www.iconsdb.com/icons/preview/royal-blue/google-web-search-xxl.png" alt="" /></a>

                    <a class="sign-in" href="/">Sign In</a>

                    <a class="nine-icon" href="/"><img class="icon" src="http://flatfrogblog.com/wp-content/uploads/2014/01/app-launcher-150x150.png" alt="" /></a>
                </div>


                <h5>About 5,170,000 results (0.37 seconds) </h5>

                <div class="content">

                    <div class="entry">
                        <a class="lead googlelink" href={path}>
                            ServiceOntario Bay and College (Toronto) | Ontario.ca</a>
                        <p class="url">www.ontario.ca › locations › bay-and-college-toronto
        </p>
                        <p class="detail">Visit us at 777 Bay Street in Toronto. Learn about our hours of operation, the services and facilities available here.</p>
                    </div>

                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            ServiceOntario locations, hours and contact | Ontario.ca</a>
                        <p class="url">www.ontario.ca › locations › serviceontario
                </p>
                        <p class="detail">Find out which ServiceOntario locations are open and what services are available when you visit. ... Toronto. 777 Bay Street · 3300 Bloor Street ...</p>
                    </div>

                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            ServiceOntario | Ontario.ca</a>
                        <p class="url">www.ontario.ca › page › serviceontario
            </p>
                        <p class="detail">Driver's licences, plate stickers, health cards, birth certificates and other services provided by the Ontario government.</p>
                    </div>

                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            ServiceOntario - College Park Service Counter ...</a>
                        <p class="url">www.torontocentralhealthline.ca › displayservice
        </p>
                        <p class="detail">Jul 26, 2013 - One of Jennifer Dewalt's creations, this webpage lets visitors create paintings in ... Build a different website every day for 180 consecutive days.</p>
                    </div>

                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            ServiceOntario - 777 Bay Street, Downtown Core, Toronto, ON</a>
                        <p class="url">www.yelp.ca › biz › serviceontario-toronto

            </p>
                        <p class="detail">40 reviews of ServiceOntario "Greetings, We went to Service Ontario branch at the below address for public service on Sept 10, 2019. 777 Bay Street Lower ...</p>
                    </div>

                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            crowd, service ontario, written, test, G1, covid-19 | CP24.com</a>
                        <p class="url">www.cp24.com › news › crowd-forms-at-sole-service-ont...
            </p>
                        <p class="detail">Jun 5, 2020 - The centre, at 777 Bay Street, is the only location across the province open for drivers to write their level one (G1) test amid the COVID-19 ...</p>
                    </div>
                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            Service Ontario Lines Are So Bad In Toronto That One Guy ...</a>
                        <p class="url">www.narcity.com › News › Canada › Ontario › Toronto
        </p>
                        <p class="detail">Jun 8, 2020 - Being the only location in the province where drivers can write their G1 and M1 tests, the 777 Bay Street location has been a bit busier than ...</p>
                    </div>

                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            ServiceOntario - 10 Photos & 41 Reviews - Public Services ...</a>
                        <p class="url">m.yelp.com › biz › serviceontario-toronto
            </p>
                        <p class="detail">41 reviews of ServiceOntario "I have to admit it; I actually had a pleasant time in a government regulated office today. ... 777 Bay Street. Toronto, ON M5G 2C8 ...</p>
                    </div>
                </div>

                <div class="related">
                    <h3 class="googleh3">Searches related to "777 bay street serviceontario"</h3>

                    <table style={{ width: "100%" }}>

                        <tr>
                            <td><a href="/">777 bay street service ontario appointment</a></td>
                            <td><a href="/">service ontario open</a></td>
                        </tr>

                        <tr>
                            <td><a href="/">service ontario near me</a></td>
                            <td><a href="/">777 bay street service ontario hours</a></td>
                        </tr>

                        <tr>
                            <td><a href="/">service ontario locations</a></td>
                            <td><a href="/">service ontario contact</a></td>
                        </tr>
                        <tr>
                            <td><a href="/">service ontario phone number</a></td>
                            <td><a href="/">service ontario renew sticker</a></td>
                        </tr>
                    </table>
                </div>

                <div class="google">
                    <a href="/"><img class="google-img" src={gooogle} alt="" /></a>
                </div>



                <div class="footer">
                    <p>Toronto, ON - From your Internet address - <a href="/">Use precise location</a> - <a href="/">  Learn more</a></p>

                </div>
            </div>
        );
    } else if (path === "/specific-service") {
        return (
            <div class="wrapper">

                <div class="header">
                    <img class="tennis" src="https://www.google.com/logos/doodles/2015/start-of-the-2015-us-open-tennis-championship-5723562658758656.2-res.png" alt="" />

                    <input class="search-box" type="text" size="48" placeholder="renew driver's licence" />

                    <a href="/"><img class="mic" src="http://iconshow.me/media/images/ui/ios7-icons/png/512/mic-outline.png" alt="" /></a>

                    <a class="mag-button" href="/"><img class="mag-glass" src="http://www.iconsdb.com/icons/preview/royal-blue/google-web-search-xxl.png" alt="" /></a>

                    <a class="sign-in" href="/">Sign In</a>

                    <a class="nine-icon" href="/"><img class="icon" src="http://flatfrogblog.com/wp-content/uploads/2014/01/app-launcher-150x150.png" alt="" /></a>
                </div>


                <h5>About 5,170,000 results (0.37 seconds) </h5>

                <div class="content">

                    <div class="entry">
                        <a class="lead googlelink" href={path}>
                            Renew a driver's licence | Ontario.ca</a>
                        <p class="url">www.ontario.ca › page › renew-drivers-licence</p>
                        <p class="detail">You must renew it every 5 years either online or at a ServiceOntario centre. You cannot renew online if your driver's licence is cancelled or has been expired for more than 12 months. You can renew online if: you don't need a new photo...</p>
                    </div>

                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            Renew both your health card and driver's licence online ...</a>
                        <p class="url">www.ontario.ca › page › renew-both-your-health-card-...</p>
                        <p class="detail">To renew online, you will need both a valid health card and a driver's licence. When you're done, you must print and carry your temporary document or ...</p>
                    </div>

                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            Renew an expired driver's licence | Ontario.ca</a>
                        <p class="url">www.ontario.ca › page › renew-expired-drivers-licence</p>
                        <p class="detail">Renew an expired driver's licence. Find out if you're still eligible to renew your driver's licence online, or if you need to visit a DriveTest or ServiceOntario centre ...</p>
                    </div>

                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            Driver's licence | Ontario.ca</a>
                        <p class="url">www.ontario.ca › page › drivers-licence
                        </p>
                        <p class="detail">Renew your driver's licence. To renew, replace, change information, pay fines or change your sex designation. New drivers.</p>
                    </div>

                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            What Seniors need to know when Renewing their Ontario ...</a>
                        <p class="url">www.ilolaw.ca › blogpost › what-seniors-need-to-know...
                        </p>
                        <p class="detail">Aug 18, 2020 - Ontario Driver's Licence Renewal rules for Seniors.</p>
                    </div>

                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            Expired driver's licence? No need to worry as Ontario extends ...</a>
                        <p class="url">www.toronto.com › news-story › 9993930-expired-dri...
                        </p>
                        <p class="detail">May 22, 2020 - Ontarians who still wish to renew a driver's licence, licence plate sticker, health card, fishing, hunting or other licence can still do so online.</p>
                    </div>
                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            Ontario extends driver's licence, OHIP card renewals | Toronto ...</a>
                        <p class="url">torontosun.com › news › provincial › ontario-extends-.
                        </p>
                        <p class="detail">Mar 19, 2020 - Ontarians have won a reprieve on renewing their driver's licences, health cards and licence plate stickers during the COVID-19 pandemic.</p>
                    </div>

                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            How To Renew or Replace Your Driver's License | The ...</a>
                        <p class="url">www.humberviewgroup.com › how-to-test-drive-a-car
                        </p>
                        <p class="detail">If your Ontario driver's license needs to be renewed, replaced, reinstated or you just need to update your personal information, you might not know how to do it or ...</p>
                    </div>
                </div>

                <div class="related">
                    <h3 class="googleh3">Searches related to "renew driver's licence"</h3>

                    <table style={{ width: "100%" }}>

                        <tr>
                            <td><a href="/">renew driver's license ontario</a></td>
                            <td><a href="/">online renewal driving licence</a></td>
                        </tr>

                        <tr>
                            <td><a href="/">ontario driver's license renewal covid</a></td>
                            <td><a href="/">what do i need to renew my driver's license</a></td>
                        </tr>

                        <tr>
                            <td><a href="/">renew driver's license online</a></td>
                            <td><a href="/">service ontario driver's license</a></td>
                        </tr>
                        <tr>
                            <td><a href="/">license plate renewal</a></td>
                            <td><a href="/">check drivers license status ontario</a></td>
                        </tr>
                    </table>
                </div>

                <div class="google">
                    <a href="/"><img class="google-img" src={gooogle} alt="" /></a>
                </div>



                <div class="footer">
                    <p>Toronto, ON - From your Internet address - <a href="/">Use precise location</a> - <a href="/">  Learn more</a></p>

                </div>
            </div>
        );
    } else if (path === "/general-services") {
        return (
            <div class="wrapper">

                <div class="header">
                    <img class="tennis" src="https://www.google.com/logos/doodles/2015/start-of-the-2015-us-open-tennis-championship-5723562658758656.2-res.png" alt="" />

                    <input class="search-box" type="text" size="48" placeholder="service ontario" />

                    <a href="/"><img class="mic" src="http://iconshow.me/media/images/ui/ios7-icons/png/512/mic-outline.png" alt="" /></a>

                    <a class="mag-button" href="/"><img class="mag-glass" src="http://www.iconsdb.com/icons/preview/royal-blue/google-web-search-xxl.png" alt="" /></a>

                    <a class="sign-in" href="/">Sign In</a>

                    <a class="nine-icon" href="/"><img class="icon" src="http://flatfrogblog.com/wp-content/uploads/2014/01/app-launcher-150x150.png" alt="" /></a>
                </div>


                <h5>About 549,000 results (0.81 seconds)  </h5>

                <div class="content">



                    <div class="entry">
                        <a class="lead googlelink" href={path}>
                            ServiceOntario | Ontario.ca</a>
                        <p class="url">www.ontario.ca › page › serviceontario</p>
                        <p class="detail">Driver's licences, plate stickers, health cards, birth certificates and other services provided by the Ontario government.</p>
                    </div>

                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            ServiceOntario locations, hours and contact | Ontario.ca</a>
                        <p class="url">www.ontario.ca › locations › serviceontario
</p>
                        <p class="detail">Driver's licences, plate stickers, health cards, birth certificates and other services provided by the Ontario government.</p>
                    </div>

                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            ServiceOntario - College Park Service Counter ...</a>
                        <p class="url">www.torontocentralhealthline.ca › displayservice
</p>
                        <p class="detail">Jul 26, 2013 - One of Jennifer Dewalt's creations, this webpage lets visitors create paintings in ... Build a different website every day for 180 consecutive days.</p>
                    </div>

                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            ServiceOntario - 777 Bay Street, Downtown Core, Toronto, ON</a>
                        <p class="url">www.yelp.ca › biz › serviceontario-toronto

</p>
                        <p class="detail">40 reviews of ServiceOntario "Greetings, We went to Service Ontario branch at the below address for public service on Sept 10, 2019. 777 Bay Street Lower ...</p>
                    </div>

                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            Service Finder</a>
                        <p class="url">www.services.gov.on.ca › ...

</p>
                        <p class="detail">What service are you looking for? ... Search for a ServiceOntario centre that provides the full-suite of health card services ...</p>
                    </div>
                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            Service Ontario Lines Are So Bad In Toronto That One Guy ...</a>
                        <p class="url">www.narcity.com › News › Canada › Ontario › Toronto
</p>
                        <p class="detail">Jun 8, 2020 - Being the only location in the province where drivers can write their G1 and M1 tests, the 777 Bay Street location has been a bit busier than ...</p>
                    </div>

                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            ServiceOntario - Wikipedia</a>
                        <p class="url">en.wikipedia.org › wiki › ServiceOntario</p>
                        <p class="detail">ServiceOntario is an agency of the Ministry of Government and Consumer Services which provides a single point of contact for most government services in the ...</p>
                    </div>
                </div>

                <div class="related">
                    <h3 class="googleh3">Searches related to "777 bay street serviceontario"</h3>

                    <table style={{ width: "100%" }}>

                        <tr>
                            <td><a href="/">service ontario phone number</a></td>
                            <td><a href="/">service ontario open</a></td>
                        </tr>

                        <tr>
                            <td><a href="/">service ontario near me</a></td>
                            <td><a href="/">777 bay street service ontario hours</a></td>
                        </tr>

                        <tr>
                            <td><a href="/">service ontario locations</a></td>
                            <td><a href="/">service ontario contact</a></td>
                        </tr>
                        <tr>
                            <td><a href="/">service ontario windsor</a></td>
                            <td><a href="/">service ontario renew sticker</a></td>
                        </tr>
                    </table>
                </div>

                <div class="google">
                    <a href="/"><img class="google-img" src={gooogle} alt="" /></a>
                </div>



                <div class="footer">
                    <p>Toronto, ON - From your Internet address - <a href="/">Use precise location</a> - <a href="/">  Learn more</a></p>

                </div>
            </div>
        );
    } else {
        return (
            <div class="wrapper">

                <div class="header">
                    <img class="tennis" src="https://www.google.com/logos/doodles/2015/start-of-the-2015-us-open-tennis-championship-5723562658758656.2-res.png" alt="" />

                    <input class="search-box" type="text" size="48" placeholder="service ontario locations" />

                    <a href="/"><img class="mic" src="http://iconshow.me/media/images/ui/ios7-icons/png/512/mic-outline.png" alt="" /></a>

                    <a class="mag-button" href="/"><img class="mag-glass" src="http://www.iconsdb.com/icons/preview/royal-blue/google-web-search-xxl.png" alt="" /></a>

                    <a class="sign-in" href="/">Sign In</a>

                    <a class="nine-icon" href="/"><img class="icon" src="http://flatfrogblog.com/wp-content/uploads/2014/01/app-launcher-150x150.png" alt="" /></a>
                </div>


                <h5>About 549,000 results (0.81 seconds)  </h5>

                <div class="content">



                    <div class="entry">
                        <a class="lead googlelink" href={path}>
                            ServiceOntario locations, hours and contact | Ontario.ca</a>
                        <p class="url">www.ontario.ca › locations › serviceontario
</p>
                        <p class="detail">Find out which ServiceOntario locations are open and what services are available when you visit. ... Toronto. 777 Bay Street · 3300 Bloor Street ...</p>
                    </div>
                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            ServiceOntario | Ontario.ca</a>
                        <p class="url">www.ontario.ca › page › serviceontario
</p>
                        <p class="detail">We urge you not to visit ServiceOntario unless absolutely necessary. Some ServiceOntario locations are closed and others are operating with reduced hours.</p>
                    </div>

                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            ServiceOntario | Ontario.ca</a>
                        <p class="url">www.ontario.ca › page › serviceontario
</p>
                        <p class="detail">Driver's licences, plate stickers, health cards, birth certificates and other services provided by the Ontario government.</p>
                    </div>

                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            ServiceOntario - College Park Service Counter ...</a>
                        <p class="url">www.torontocentralhealthline.ca › displayservice
</p>
                        <p class="detail">Jul 26, 2013 - One of Jennifer Dewalt's creations, this webpage lets visitors create paintings in ... Build a different website every day for 180 consecutive days.</p>
                    </div>

                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            ServiceOntario - 777 Bay Street, Downtown Core, Toronto, ON</a>
                        <p class="url">www.yelp.ca › biz › serviceontario-toronto

</p>
                        <p class="detail">40 reviews of ServiceOntario "Greetings, We went to Service Ontario branch at the below address for public service on Sept 10, 2019. 777 Bay Street Lower ...</p>
                    </div>

                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            crowd, service ontario, written, test, G1, covid-19 | CP24.com</a>
                        <p class="url">www.cp24.com › news › crowd-forms-at-sole-service-ont...
</p>
                        <p class="detail">Jun 5, 2020 - The centre, at 777 Bay Street, is the only location across the province open for drivers to write their level one (G1) test amid the COVID-19 ...</p>
                    </div>
                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            Service Ontario Lines Are So Bad In Toronto That One Guy ...</a>
                        <p class="url">www.narcity.com › News › Canada › Ontario › Toronto
</p>
                        <p class="detail">Jun 8, 2020 - Being the only location in the province where drivers can write their G1 and M1 tests, the 777 Bay Street location has been a bit busier than ...</p>
                    </div>

                    <div class="entry">
                        <a class="lead googlelink" href="/">
                            ServiceOntario - 10 Photos & 41 Reviews - Public Services ...</a>
                        <p class="url">m.yelp.com › biz › serviceontario-toronto
</p>
                        <p class="detail">41 reviews of ServiceOntario "I have to admit it; I actually had a pleasant time in a government regulated office today. ... 777 Bay Street. Toronto, ON M5G 2C8 ...</p>
                    </div>
                </div>

                <div class="related">
                    <h3 class="googleh3">Searches related to "777 bay street serviceontario"</h3>

                    <table style={{ width: "100%" }}>

                        <tr>
                            <td><a href="/">777 bay street service ontario appointment</a></td>
                            <td><a href="/">service ontario open</a></td>
                        </tr>

                        <tr>
                            <td><a href="/">service ontario near me</a></td>
                            <td><a href="/">777 bay street service ontario hours</a></td>
                        </tr>

                        <tr>
                            <td><a href="/">service ontario locations</a></td>
                            <td><a href="/">service ontario contact</a></td>
                        </tr>
                        <tr>
                            <td><a href="/">service ontario phone number</a></td>
                            <td><a href="/">service ontario renew sticker</a></td>
                        </tr>
                    </table>
                </div>

                <div class="google">
                    <a href="/"><img class="google-img" src={gooogle} alt="" /></a>
                </div>



                <div class="footer">
                    <p>Toronto, ON - From your Internet address - <a href="/">Use precise location</a> - <a href="/">  Learn more</a></p>

                </div>
            </div>
        );
    }

}

export default Google;