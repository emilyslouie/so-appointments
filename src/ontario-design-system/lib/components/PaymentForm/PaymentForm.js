import React from "react";
import TextInput from "../TextInput/TextInput";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./styles.scss";

const Data = {
  labelType: "",
  labelFlag: "",
  hintText: "",
  hintId: "",
  inputChar: "",
  text: "Submit",
  skin: "primary"
};

const monthOpts = [
  { id: "1 - Jan", value: "1 - Jan" },
  { id: "2 - Feb", value: "2 - Feb" },
  { id: "3- Mar", value: "3- Mar" },
  { id: "4- Apr", value: "4- Apr" },
  { id: "5 - May", value: "5 - May" },
  { id: "6 - Jun", value: "6 - Jun" },
  { id: "7 - Jul", value: "7 - Jul" },
  { id: "8 - Aug", value: "8 - Aug" },
  { id: "9 - Sep", value: "9 - Sep" },
  { id: "10 - Oct", value: "10 - Oct" },
  { id: "11 - Nov", value: "11 - Nov" },
  { id: "12 - Dec", value: "12 - Dec" }
];

const yearOpts = [
  { id: 0, value: "2020" },
  { id: 1, value: "2021" },
  { id: 3, value: "2022" },
  { id: 4, value: "2023" }
];

const countriesOpts = [
  { id: "Canada", value: "Canada" },
  { id: "United States of America", value: "United States of America" }
];

const PaymentForm = props => {
  const { onSubmitAction } = props;
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        month: "1 - Jan",
        year: "2020",
        country: "Canada"
      }}
      // validate={values => {
      //   const errors = {};
      //   if (!values.email) {
      //     errors.email = "Required";
      //   } else if (
      //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //   ) {
      //     errors.email = "Invalid email address";
      //   }
      //   return errors;
      // }}
      onSubmit={(values, { setSubmitting }) => {
        if (onSubmitAction) {
          onSubmitAction();
        }
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit} className={"ontario-PaymentForm"}>
          <TextInput
            data={{
              ...Data,
              labelText: "First Name",
              value: values.firstName,
              name: "firstName"
            }}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextInput
            data={{
              ...Data,
              labelText: "Last Name",
              value: values.lastName,
              name: "lastName"
            }}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextInput
            data={{
              ...Data,
              labelText: "Email",
              value: values.email,
              name: "email"
            }}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextInput
            data={{
              ...Data,
              labelText: "Phone",
              value: values.phone,
              name: "phone"
            }}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextInput
            data={{
              ...Data,
              labelText: "Credit Card",
              inputChar: "",
              value: values.creditCard,
              name: "creditCard"
            }}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className={"ontario-PaymentForm-cardInfo-dateContainer"}>
            <div className="ontario-PaymentForm-cardInfo-dateContainer-left">
              <Dropdown
                data={{
                  ...Data,
                  labelText: "Expiration Date",
                  inputChar: 5,
                  options: monthOpts,
                  value: values.month,
                  name: "month"
                }}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div style={{ alignSelf: "flex-end" }}>
                <Dropdown
                  data={{
                    ...Data,
                    labelText: "",
                    inputChar: 10,
                    options: yearOpts,
                    value: values.year,
                    name: "year"
                  }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="ontario-PaymentForm-cardInfo-dateContainer-right">
              <TextInput
                data={{
                  ...Data,
                  labelText: "CVV",
                  inputChar: 3,
                  value: values.cvv,
                  name: "cvv"
                }}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
          <Dropdown
            data={{
              ...Data,
              labelText: "Country",
              options: countriesOpts,
              value: values.country,
              name: "country"
            }}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextInput
            data={{
              ...Data,
              labelText: "ZIP Code / Postal Code",
              inputChar: "",
              value: values.zip,
              name: "zip"
            }}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="ontario-PaymentForm-buttonContainer">
            <Button
              data={{ ...Data }}
              onClickHandler={handleSubmit}
              disabled={isSubmitting}
            />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default PaymentForm;
