import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

export default function ReactCalendar() {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };
  const tileDisabled = ({ activeStartDate, date, view }) =>
    date.getDay() === 0 || date.getDay() === 6;
  const minDate = new Date();

  return (
    <>
      <Calendar
        value={dateState}
        onChange={changeDate}
        tileDisabled={tileDisabled}
        minDate={minDate}
      />
      <p>
        Current selected date is{" "}
        <b>{moment(dateState).format(" DD MMMM YYYY")}</b>
      </p>
    </>
  );
}
