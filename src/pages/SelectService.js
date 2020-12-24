import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Hint } from "../ontario-design-system/lib/index";
import ProgressBar from '../components/ProgressBar';
import BackButton from '../components/Back';
import servicesJson from '../shared/services.json';
import CustomSelect from '../components/CustomSelect';

let bookOnline = false;

function SelectService({ service, addService, setPublicService, resetService, city, soLocation }) {
    const [value, setValue] = useState([]);

    const history = useHistory();

    let services = [];
    servicesJson.map(s => services.push(s));

    useEffect(() => {
        bookOnline = false;
        setValue(service);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    let styles = {};
    let classes = "ontario-button";

    if (value == null || value.length < 1) {
        bookOnline = false;
        styles = {
            backgroundColor: '#BDBDBD',
            color: 'white',
            cursor: 'not-allowed'
        }
    } else if (value.length > 0) {
        styles = {};
        classes = "ontario-button ontario-button--primary";
    }

    const onChange = value => {
        resetService([]);
        setValue(value);
    }

    const redirect = () => {
        if (bookOnline && (value != null && value.length > 0)) {
            history.push("/online-services");
        } else {
            if ((city != '' && soLocation != {}) && (value != null && value.length > 0)) {
                history.push("/group-size")
            } else if ((city == '' || soLocation == {}) && (value != null && value.length > 0)) {
                history.push("/select-location");
            }
        }
    }

    const confirmHandler = () => {
        if (value != null && value.length > 0) {
            for (let j = 0; j < value.length; j++) {
                addService(value[j]);

                if (!value[j].private) {
                    setPublicService(true);
                }
                if (value[j].online) {
                    bookOnline = true;
                }
            }
        }

    }

    return (
        <div className="container">
            <div className="ontario-row ontario-margin-bottom-64-!">
                <div className="ontario-columns">
                    <BackButton path={"/abs"} />
                    <ProgressBar percent={16} step={1} phrase={"Enter your service(s)"} />
                    <h1>Enter your service(s)</h1>
                    <Hint data={{
                        hintText: "For example \"renew a driver’s licence\" or \"get an accessible parking permit\""
                    }} />
                    <CustomSelect defaultValue={value} placeholder="Select service(s)" options={services} value={value} onChange={onChange} />
                    <a className={classes} style={styles} onClick={() => {
                        confirmHandler();
                        redirect();
                    }}>
                        Next
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SelectService;