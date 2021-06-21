import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";

export default function ChooseDate({ user }) {
  const [thisDate, setDate] = useState(new Date());

  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");
  const isWeekday = (thisDate) => {
    const day = thisDate.getDay();
    return day !== 0 && day !== 6;
  };
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    required,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log(data);
    var raw = JSON.stringify(data);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      setIsLoading(true);
      const result = await fetch(
        "https://wdev2.be/natalia21/eindwerk/api/bookings",
        requestOptions
      );
      const data = await result.json();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }
  function findClient() {
    if (!user) {
      return null;
    }

    const client = "/natalia21/eindwerk/api/users/" + user;
    return client;
  }
  const myDate = moment(thisDate).format("YYYY-MM-DD");
  //  h:mm aa
  return (
    <div className="bookingPage">
      {user && <p>{user}</p>}
      <p>
        Current selected date is <b>{moment(thisDate).format("DD MM YYYY")}</b>
      </p>
      <DatePicker
        selected={thisDate}
        onChange={(thisDate) => setDate(thisDate)}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
        dateFormat="Pp"
        minDate={new Date()}
        filterDate={isWeekday}
        dateFormat=" d MMMM yyyy"
      />
      <form onSubmit={handleSubmit(onSubmit)} className="inputBlock">
        <div className="bookForm">
          <div>
            <input
              className="formInput"
              type="text"
              value="/natalia21/eindwerk/api/users/5"
              {...register("user", { required: true })}
            />
          </div>
          <input
            className="formInput"
            type="text"
            value="/natalia21/eindwerk/api/service_lists/2"
            {...register("service", { required: true })}
          />

          <div>
            <input
              className="formInput"
              type="date"
              value={myDate}
              {...register("day", { required: true })}
            />
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
