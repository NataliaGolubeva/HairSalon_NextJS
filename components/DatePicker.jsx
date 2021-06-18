import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

export default function ChooseDate() {
  const [date, setDate] = useState(new Date());

  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return (
    <>
      <p>
        Current selected date is{" "}
        <b>{moment(date).format(" DD MMMM YYYY HH:mm")}</b>
      </p>
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
        showTimeSelect
        dateFormat="Pp"
        minDate={new Date()}
        filterDate={isWeekday}
        dateFormat=" d MMMM yyyy h:mm aa"
      />
    </>
  );
}
