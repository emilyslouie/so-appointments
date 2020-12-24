import React, { useState, useEffect } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { useHistory } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

import { Button, Label, Hint, TextInput, Input, RadioGroup, Radio } from "../ontario-design-system/lib/index";
import BackButton from '../components/Back';
import ProgressBar from '../components/ProgressBar';
import "../css/OtherStyles.css";

import Calendar from '../components/DatePicker'
import MultiSelect from '../components/CustomSelect';
import SingleSelect from '../components/CustomSingleSearch';
import Counters from '../components/Counters';
import servicesJson from '../shared/services.json';
import getCities from '../shared/listOfCities';
import TopMatches from '../components/TopMatches';
// import locationsJson from '../shared/so-locations.json';
import editIcon from '../ontario-design-system/icons/svg/ontario-icon-edit.svg';
import Pill from '../components/Pill';
import Error from '../components/Error/Error';
import ErrorMsg from '../components/Error/ErrorMsg';
import { checkValidity } from '../shared/utility';
import axios from '../axios';

// import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

// const libraries = ["places"];
// const mapContainerStyle = {
//     maxWidth: '800px',
//     height: '60vh'
// };
// const options = {
//     disableDefaultUI: true,
//     zoomControl: true
// }
// let center;
// let specifiedLocations = [];
// let markersTest = [];
// let loadMapp = false;
// let mapView;
// let googleMap;

let confirmedServices = [];
let confirmedFName;
let confirmedLName;
let confirmedEmail;
let confirmedPhone;
let confirmedLang;
let confirmedGroup;
let confirmedAccess;

let formIsValid = true;
let validPhone = true;
let validFName = true;
let validLName = true;
let validEmail = true;
let presentEmail = true;
let presentPhone = true;
let allFields = [];
let emailPhone = [];
let errorBanner;
let phoneEmailErrorBanner;
let ePError = false;

function ReviewDetais({ soLocation, service, date, setDate, time, setTime, firstName, setFName, lastName, setLName, groupSize, setGroupSize, accessibility, setAccessibility, language, setLanguage, email, setEmail, phone, setPhone, resetService, addService, city, setAppCity, setLat, setLng, publicService, setSOLocation }) {
    // Edit services
    const [editServices, setEditServices] = useState(false);
    const [servicesValue, setServicesValue] = useState();
    const [servicesChanged, setServicesChanged] = useState(false);

    // Edit location
    const [editLocation, setEditLocation] = useState(false);
    const [locationChanged, setLocationChanged] = useState(false);
    const [cityValue, setCityValue] = useState();

    // Google maps
    // const [loadMap, setLoadMap] = useState(false);
    // const [markers, setMarkers] = useState([]);
    // const [selected, setSelected] = useState(null);

    // Edit date/time
    const [editDate, setEditDate] = useState(false);
    const [changedDate, setChangedDate] = useState(false);
    const [readableTime, setReadableTime] = useState(time);

    // Edit name
    const [editName, setEditName] = useState(false);

    // Edit group size
    const [editGroup, setEditGroup] = useState(false);

    // Edit accessibility
    const [editAccess, setEditAccess] = useState(false);

    // Edit email
    const [editEmail, setEditEmail] = useState(false);

    // Edit phone
    const [editPhone, setEditPhone] = useState(false);

    // Edit language
    const [editLang, setEditLang] = useState(false);

    const [showError, setShowError] = useState(false);

    // Recaptcha
    const [recaptcha, setRecaptcha] = useState(false);


    

    if (!showError) {
        errorBanner = ""
    } else if (showError) {
        errorBanner = <Error fields={allFields} message="Please check your entries in these fields:" />
    }

    if (!ePError) {
        phoneEmailErrorBanner = ""
    } else if (ePError) {
        phoneEmailErrorBanner = <Error fields={emailPhone} message="Please enter at least one of the following:" />
    }

    function handleCheckValidity(fields) {
        fields.map(field => {
            switch (field) {
                case "f-name":
                    validFName = checkValidity(firstName, 'fName');
                    break;
                case "l-name":
                    validLName = checkValidity(confirmedLName, 'lName');
                    break;
                case "email":
                    if (email === '') {
                        presentEmail = false;
                        validEmail = true;
                    } else {
                        validEmail = checkValidity(confirmedEmail, 'email');
                        presentEmail = true;
                    }
                    break;
                case "phone":
                    if (confirmedPhone !== '') {
                        validPhone = checkValidity(confirmedPhone, 'phone');
                        presentPhone = true;
                    } else if (confirmedPhone === '') {
                        validPhone = true;
                        presentPhone = false;
                    }
                    break;
                default:
                    console.log("validation default");
            }
        })
        

        allFields = [
            { valid: validFName, label: "Please enter a first name", id: "first-name" },
            { valid: validLName, label: "Please enter a last name", id: "first-name" },
            { valid: validEmail, label: "Please enter a valid email", id: "email"},
            { valid: validPhone, label: "Please enter a valid phone number", id: "phone" }
        ];

        emailPhone = [
            { valid: false, label: "Email", id: "email" },
            { valid: false, label: "Phone", id: "number" }
        ];

        ePError = (!((presentEmail || presentPhone) && true));
        formIsValid = (validFName && validLName && validEmail && validPhone && true);
        setShowError(!(validFName && validLName && validEmail && validPhone && true));
        
    }

    function handleUpdate() {
        setShowError(!formIsValid);
        if (formIsValid && recaptcha) {
            console.log("form is valid");

            postToDB();
            history.push("/success");
        } else if (!formIsValid) {
            console.log("form not valid");

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }


    let history = useHistory();
    const locations = getCities();

    let services = [];
    servicesJson.map(s => services.push(s));

    useEffect(() => {

        setCityValue(city);
        setServicesValue(service);
        confirmedServices = service;
        setReadableTime(convertTime(time));

        confirmedFName = firstName;
        confirmedLName = lastName;
        confirmedEmail = email;
        confirmedPhone = phone;
        confirmedLang = language;
        confirmedGroup = groupSize;
        confirmedAccess = accessibility;
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    // async function getCityLatLng(selectedCity) {
    //     console.log(selectedCity)
    //     setAppCity(selectedCity.label);
    //     setCityValue(selectedCity);
    //     axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + selectedCity.label.split(' ').join('+') + "+ON&key=" + process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
    //         .then(response => {
    //             setLat(response.data.results[0].geometry.location.lat);
    //             setLng(response.data.results[0].geometry.location.lng);
    //             center = { lat: response.data.results[0].geometry.location.lat, lng: response.data.results[0].geometry.location.lng }
    //             getListOfSO(selectedCity.label);
    //         })
    //         .catch(error => console.log(error));
    // }

    // function getListOfSO(cityValueTest) {
    //     console.log("Line 160, getListOfSO, value: " + cityValueTest)
    //     allLocations.map(so => {
    //         if (so.city.toLowerCase() === cityValueTest.toLowerCase()) {
    //             if (publicService && so.location_type === "SO_CNTR") {
    //                 specifiedLocations.push(so);
    //             } else if (!publicService) {
    //                 specifiedLocations.push(so);
    //             }
    //         }
    //     });
    //     getMarkers();
    // }

    // async function getMarkers() {
    //     specifiedLocations.map(async (so) => {
    //         console.log("getSOLocations");
    //         axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + so.street.split(' ').join('+') + ",+" + so.city.split(' ').join('+') + "+ON&key=" + process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
    //             .then(response => {
    //                 console.log(response);
    //                 markersTest.push({
    //                     lat: response.data.results[0].geometry.location.lat,
    //                     lng: response.data.results[0].geometry.location.lng,
    //                     serviceOntario: so
    //                 });
    //                 console.log("Finished getting markers");
    //                 loadMapp = true;
    //                 loadthemappls();
    //             })
    //             .catch(error => console.log(error));
    //     });
    // }

    // function loadthemappls() {
    //     console.log("About to load googleMap, loadMapp: " + loadMap);
    //     googleMap = (
    //         <div >
    //             <GoogleMap
    //                 mapContainerStyle={mapContainerStyle}
    //                 center={center}
    //                 options={options}
    //                 zoom={13}
    //                 onLoad={onMapLoad} >

    //                 {markersTest.map(marker => {
    //                     return <Marker
    //                         key={marker.lat}
    //                         position={{ lat: marker.lat, lng: marker.lng }}
    //                         onClick={() => { setSelected(marker); }} />
    //                 }
    //                 )}
    //                 {selected ? (<InfoWindow
    //                     position={{ lat: selected.lat, lng: selected.lng }}
    //                     onCloseClick={() => { setSelected(null) }} >
    //                     <div style={{ padding: '1rem 1rem 0 1rem' }} >
    //                         <strong style={{ textTransform: 'capitalize', fontSize: '1.1rem' }}>
    //                             <a
    //                                 href={'https://ontario.ca' + selected.url}
    //                                 target="_blank"
    //                                 rel="noopener noreferrer"
    //                                 style={{ textTransform: 'capitalize' }} >
    //                                 {selected.serviceOntario.url.substring(26, (selected.serviceOntario.url.length - selected.serviceOntario.city.length)).split('-').join(' ')}
    //                             </a></strong>
    //                         <p style={{ fontSize: '1.1rem' }} >{selected.serviceOntario.street}</p>
    //                         <p style={{ fontSize: '1.1rem' }} >{selected.serviceOntario.city}, Ontario</p><br /><br />
    //                         <Button
    //                             data={{
    //                                 id: "select-so-location",
    //                                 text: "Select location",
    //                                 skin: "primary",
    //                             }}
    //                             onClickHandler={() => {
    //                                 console.log(selected.serviceOntario);
    //                             }} />
    //                     </div>
    //                 </InfoWindow>) : null}
    //             </GoogleMap>
    //         </div>
    //     );

    //     if (isLoaded) {
    //         mapView = googleMap;
    //         setLoadMap(true);
    //         console.log("here");
    //         console.log(mapView == googleMap);
    //     }

    // }

    function onRecaptchaChange(value) {
        console.log("Captcha value:", value);
        setRecaptcha(true);
    }

    // Service edit
    function handleChangeService(value) {
        resetService([]);
        setServicesValue(value);
    }

    function findSize(gs) {
        // for (let i = 0; i < confirmedGroup.length; i++) {
        //     console.log(confirmedGroup[i])
        //     console.log(confirmedGroup[i].value)
        //     console.log(confirmedGroup[i].size)
        //     if (confirmedGroup[i].value === gs) {
        //         console.log("HERE!!!!")
        //         return (confirmedGroup[i].size);
        //     }
        // }
        let size = -99999;
        Object.values(confirmedGroup).forEach(function (element) {
            if (element.value === gs) {
                size = element.size;
            }
        })
        return size;
    }

    function confirmServicesHandler() {
        setServicesChanged(true);

        if (servicesValue != null && servicesValue.length > 0) {
            confirmedServices = [];
            for (let j = 0; j < servicesValue.length; j++) {
                addService(servicesValue[j]);
                confirmedServices.push(servicesValue[j]);
            }


            let servicesCopy = [...servicesValue];
            servicesCopy.forEach(function (element, index) {
                let elementValue = element.value;
                let size = findSize(elementValue);
                element.size = (size === -99999 ? 0 : size);
                element.id = index;
            })
            setGroupSize(servicesCopy);
            confirmedGroup = servicesCopy;
        }
    }

    function cancelEditServicesHandler() {
        setServicesValue(confirmedServices);
    }

    function confirmCancelServicesHandler() {
        if (confirmedServices != null && confirmedServices.length > 0) {
            for (let j = 0; j < confirmedServices.length; j++) {
                addService(confirmedServices[j]);
            }
        }
    }

    // Name edit
    function confirmNameHandler() {
        setFName(firstName);
        confirmedFName = firstName;

        setLName(lastName);
        confirmedLName = lastName;
    }

    function cancelEditNameHandler() {
        setFName(confirmedFName);
        setLName(confirmedLName);
    }

    // Email edit
    function confirmEmailHandler() {
        setEmail(email);
        confirmedEmail = email;
    }

    function cancelEditEmailHandler() {
        setEmail(confirmedEmail);
    }

    // Phone edit
    function confirmPhoneHandler() {
        setPhone(phone);
        confirmedPhone = phone;
    }

    function cancelEditPhoneHandler() {
        setPhone(confirmedPhone);
    }

    // Language edit
    function confirmLangHandler() {
        setLanguage(language);
        confirmedLang = language;
    }

    function cancelEditLangHandler() {
        setLanguage(confirmedLang);
    }

    // Group size
    const saveUpdate = (serviceId, newSize) => {
        let newArray = { ...groupSize };
        newArray[serviceId].size = newSize;
        setGroupSize(newArray);
    }

    function confirmGroupSizeHandler() {
        setGroupSize(groupSize);
        confirmedGroup = groupSize;
    }

    function cancelEditGroupSizeHandler() {
        setGroupSize(confirmedGroup);
    }

    // Accessibility
    function confirmAccessHandler() {
        setAccessibility(accessibility);
        confirmedAccess = accessibility;
    }

    function cancelEditAccessHandler() {
        setAccessibility(confirmedAccess);
    }

    // Location edit
    // const mapRef = useRef();
    // const onMapLoad = useCallback((map) => {
    //     mapRef.current = map;
    // }, []);

    // const { isLoaded, loadError } = useLoadScript({
    //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    //     libraries,
    // });

    // let allLocations = [];
    // locationsJson.result.pageContext.locations.map(location => (allLocations.push(location)));

    function convertTime(time) {
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
        if (small === 0) {
            small = "00";
        }
        result = big + ":" + small;
        if (pm === true) {
            result += " PM";
        }
        else {
            result += " AM";
        }
        return result;
    }

    const timeOptions = (
        <div style={{ display: 'flex', flexDirection: 'column' }} >
            <div style={{ display: 'flex', flexDirection: 'row' }} >
                <Button data={{
                    id: "toggle-location-view",
                    text: "9:00 AM",
                    skin: "secondary",
                }}
                    onClickHandler={() => {
                        setLocationChanged(false);
                        setChangedDate(false);
                        setEditDate(prev => !prev);
                        setReadableTime(convertTime("1300",));
                    }}
                />
                <div style={{ width: '1rem' }} ></div>
                <Button data={{
                    id: "toggle-location-view",
                    text: "10:15 AM",
                    skin: "secondary",
                }}
                    onClickHandler={() => {
                        setLocationChanged(false);
                        setChangedDate(false);
                        setEditDate(prev => !prev);
                        setReadableTime(convertTime("1415"));
                    }}
                />
            </div>
            <div style={{ display: 'flex', flexBasis: 'row' }} >
                <Button data={{
                    id: "toggle-location-view",
                    text: "11:30 AM",
                    skin: "secondary",
                }}
                    onClickHandler={() => {
                        setLocationChanged(false);
                        setChangedDate(false);
                        setEditDate(prev => !prev);
                        setReadableTime(convertTime("1530"));
                    }}
                />
                <div style={{ width: '1rem' }} ></div>
                <Button data={{
                    id: "toggle-location-view",
                    text: "1:00 PM",
                    skin: "secondary",
                }}
                    onClickHandler={() => {
                        setLocationChanged(false);
                        setChangedDate(false);
                        setEditDate(prev => !prev);
                        setReadableTime(convertTime("1700"));
                    }}
                />
            </div>
            <div style={{ display: 'flex', flexBasis: 'row' }} >
                <Button data={{
                    id: "toggle-location-view",
                    text: "1:15 PM",
                    skin: "secondary",
                }}
                    onClickHandler={() => {
                        setLocationChanged(false);
                        setChangedDate(false);
                        setEditDate(prev => !prev);
                        setReadableTime(convertTime("1715"));
                    }}
                />
                <div style={{ width: '1rem' }} ></div>
                <Button data={{
                    id: "toggle-location-view",
                    text: "3:30 PM",
                    skin: "secondary",
                }}
                    onClickHandler={() => {
                        setLocationChanged(false);
                        setChangedDate(false);
                        setEditDate(prev => !prev);
                        setReadableTime(convertTime("1930"));
                    }}
                />
            </div>
        </div>
    )

    let form = {
        name: firstName + " " + lastName,
        email: email,
        phone: phone,
        visitors: groupSize,
        accessibility: accessibility,
        service: service,
        serviceOntarioLocation: soLocation,
        date: date,
        time: time,
        language: language
    }

    const postToDB = () => {
        axios.post("https://so-appointments.firebaseio.com/bookedAppointments.json", form)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    return (
        <div className="container">
            <div className="ontario-row ontario-margin-bottom-64-!">
                <div className="ontario-columns">
                    <ScrollToTop smooth color={'white'} style={{ backgroundColor: "#6e6e6e", }} />
                    <BackButton path={"/contact-information"} />
                    <ProgressBar percent={100} step={6} phrase={"Review details"} />
                    <h1>Review your details</h1>
                    {/* Services */}
                    {!editServices ?
                        <div className="ontario-margin-bottom-32-!" id="services" >
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                                <h3>Service(s) selected <span className="pseudolink">(<img className="iconlink" src={editIcon} /> <a onClick={() => setEditServices(prev => !prev)} className="ontario-link">Edit</a>)</span></h3>
                            </div>
                            {service.map(s => (<Pill text={s.label} key={s.label} />))}
                        </div>
                        :
                        <div className="ontario-margin-bottom-32-!">
                            <MultiSelect defaultValue={confirmedServices} placeholder="Select service(s)" options={services} value={servicesValue} onChange={handleChangeService} />
                            <a onClick={() => { cancelEditServicesHandler(); confirmCancelServicesHandler(); setEditServices(prev => !prev); }} className="ontario-link" style={{ marginRight: '3rem' }} >Cancel</a>
                            <Button data={{
                                id: "confirm-details",
                                text: "Save",
                                skin: "primary",
                            }}
                                onClickHandler={() => {
                                    confirmServicesHandler();
                                    setEditServices(prev => !prev);
                                }}
                            />
                        </div>
                    }
                    <div className="ontario-margin-bottom-32-!">
                        <hr />
                    </div>
                    {/* Location */}
                    {!editLocation ?
                        <div className="ontario-margin-bottom-32-!">
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                                <h3>Location selected <span className="pseudolink">(<img className="iconlink" src={editIcon} /> <a onClick={() => setEditLocation(prev => !prev)} className="ontario-link">Edit</a>)</span></h3>

                            </div>
                            <p style={{ textTransform: 'capitalize' }} >{soLocation.url.substring(26, (soLocation.url.length - soLocation.city.length)).split('-').join(' ')} ({soLocation.city})</p>
                        </div>
                        :
                        <div className="ontario-margin-bottom-32-!">
                            <Label data={{ text: "Edit location" }} />
                            <Hint data={{
                                hintText: "Try typing in a municipality such as \"Waterloo\" or \"Ajax\""
                            }} />
                            <SingleSelect
                                defaultValue={cityValue}
                                value={cityValue}
                                placeholder="Select"
                                options={locations}
                                onChange={(value) => { setAppCity(value.label); setCityValue(value.label); }} // getCityLatLng(value);
                            />
                            {/* {mapView} Not working :( */}
                            <TopMatches city={cityValue} setSOLocation={setSOLocation} publicService={publicService} link={"#"} redirect={false} onClickFunction={() => { setEditLocation(prev => !prev); setLocationChanged(true); }} />
                        </div>
                    }
                    <div className="ontario-margin-bottom-32-!">
                        <hr />
                    </div>
                    {/* Appointment Time */}
                    {!editDate ?
                        <div>
                            <div className="ontario-margin-bottom-32-!" id="date-time">
                                {locationChanged ? <Error fields={[{ valid: false, label: "Select new date and time", id: 'date-time' }]} message="Please edit the appointment time for the new location selected" /> : ""}
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                                    <h3>Appointment date and time <span className="pseudolink">(<img className="iconlink" src={editIcon} /> <a onClick={() => { setEditDate(prev => !prev); setLocationChanged(true); console.log(locationChanged); }} className="ontario-link">Edit</a>)</span></h3>
                                </div>
                                <h6>Date:</h6>
                                {locationChanged ? <span style={{ color: 'red' }}>Please select a new date</span> : date.toString().substr(3, 12)}<br /><br />
                                <h6>Time:</h6>
                                {locationChanged ? <span style={{ color: 'red' }}>Please select a new time</span> : readableTime}<br />
                            </div>
                            <div className="ontario-margin-bottom-32-!">
                                <hr />
                            </div>
                        </div>
                        :
                        <div className="ontario-margin-bottom-32-!" id="date-time">
                            <Label data={{ text: "Select a new date and time" }} />
                            <Label data={{ text: "Select date" }} />
                            <Hint data={{
                                hintText: "For example: mm-dd-yyyy"
                            }} />
                            <div className="ontario-margin-bottom-16-!" style={{ width: '50vw' }} >
                                <Calendar setDate={setDate} optionalFunction={date => { setChangedDate(true) }} />
                            </div>
                            <Label
                                data={{
                                    text: "Select an available time"
                                }} />
                            {(changedDate) ? timeOptions : "Please select a date first."}
                        </div>
                    }
                    {/* Contact Info */}
                    <div className="ontario-margin-bottom-32-!">
                        {errorBanner}
                        {phoneEmailErrorBanner}
                        <h3>Contact information</h3>
                        {!editName ?
                            <div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} id="first-name">
                                    <h6>Name <span className="pseudolink">(<img className="iconlink2" src={editIcon} /> <a onClick={() => setEditName(prev => !prev)} className="ontario-link">Edit</a>)</span></h6>
                                </div>
                                {(firstName == '') ? "None" : firstName} {(lastName == '') ? "None" : lastName}<br /><br />
                            </div>
                            :
                            <div >
                                <h6>Name </h6>
                                <TextInput
                                    data={{
                                        id: "first-name",
                                        labelText: "First name",
                                        type: "text",
                                        value: firstName,
                                    }}
                                    onChange={event => { setFName(event.target.value);}}
                                />
                                <TextInput
                                    data={{
                                        id: "last-name",
                                        labelText: "Last name",
                                        type: "text",
                                        value: lastName,
                                    }}
                                    onChange={event => { setLName(event.target.value);}}
                                />
                                <a onClick={() => { cancelEditNameHandler(); setEditName(prev => !prev); }} className="ontario-link" style={{ marginRight: '3rem' }} >Cancel</a>
                                <Button data={{
                                    id: "confirm-details",
                                    text: "Save",
                                    skin: "primary",
                                }}
                                    onClickHandler={() => {
                                        handleCheckValidity(["f-name", "l-name"]);
                                        confirmNameHandler();
                                        handleCheckValidity(["f-name", "l-name"]); // Added again bc of fdsdfsklfdsjklafjkl
                                        setEditName(prev => !prev);
                                    }}
                                />
                            </div>
                        }

                        {/* Group size */}

                        {!editGroup ?
                            <div className="ontario-margin-bottom-32-!" id="services" >
                                {servicesChanged ? <Error fields={[{ valid: false, label: "Confirm individuals per service", id: 'group' }]} message="Please ensure that the number of individuals who require the service(s) below is accurate." /> : ""}
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                                    <h6>Number of people per service <span className="pseudolink">(<img className="iconlink" src={editIcon} /> <a onClick={() => setEditGroup(prev => !prev)} className="ontario-link">Edit</a>)</span></h6>
                                </div>
                                {Object.keys(groupSize).map(s => {
                                    return <p>{groupSize[s].label}: {groupSize[s].size + 1}</p>
                                })}
                            </div>
                            :
                            <div className="ontario-margin-bottom-32-!">
                                <h6>Number of people per service</h6>
                                {Object.keys(groupSize).map(s => {

                                    return <Counters service={groupSize[s]} saveUpdate={(id, size) => saveUpdate(id, size)} />
                                })}
                                <a onClick={() => { cancelEditGroupSizeHandler(); setEditGroup(prev => !prev); }} className="ontario-link" style={{ marginRight: '3rem' }} >Cancel</a>
                                <Button data={{
                                    id: "confirm-details",
                                    text: "Save",
                                    skin: "primary",
                                }}
                                    onClickHandler={() => {
                                        setServicesChanged(false);
                                        confirmGroupSizeHandler();
                                        setEditGroup(prev => !prev);
                                    }}
                                /><br /><br />
                            </div>
                        }

                        {!editLang ?
                            <div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                                    <h6>Language preference <span className="pseudolink">(<img className="iconlink2" src={editIcon} /> <a onClick={() => setEditLang(prev => !prev)} className="ontario-link">Edit</a>)</span></h6>
                                </div>
                                {language === '' ? "English" : language}<br /><br />
                            </div>
                            :
                            <div>
                                <h6>Language preference</h6>
                                <RadioGroup >
                                    <Radio val="English" defaultChecked={(confirmedLang === "English" || confirmedLang === '') ? true : false} name="language" onChange={() => setLanguage("English")} />
                                    <Radio val="French" defaultChecked={confirmedLang === "French" ? true : false} name="language" onChange={() => setLanguage("French")} />
                                </RadioGroup>
                                <a onClick={() => { cancelEditLangHandler(); setEditLang(prev => !prev); }} className="ontario-link" style={{ marginRight: '3rem' }} >Cancel</a>
                                <Button data={{
                                    id: "confirm-details",
                                    text: "Save",
                                    skin: "primary",
                                }}
                                    onClickHandler={() => {
                                        confirmLangHandler();
                                        setEditLang(prev => !prev);
                                    }}
                                />
                            </div>
                        }
                        {!editEmail ?
                            <div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} id="email" >
                                    <h6>Email <span className="pseudolink">(<img className="iconlink2" src={editIcon} /> <a onClick={() => setEditEmail(prev => !prev)} className="ontario-link">Edit</a>)</span></h6>
                                </div>
                                {(email === '') ? "None" : email}<br /><br />
                            </div>
                            :
                            <div id="email" >
                                <h6>Email</h6>
                                <div className={!validEmail ? "error-content" : ""}>
                                {validEmail ? (<Hint data={{ hintText: "For example person@email.com" }} />) : (<ErrorMsg msg="Please enter a valid email address. For example, john.doe@gmail.com" />) }
                               
                                    <Input
                                        data={{
                                            id: "email",
                                            type: "email",
                                            value: email,
                                        }}
                                        onChange={event => { setEmail(event.target.value);}}
                                    />
                                </div>
                                <a onClick={() => { cancelEditEmailHandler(); setEditEmail(prev => !prev); }} className="ontario-link" style={{ marginRight: '3rem' }} >Cancel</a>
                                <Button
                                    data={{
                                        id: "confirm-details",
                                        text: "Save",
                                        skin: "primary",
                                    }}
                                    onClickHandler={() => {
                                        handleCheckValidity(["email"]);
                                        confirmEmailHandler();
                                        handleCheckValidity(["email"]); // The second one is added because this shit is delayed
                                        if (validEmail) {
                                           setEditEmail(prev => !prev); 
                                        }
                                    }}
                                />
                            </div>
                        }
                        {!editPhone ?
                            <div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} id="phone" >
                                    <h6>Phone number <span className="pseudolink">(<img className="iconlink2" src={editIcon} /> <a onClick={() => setEditPhone(prev => !prev)} className="ontario-link">Edit</a>)</span></h6>
                                </div>
                                {(phone == '') ? "None" : phone}<br /><br />
                            </div>
                            :
                            <div>
                                <h6 id="phone" >Phone number </h6>
                                <div className={!validPhone ? "error-content" : ""}>
                                {validPhone? (<Hint data={{ hintText: "For example 1234567890" }} />) : (<ErrorMsg msg="Please enter a valid phone number. For example 1234567890" />) }
                                <Input
                                    data={{
                                        id: "number",
                                        type: "number",
                                        value: phone,
                                    }}
                                    onChange={event => { setPhone(event.target.value);}}
                                />
                                </div>
                                <a onClick={() => { cancelEditPhoneHandler(); setEditPhone(prev => !prev); }} className="ontario-link" style={{ marginRight: '3rem' }} >Cancel</a>
                                <Button
                                    data={{
                                        id: "confirm-details",
                                        text: "Save",
                                        skin: "primary",
                                    }}
                                    onClickHandler={() => {
                                        handleCheckValidity(["phone"]);
                                        confirmPhoneHandler();
                                        handleCheckValidity(["phone"]); // fasfdasfasdasfdas
                                        if (validPhone) {
                                            setEditPhone(prev => !prev);
                                        }
                                    }}
                                />
                            </div>
                        }

                        {!editAccess ?
                            <div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} id="phone" >
                                    <h6>Accommodation requests <span className="pseudolink">(<img className="iconlink2" src={editIcon} /> <a onClick={() => setEditAccess(prev => !prev)} className="ontario-link">Edit</a>)</span></h6>
                                </div>
                                {(accessibility == '') ? "None" : accessibility}<br />
                            </div>
                            :
                            <div>
                                <h6>Accommodation requests</h6>
                                <p className="ontario-margin-bottom-16-!" >If you will need any help or support during your appointment, please feel free to list them below. </p>
                                <Hint
                                    data={{
                                        hintText: "For example, sign language interpreter, borrowing a wheelchair"
                                    }}
                                />
                                <textarea class="ontario-input ontario-textarea" name="text-area-example" id="text-area-example" type="text" onChange={e => setAccessibility(e.target.value)}></textarea>
                                <a onClick={() => { cancelEditAccessHandler(); setEditAccess(prev => !prev); }} className="ontario-link" style={{ marginRight: '3rem' }} >Cancel</a>
                                <Button
                                    data={{
                                        id: "confirm-details",
                                        text: "Save",
                                        skin: "primary",
                                    }}
                                    onClickHandler={() => {
                                        confirmAccessHandler();
                                        setEditAccess(prev => !prev);
                                    }}
                                />
                            </div>
                        }
                    </div>
                    <div className="ontario-margin-bottom-32-!">
                        <hr />
                    </div>
                    {/* Confirm */}
                    <div className="ontario-margin-bottom-32-!">
                        <p>By clicking the button, Confirm and book, you acknowledge that the details you have provided are correct.</p>
                    </div>
                    <div className="ontario-margin-bottom-32-!">
                        <ReCAPTCHA className="ontario-marginontario-margin-bottom-32-!" sitekey="6LcZ49YZAAAAAIkmZrrdE6Pi19NghwTIl6X2DDV6" onChange={onRecaptchaChange} />
                    </div>
                    <Button data={{
                        id: "confirm-details",
                        text: "Confirm and book",
                        skin: "primary",
                    }}
                        onClickHandler={() => {
                            handleUpdate();
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default ReviewDetais;