import React from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';

function AppointmentForm({ service, setService, location, firstName, setFirstName, lastName, setLastName, email, setEmail, phone, setPhone, time, setTime }) {
    const history = useHistory();

    const services = [
        {
            value: 'drivers-license',
            label: 'Renew Driver\'s License',
        },
        {
            value: 'health-card',
            label: 'Renew Health Card',
        },
        {
            value: 'death',
            label: 'Register for Death Certificate',
        },
        {
            value: 'birth',
            label: 'Register for Birth Certificate',
        },
        {
            value: 'marriage',
            label: 'Register for Marriage Certificate',
        },
        {
            value: 'fishing',
            label: 'Register for Fishing License',
        },
        {
            value: 'used-vehicle',
            label: 'Buy/Sell a Used Vehicle',
        }
    ];

    const submitHandler = event => {
        event.preventDefault();

        history.push("/xyz");
    }

    const onChange = value => {
        setService(value);
    }

    return (
        <div>
            <h3 style={{ margin: "5vh 0 5vh 5vw" }}>Appointment Information</h3>

            <div className="ontario-form-group">
                <label className="ontario-label" htmlFor="text-input-example">
                    First name<span className="ontario-label__flag">(required)</span>
                </label>
                <input
                    className="ontario-input"
                    type="text" id="firstName-input"
                    value={firstName}
                    onChange={event => {
                        setFirstName(event.target.value);
                    }} />
            </div>

            <div className="ontario-form-group">
                <label className="ontario-label" htmlFor="text-input-example">
                    Last name<span className="ontario-label__flag">(required)</span>
                </label>
                <input
                    className="ontario-input"
                    type="text" id="lastName-input"
                    value={lastName}
                    onChange={event => {
                        setLastName(event.target.value);
                    }} />
            </div>

            <div className="ontario-form-group">
                <label className="ontario-label" htmlFor="text-input-example">
                    Email address<span className="ontario-label__flag">(required)</span>
                </label>
                <input
                    className="ontario-input"
                    type="text" id="email-input"
                    value={email}
                    onChange={event => {
                        setEmail(event.target.value);
                    }} />
            </div>

            <div className="ontario-form-group">
                <label className="ontario-label" htmlFor="text-input-example-width-10">
                    Phone number<span className="ontario-label__flag">(optional)</span>
                </label>
                <input
                    className="ontario-input ontario-input--10-char-width"
                    type="text" id="phone-input"
                    value={phone}
                    onChange={event => {
                        setPhone(event.target.value);
                    }} />
            </div>

            <Select
                id="searchbar"
                backspaceRemovesValue={false}
                controlShouldRenderValue={false}
                hideSelectedOptions={false}
                isClearable={false}
                value={service}
                options={services}
                tabSelectsValue={false}
                className="basic-single ontario-input--20-char-width"
                classNamePrefix="select"
                onChange={onChange}
            />

            <div className="ontario-form-group">
                <label className="ontario-label" htmlFor="dropdown-list-example">
                    Time<span className="ontario-label__flag">(required)</span>
                </label>
                <select
                    className="ontario-input ontario-dropdown"
                    id="dropdown-list-example" name="time-select"
                    value={time}
                    onChange={event => {
                        setTime(event.target.value);
                    }} >
                    <option value="">Select</option>
                    <option value="0900">9:00 AM</option>
                    <option value="0930">9:30 AM</option>
                    <option value="1000">10:00 AM</option>
                    <option value="1030">10:30 AM</option>
                    <option value="1100">11:00 AM</option>
                    <option value="1300">1:00 PM</option>
                    <option value="1330">1:30 PM</option>
                    <option value="1400">2:00 PM</option>
                    <option value="1430">2:30 PM</option>
                    <option value="1500">3:00 PM</option>
                </select>
            </div>

            <a className="ontario-button ontario-button--primary" onClick={submitHandler}>
                Submit
            </a>


        </div>
    );
}

export default AppointmentForm;