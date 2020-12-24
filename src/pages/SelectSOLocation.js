import React, { useEffect, useState, useCallback, useRef } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { useHistory } from 'react-router-dom';
import axios from '../axios';
import TopMatches from '../components/TopMatches';
import { Button } from "../ontario-design-system/lib/index";
import Pill from '../components/Pill';
import ProgressBar from '../components/ProgressBar';
import BackButton from '../components/Back';
import locationsJson from '../shared/so-locations.json';

// Maps
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const libraries = ["places"];
const mapContainerStyle = {
    maxWidth: '800px',
    height: '60vh'
};
const options = {
    disableDefaultUI: true,
    zoomControl: true
}
let center;

function SelectSOLocation({ city, lat, lng, service, setSOLocation, publicService }) {
    const [toggleMap, setToggleMap] = useState(false);
    const [markers, setMarkers] = useState([]);
    const [selected, setSelected] = useState(null);

    let history = useHistory();

    useEffect(() => {
        center = { lat, lng }
        getSOLocations();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    // Maps
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    const locationList = (
        <TopMatches city={city} setSOLocation={setSOLocation} publicService={publicService} url="/group-size" redirect={true} />
    );

    let googleMap;
    let view = locationList;
    let buttonLabel = 'View map';

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    let allLocations = [];
    locationsJson.result.pageContext.locations.map(location => (allLocations.push(location)));

    let specifiedLocations = [];
    allLocations.map(so => {
        if (so.city.toLowerCase() === city.toLowerCase()) {
            if (publicService && so.location_type === "SO_CNTR") {
                specifiedLocations.push(so);
            } else if (!publicService) {
                specifiedLocations.push(so);
            }
        }
    });

    function getSOLocations() {
        specifiedLocations.map(async (so) => {
            axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + so.street.split(' ').join('+') + ",+" + so.city.split(' ').join('+') + "+ON&key=" + process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
                .then(response => {
                    setMarkers((current) => [
                        ...current,
                        {
                            lat: response.data.results[0].geometry.location.lat,
                            lng: response.data.results[0].geometry.location.lng,
                            serviceOntario: so
                        },
                    ]);
                })
                .catch(error => console.log(error));

        })
    }

    googleMap = (
        <div >
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                options={options}
                zoom={13}
                onLoad={onMapLoad}
            >
                {markers.map(marker => {
                    return <Marker
                        key={marker.lat}
                        position={{ lat: marker.lat, lng: marker.lng }}
                        onClick={() => { setSelected(marker) }} />
                }
                )}
                {selected ? (<InfoWindow
                    position={{ lat: selected.lat, lng: selected.lng }}
                    onCloseClick={() => { setSelected(null) }} >
                    <div style={{ padding: '1rem 1rem 0 1rem' }} >
                        <strong style={{ textTransform: 'capitalize', fontSize: '1.1rem' }}>
                            <a
                                href={'https://ontario.ca' + selected.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textTransform: 'capitalize' }} >
                                {selected.serviceOntario.url.substring(26, (selected.serviceOntario.url.length - selected.serviceOntario.city.length)).split('-').join(' ')}
                            </a></strong>
                        <p style={{ fontSize: '1.1rem' }} >{selected.serviceOntario.street}</p>
                        <p style={{ fontSize: '1.1rem' }} >{selected.serviceOntario.city}, Ontario</p><br /><br />
                        <Button
                            data={{
                                id: "select-so-location",
                                text: "Select location",
                                skin: "primary",
                            }}
                            onClickHandler={() => {
                                setSOLocation(selected.serviceOntario);
                                history.push("/group-size");
                            }} />
                    </div>
                </InfoWindow>) : null}
            </GoogleMap>
        </div>
    );

    if (!toggleMap) {
        if (!isLoaded) {
            view = <p>Loading...</p>
        } else if (isLoaded) {
            view = googleMap;
        }
        buttonLabel = 'View list';
    } else if (toggleMap) {
        view = locationList;
        buttonLabel = 'View map';
    }

    return (
        <div className="container" style={{ marginBottom: 100 }}>
            <div className="ontario-row">
                <div className="ontario-columns" >
                    <BackButton path={"/select-location"} />
                    <ProgressBar percent={33} step={2} phrase={"Select location"} />
                    <ScrollToTop smooth color={'white'} style={{ backgroundColor: "#6e6e6e", }} />
                    <h1>Select a ServiceOntario location</h1>
                    <p style={{ fontFamily: "Open Sans", marginBottom: 25 }}>
                        <h3>Your location: </h3>{city}, Ontario <br /><br />
                        <h3>Service(s) selected: </h3>{service.map(s => (<Pill text={s.label} />))}
                    </p>
                    <h3>Top location matches</h3>
                    <Button data={{
                        id: "toggle-location-view",
                        text: buttonLabel,
                        skin: "secondary",
                    }}
                        onClickHandler={() => {
                            setToggleMap(!toggleMap);
                        }}
                    />
                    {view}
                </div>
            </div>
        </div>
    );
}

export default SelectSOLocation;