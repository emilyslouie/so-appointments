import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./ontario-design-system/styles/ds-theme.css";

import { Header } from "./ontario-design-system/lib/index";
import ServiceOntarioHeader from "./components/ServiceOntario";
import Footer from "./components/Footer";
import Landing from './pages/Landing';

import Google from "./pages/Google";
import LocationSpecific from './pages/LocationSpecific';
import ServiceSpecific from './pages/ServiceSpecific';

import LocationsGeneral from './pages/LocationsGeneral';
import ServicesGeneral from './pages/ServicesGeneral';

import StartPage from './pages/Start';

import SelectService from './pages/SelectService';
import BookOnline from './pages/BookOnline';
import SelectLocation from './pages/SelectLocation';
import SelectSOLocation from './pages/SelectSOLocation';
import SelectDate from './pages/Calendar';
import GroupSize from './pages/GroupSize';
import ContactInfo from './pages/ContactInformation';

import ConfirmLocation from './pages/ConfirmLocation';
import ReviewDetails from './pages/ReviewDetails';
import Success from './pages/Success';


function App() {
  // States
  const [service, setService] = useState([]); // Services chosen
  const [publicService, setPublicService] = useState(false); // 1+ Services chosen can only be done at public locations
  const [city, setCity] = useState(''); // City
  const [lat, setLat] = useState(); // Latitude
  const [lng, setLng] = useState(); // Longitude
  const [serviceOntario, setServiceOntario] = useState({}); // ServiceOntario location


  const [groupSize, setGroupSize] = useState([]) // Group size
  const [groupService, setGroupService] = useState(false); // Multiple people require the same service
  const [accessibility, setAccessibility] = useState("") // Accessibility note

  const [firstName, setFirstName] = useState(''); // First name
  const [lastName, setLastName] = useState(''); // Last name
  const [language, setLanguage] = useState(''); // Language preference
  const [email, setEmail] = useState(''); // Email
  const [phone, setPhone] = useState(''); // Phone
  const [time, setTime] = useState(''); // Time
  const [date, setDate] = useState(); // Date

  const [firstType, setFirstType] = useState(""); // Service ----- UNUSED -----
  const [firstSpecific, setFirstSpecific] = useState(""); // SO Location ----- UNUSED -----

  // Update array of services
  const addServiceHandler = addedService => {
    if (!service.includes(addedService)) {
      setService(prevServices => [...prevServices, addedService]);
    }
  }
  const removeServiceHandler = removedService => {
    setService(prevServices => {
      let prev = [...prevServices];
      let index = prev.indexOf(removedService);
      prev.splice(index, 1);
      setService([...prev]);
    })
  }

  return (
    <div className="row">
      <Router>
        <Switch>

          {/* Google pages */}

          <Route exact path="/google-location">
            <Google path={"/specific-location"} />
          </Route>
          <Route exact path="/google-service">
            <Google path={"/specific-service"} />
          </Route>

          <Route exact path="/google-locations">
            <Google path={"/general-locations"} />
          </Route>
          <Route exact path="/google-services">
            <Google path={"/general-services"} />
          </Route>

          {/* Entry points */}

          <Route exact path="/general-locations">
            <Header noMenu={true} data={{ language: "en" }} />
            <ServiceOntarioHeader inABS={false} />
            <LocationsGeneral setFirstType={setFirstType} setFirstSpecific={setFirstSpecific} />
            <Footer />
          </Route>
          <Route exact path="/specific-location">
            <Header noMenu={true} data={{ language: "en" }} />
            <ServiceOntarioHeader inABS={false} />
            <LocationSpecific setFirstType={setFirstType} setFirstSpecific={setFirstSpecific} setCity={setCity} setSOLocation={setServiceOntario} />
            <Footer />
          </Route>
          <Route path="/general-services">
            <Header noMenu={true} data={{ language: "en" }} />
            <ServiceOntarioHeader inABS={false} />
            <ServicesGeneral setFirstType={setFirstType} setFirstSpecific={setFirstSpecific} />
            <Footer />
          </Route>
          <Route exact path="/specific-service">
            <Header noMenu={true} data={{ language: "en" }} />
            <ServiceOntarioHeader inABS={false} />
            <ServiceSpecific setFirstType={setFirstType} addService={addServiceHandler} />
            <Footer />
          </Route>

          {/* ABS Landing */}

          <Route exact path="/abs">
            <Header noMenu={true} data={{ language: "en" }} />
            <ServiceOntarioHeader inABS={true} />
            <StartPage />
            <Footer />
          </Route>

          {/* Select a service */}

          <Route path="/select-service">
            <Header noMenu={true} data={{ language: "en" }} />
            <ServiceOntarioHeader inABS={true} />
            <SelectService
              service={service}
              addService={addServiceHandler}
              setPublicService={setPublicService}
              resetService={setService}
              city={city}
              soLocation={serviceOntario}
            />
            <Footer />
          </Route>
          <Route path="/online-services">
            <Header noMenu={true} data={{ language: "en" }} />
            <ServiceOntarioHeader inABS={true} />
            <BookOnline service={service} city={city} soLocation={serviceOntario} />
            <Footer />
          </Route>

          {/* Select Location */}

          <Route path="/select-location">
            <Header noMenu={true} data={{ language: "en" }} />
            <ServiceOntarioHeader inABS={true} />
            <SelectLocation city={city} setCity={setCity} service={service} setLat={setLat} setLng={setLng} />
            <Footer />
          </Route>
          <Route path="/select-so-location">
            <Header noMenu={true} data={{ language: "en" }} />
            <ServiceOntarioHeader inABS={true} />
            <SelectSOLocation
              city={city}
              lat={lat}
              lng={lng}
              setCity={setCity}
              service={service}
              publicService={publicService}
              setSOLocation={setServiceOntario} />
            <Footer />
          </Route>
          {/* <Route path="/confirm-location">
            <Header noMenu={true} data={{ language: "en" }} />
            <ServiceOntarioHeader inABS={true} />
            <ConfirmLocation
              city={city}
              soLocation={serviceOntario} />
            <Footer />
          </Route> */}

          {/* Group size */}

          <Route path="/group-size">
            <Header noMenu={true} data={{ language: "en" }} />
            <ServiceOntarioHeader inABS={true} />
            <GroupSize
              addGroupSize={setGroupSize}
              groupService={groupService}
              setGroupService={setGroupService}
              services={service} />
            <Footer />
          </Route>

          {/* Calendar */}

          <Route path="/select-date">
            <Header noMenu={true} data={{ language: "en" }} />
            <ServiceOntarioHeader inABS={true} />
            <SelectDate
              soLocation={serviceOntario}
              setTime={setTime}
              setDate={setDate}
              date={date}
              groupSize={groupSize}
              groupService={groupService}
              service={service} />
            <Footer />
          </Route>

          {/* Contact Information */}

          <Route path="/contact-information">
            <Header noMenu={true} data={{ language: "en" }} />
            <ServiceOntarioHeader inABS={true} />
            <ContactInfo
              firstName={firstName}
              addFName={setFirstName}
              lastName={lastName}
              addLName={setLastName}
              appLanguage={language}
              addLanguage={setLanguage}
              appEmail={email}
              addEmail={setEmail}
              phone={phone}
              addNumber={setPhone}
              addAccessibility={setAccessibility} />
            <Footer />
          </Route>

          {/* Review Details */}

          <Route path="/review">
            <Header noMenu={true} data={{ language: "en" }} />
            <ServiceOntarioHeader inABS={true} />
            <ReviewDetails
              city={city}
              setAppCity={setCity}
              setLat={setLat}
              setLng={setLng}
              soLocation={serviceOntario}
              service={service}
              resetService={setService}
              addService={addServiceHandler}
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
              firstName={firstName}
              setFName={setFirstName}
              lastName={lastName}
              setLName={setLastName}
              groupSize={groupSize}
              setGroupSize={setGroupSize}
              accessibility={accessibility}
              setAccessibility={setAccessibility}
              language={language}
              setLanguage={setLanguage}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              publicService={publicService}
              setSOLocation={setServiceOntario} />
            <Footer />
          </Route>

          {/* Success */}

          <Route path="/success">
            <Header noMenu={true} data={{ language: "en" }} />
            <ServiceOntarioHeader inABS={true} />
            <Success email={email} services={service} soLocation={serviceOntario} date={date} time={time} />
            <Footer />
          </Route>

          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
