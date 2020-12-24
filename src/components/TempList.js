import React from 'react';
import axios from '../axios';

function TempList({ firstName, lastName, email, phone, service, location, time }) {
    const submitHandler = event => {
        event.preventDefault();

        let form = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            time: time,
            service: service,
            location: location
        };

        // axios.post('/bookedAppointments.json', form)
        //     .then(response => console.log(response))
        //     .catch(error => console.log(error));
    }

    return (
        <div>
            <label className="ontario-label" htmlFor="label-example">Confirm Details</label>
            <table className="hours">
                <tbody>
                    <tr>
                        <th>First name</th>
                        <td>{firstName.toString()}</td>
                    </tr>
                    <tr>
                        <th>Last name</th>
                        <td>{lastName.toString()}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{email.toString()}</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>{phone.toString()}</td>
                    </tr>
                    <tr>
                        <th>Service</th>
                        <td>
                            <ul>
                                {service.map(s => (
                                    <li>
                                        <span>{s.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Location</th>
                        <td>{location.toString()}</td>
                    </tr>
                    <tr>
                        <th>Time</th>
                        <td>{time.toString()}</td>
                    </tr>
                </tbody>
            </table>
            <a className="ontario-button ontario-button--primary" onClick={submitHandler}>
                Confirm
            </a>
        </div>
    );
}

export default TempList;