import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';


import { Button, Label, TextInput, Hint, Input, RadioGroup, Radio } from "../ontario-design-system/lib/index";
import '../css/OtherStyles.css'
import ProgressBar from '../components/ProgressBar';
import BackButton from '../components/Back';
import { checkValidity } from '../shared/utility';
import Error from '../components/Error/Error';
import ErrorMsg from '../components/Error/ErrorMsg';

let formIsValid = true;
let validPhone = true;
let validFName = true;
let validLName = true;
let validEmail = true;
let presentEmail = false;
let presentPhone = false;
let emailPhone = [];
let allFields;
let phoneEmailErrorBanner;
let ePError = false;

emailPhone = [
    { valid: false, label: "Email", id: "email" },
    { valid: false, label: "Phone", id: "number" }
];

function ContactInfo({ firstName, addFName, lastName, addLName, appLanguage, addLanguage, appEmail, addEmail, phone, addNumber, addAccessibility }) {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [language, setLanguage] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const [request, setRequest] = useState('');
    const [showError, setShowError] = useState(false);
    const [epErrorTest, setEPErrorTest] = useState(false);

    const history = useHistory();

    useEffect(() => {
        setFName(firstName);
        setLName(lastName);
        setLanguage(appLanguage);
        setEmail(appEmail);
        setNumber(phone);
        

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    let errorBanner;

    if (!showError) {
        errorBanner = ""
    } else if (showError) {
        errorBanner = <Error fields={allFields} message="Please check your entries in these fields:" />;
    }

    if (!ePError) {
        phoneEmailErrorBanner = ""
    } else if (ePError) {
        phoneEmailErrorBanner = <Error fields={emailPhone} message="Please enter at least one of the following:" />
    }

    function handleChange(field, value) {
        switch (field) {
            case "f-name":
                setFName(value);
                break;
            case "l-name":
                setLName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phone":
                setNumber(value);
                break;
            default:
                console.log("onchange default");
        }
    }

    function handleCheckValidity(fields, value) {
        fields.map(field => {
            switch (field) {
                case "f-name":
                    validFName = checkValidity(value, 'fName');
                    break;
                case "l-name":
                    validLName = checkValidity(value, 'lName');
                    break;
                case "email":
                    if (value === '') {
                        presentEmail = false;
                        validEmail = true;
                    } else {
                        validEmail = checkValidity(value, 'email');
                        presentEmail = true;
                    }
                    break;
                case "phone":
                    if (value !== '' && value !== null) {
                        validPhone = checkValidity(value, 'phone');
                        presentPhone = true;
                    } else if (value === '' || value === null) {
                        validPhone = true;
                        presentPhone = false;
                    }
                    break;
                default:
                    console.log("validation default");
            }
        })

        formIsValid = (validFName && validLName && validEmail && validPhone && (presentEmail || presentPhone) && true);
    }

    function updateFields() {
        allFields = [
            { valid: validFName, label: "Please enter a first name", id: "first-name" },
            { valid: validLName, label: "Please enter a last name", id: "first-name" },
            { valid: validEmail, label: "Please enter a valid email", id: "email"},
            { valid: validPhone, label: "Please enter a valid phone number", id: "phone" }
        ];
    }

    function handleUpdate() {
        setShowError(!(validFName && validLName && validEmail && validPhone && true));

        if (formIsValid) {
            console.log("form is valid");

            addFName(fName);
            addLName(lName);
            addLanguage(language);
            addAccessibility(request);
            if (presentEmail) {
                addEmail(email);
            } else if (!presentEmail) {
                addEmail('');
            }
            if (presentPhone) {
                addNumber(number.match(/\d+/g).join(''));
            } else if (!presentPhone) {
                addNumber('');
            }

            history.push("/review");
        } else if (!formIsValid) {
            console.log("form not valid");

            ePError = (!(presentEmail || presentPhone));
            setShowError(!(validFName && validLName && validEmail && validPhone && true));

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }

    return (
        <div className="container">
            <div className="ontario-row ontario-margin-bottom-64-!">
                <div className="ontario-columns">
                    <BackButton path={"/select-date"} />
                    <ProgressBar percent={83} step={5} phrase={"Enter contact information"} />
                    {errorBanner}
                    {phoneEmailErrorBanner}
                    <h1 className="ontario-margin-bottom-16-!">
                        Enter contact information
                    </h1>
                    <p className="ontario-margin-bottom-24-!">Enter the primary contact information below.</p>
                    <div className={!validFName ? "error-content" : ""}>
                        {!validFName ? (<ErrorMsg msg="Enter your first name to continue." />) : ("")}
                        <TextInput
                            data={{
                                id: "first-name",
                                labelText: "First name",
                                type: "text",
                                value: fName,
                                flag: "(required)"
                            }}
                            onChange={ event => { handleChange("f-name", event.target.value); handleCheckValidity(["f-name"], event.target.value); updateFields(); setShowError(!(validFName && validLName)); }}
                        />
                    </div>
                    <div className={!validLName ? "error-content" : ""} >
                        {!validLName ? (<ErrorMsg msg="Enter your last name to continue." />) : ("")}
                        <TextInput
                            data={{
                                id: "last-name",
                                labelText: "Last name",
                                type: "text",
                                value: lName,
                                flag: "(required)"
                            }}
                            onChange={ event => { handleChange("l-name", event.target.value); handleCheckValidity(["l-name"], event.target.value); updateFields(); setShowError(!(validFName && validLName)); }}
                        />
                    </div>
                    <p className="ontario-margin-bottom-16-!">Please provide either your email address or phone number, or both. We are only using this information to send you appointment confirmation and reminder. </p>
                    <div className={!validEmail ? "error-content" : ""}>
                        <Label
                            data={{
                                id: "email",
                                type: "text",
                                text: "Email address"
                            }}
                        />
                        {!validEmail ? (<ErrorMsg msg="Please enter a valid email address. For example, john.doe@gmail.com" />) : (<Hint data={{ hintText: "For example person@email.com", hintId: "test"}} />)}
                        <p className="ontario-margin-bottom-16-!">We will email you an appointment confirmation and reminder.</p>
                        <Input
                            data={{
                                id: "email",
                                type: "email",
                                value: email,
                            }}
                            onChange={event => { handleChange("email", event.target.value); handleCheckValidity(["email"], event.target.value); updateFields(); }}
                        />
                    </div>
                    <div className={!validPhone ? "error-content" : ""}>
                        <Label
                            data={{
                                id: "number",
                                text: "Phone",
                                type: "text"
                            }}
                        />
                        {!validPhone ? (<ErrorMsg msg="Enter your phone number continue." />) : (<Hint data={{ hintText: "For example 1234567890", hintId: "test2" }} />)}
                        <Input
                            data={{
                                id: "number",
                                type: "number",
                                value: number,
                            }}
                            onChange={event => { handleChange("phone", event.target.value); handleCheckValidity(["phone"], event.target.value); updateFields(); }}
                        />
                    </div>
                    <Label
                        data={{
                            text: "Language preference"
                        }}
                    />
                    <p className="ontario-margin-bottom-16-!" >Choose the language you would prefer to communicate in during the appointment.</p>
                    <RadioGroup >
                        <Radio val="English" defaultChecked={(appLanguage == "English" || appLanguage === '') ? true : false} name="language" onChange={() => setLanguage("English")} />
                        <Radio val="French" defaultChecked={appLanguage == "French" ? true : false} name="language" onChange={() => setLanguage("French")} />
                    </RadioGroup>
                    <Label
                        data={{
                            id: "accommodation",
                            type: "text",
                            text: "Accommodation",
                            flag: "(optional)"
                        }}
                    />
                    <p className="ontario-margin-bottom-16-!" >If you will need any help or support during your appointment, please feel free to list them below. </p>
                    <Hint
                        data={{
                            hintText: "For example, sign language interpreter, borrowing a wheelchair", hintId: "test3"
                        }}
                    />
                    <textarea className="ontario-input ontario-textarea" name="text-area-example" id="text-area-example" type="text" onChange={e => setRequest(e.target.value)}></textarea>
                    <Button data={{
                        id: "contact-info",
                        text: "Next",
                        skin: "primary",
                    }}
                        onClickHandler={() => {

                            if (!(presentPhone || presentEmail)) {
                                setEPErrorTest(true);
                            }
                            
                            handleCheckValidity(["f-name"], fName);
                            handleCheckValidity(["l-name"], lName);
                            handleCheckValidity(["phone"], number);
                            handleCheckValidity(["email"], email);

                            updateFields();
                            
                            handleUpdate();
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;