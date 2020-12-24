import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';
import { Button } from "../ontario-design-system/lib/index";
import BackButton from '../components/Back';

function BookOnline({ service, city, soLocation }) {
    const history = useHistory();

    let canBookOnline = [];
    service.map(s => {
        if (s.online) {
            canBookOnline.push(s);
        }
    });

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [])

    let serviceButtons = (
        canBookOnline.map(s => (
            <Button data={{
                id: "location-select",
                text: s.label,
                skin: "primary",
            }}
                onClickHandler={() => {
                    window.location.href = s.link;
                }}
            />
        ))
    );

    const confirmHandler = () => {
        if (city !== '' && soLocation !== {}) {
            history.push("/group-size");
        } else if (city === '' || soLocation === {}) {
            history.push("/select-location");
        }
    }

    return (
        <div className="container">
            <div className="ontario-row ontario-margin-bottom-64-!">
                <div className="ontario-columns">
                    <BackButton path={"/select-service"} />
                    <ProgressBar percent={20} step={1} phrase={"Select service"} />
                    <h1>Online services</h1>
                    <p className="ontario-margin-bottom-24-!">
                        You can now process the following service(s) online. Click on the appropriate button(s) below to continue the process online.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '50vh' }} >
                        {serviceButtons}
                        <p className="ontario-margin-bottom-24-!">
                            If you still wish to visit a ServiceOntario location in person, please continue to book your appointment.
                        </p>
                        <Button
                            data={{
                                id: "book-appointment",
                                text: "Book appointment",
                                skin: "secondary",
                            }}
                            onClickHandler={() => {
                                confirmHandler();
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookOnline;