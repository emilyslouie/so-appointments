import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import '../css/OtherStyles.css'
import { Button, Callout } from "../ontario-design-system/lib/index";
import ProgressBar from '../components/ProgressBar';

import BackButton from '../components/Back';
import RadioCounter from '../components/RadioCounter';

function GroupSize({ addGroupSize, groupService, setGroupService, services }) {
    const [groupAndServices, setGroupAndServices] = useState(services);

    const history = useHistory();

    const warningMessage = "Due to restrictions associated with COVID-19, additional guests per appointment is limited. For any additional concerns, please call the specific location.";
    const data = {
        type: "warning",
        title: "Limited in-person attendance",
        message: warningMessage
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        if (services != null) {
            let servicesCopy = [...services];
            servicesCopy.forEach(function (element, index) {
                element.size = 1;
                element.id = index;
            })
            setGroupAndServices(servicesCopy);
        }
    }, [])


    function handleUpdate() {
        Object.values(groupAndServices).forEach(function (element) {
            if (element.size > 1 && groupService == false) {
                setGroupService(true);
            }
            console.log(element)
        })
        addGroupSize(groupAndServices);
        console.log(groupService)
        console.log(groupAndServices)
        history.push("/select-date");
    }

    const saveUpdate = (serviceId, newSize) => {
        let newArray = { ...services };
        newArray[serviceId].size = newSize;
        setGroupAndServices(newArray);
    }

    return (
        <div className="container">
            <div className="ontario-row ontario-margin-bottom-64-!">
                <div className="ontario-columns">
                    <BackButton path={"/select-location"} />
                    <ProgressBar percent={50} step={3} phrase={"Select group size"} />
                    <h1 className="ontario-margin-bottom-16-!">
                        Confirm group size
                    </h1>
                    <Callout className="warning ontario-margin-bottom-16-!" data={data} />
                    <h3>Is this appointment only for you?</h3>
                    {/* 
                    {console.log(Object.keys("keys", groupAndServices))} */}
                    {Object.keys(groupAndServices).map(s => {
                        return <RadioCounter service={groupAndServices[s]} saveUpdate={(id, size) => saveUpdate(id, size)} />
                    })}
                    <Button data={{
                        id: "group",
                        text: "Next",
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

export default GroupSize;