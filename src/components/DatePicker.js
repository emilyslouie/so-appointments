import React from 'react';
import moment from "moment";
import { DatePicker } from 'antd';
import '../css/Calendar.css'

function Calendar({ setDate, optionalFunction }) {

    let todaysDate = new Date();
    todaysDate.setDate(todaysDate.getDate() + 1);
    const disabledDate = current => {
        return moment().add(1, 'days') >= current ||
            moment().add(3, 'month') <= current || moment(current).day() === 0 || moment(current).day() === 6;
    };

    const defaultValue = () => {
        return moment().add(2, 'days');
    };

    const optional = () => {
        if (optionalFunction) {
            optionalFunction();
        }
    }

    return (
        <DatePicker size={"large"} onChange={(value) => {setDate(value); optional();} } allowClear={false} disabledDate={disabledDate} defaultValue={defaultValue} showToday={false} mode={"date"} />
    );
}

export default Calendar;