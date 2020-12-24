import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";

import axios from '../axios';
import { Button, Label, Hint } from "../ontario-design-system/lib/index";
import getCities from '../shared/listOfCities';
import ProgressBar from '../components/ProgressBar';
import BackButton from '../components/Back';
import SingleSearch from '../components/CustomSingleSearch';

function SelectLocation({ city, setCity, setLat, setLng }) {
    const [value, setValue] = useState('');
    const history = useHistory();
    const locations = getCities();

    useEffect(() => {
        setValue(city);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    const onChange = value => {
        setCity(value.label);
        setValue(value);
        axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + value.label.split(' ').join('+') + "+ON&key=" + process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
            .then(response => {
                setLat(response.data.results[0].geometry.location.lat);
                setLng(response.data.results[0].geometry.location.lng);
            })
            .catch(error => console.log(error));
    }

    function findCurrentLocation() {
        navigator.geolocation.getCurrentPosition(async (position) => {
            axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&key=" + process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
                .then(response => {
                    console.log(response.data.results[0]);
                    setValue({ value: response.data.results[0].address_components[2].long_name, label: response.data.results[0].address_components[2].long_name });
                    setCity(response.data.results[0].address_components[2].long_name);
                    setLat(response.data.results[0].geometry.location.lat);
                    setLng(response.data.results[0].geometry.location.lng);
                })
                .catch(error => console.log(error));
        }, () => null);
    }

    let styles = {};
    let classes = "ontario-button";

    if (!value) {
        styles = {
            backgroundColor: '#BDBDBD',
            color: 'white',
            cursor: 'not-allowed',
            marginTop: '3vh'
        }
    } else if (value) {
        styles = { marginTop: '3vh' };
        classes = "ontario-button ontario-button--primary";
    }

    const confirmHandler = () => {
        if (value) {
            history.push("/select-so-location");
        }
    }

    return (
        <div className="container">
            <div className="ontario-row ontario-margin-bottom-64-!">
                <div className="ontario-columns">
                    <BackButton path={"/select-service"} />
                    <ProgressBar percent={33} step={2} phrase={"Select location"} />
                    <ScrollToTop smooth color={'white'} style={{ backgroundColor: "#6e6e6e", }} />
                    <h1>Search for a ServiceOntario location</h1>
                    <p className="ontario-margin-bottom-24-!">
                        Search for a ServiceOntario location that offers the services you need or <a className="ontario-link" href="/general-locations" target="_blank" >view a list of all locations</a>.
                    </p>
                    <Label
                        data={{
                            text: "Location"
                        }} />
                    <Hint data={{
                        hintText: "Try typing in a municipality such as \"Waterloo\" or \"Ajax\""
                    }} />
                    <SingleSearch
                        defaultValue={value}
                        value={value}
                        placeholder="Select"
                        options={locations}
                        onChange={onChange}
                    />
                    <p className="ontario-margin-bottom-12-!"><a className="ontario-link2 " onClick={() => findCurrentLocation()} >Use current location</a></p>
                    <a class={classes} style={styles} onClick={() => confirmHandler()}>
                        Find locations
                    </a><br />
                </div>
            </div>
        </div>
    );
}

export default SelectLocation;