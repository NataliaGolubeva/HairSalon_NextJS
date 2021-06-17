import React, { useState } from "react";
import { useRouter } from "next/router";
import validator from "validator";

export default function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  const router = useRouter();
  async function register(e) {
    e.preventDefault();
    let item = { name, lastName, email, phoneNumber, password };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("name", name);
    urlencoded.append("lastName", lastName);
    urlencoded.append("email", email);
    urlencoded.append("phoneNumber", phoneNumber);
    urlencoded.append("password", password);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    try {
      setIsLoading(true);
      const result = await fetch(
        "https://wdev2.be/natalia21/eindwerk/api/register",
        requestOptions
      );
      const data = await result.json();
      if (data && !data.error) {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }
  const validateEmail = (e) => {
    if (validator.isEmail(e)) {
      setEmail(e);
    } else {
      setEmailError("Enter valid Email!");
    }
  };
  return (
    <div className="inputPage">
      <h1 className="mainHeader">Register</h1>
      <form onSubmit={register} className="inputBlock">
        <div className="inputWindow">
          <input
            className="formInput"
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="formInput"
            type="text"
            placeholder="last name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className="formInput"
            type="text"
            placeholder="email"
            onChange={(e) => validateEmail(e.target.value)}
          />
          {emailError && <div className="error">{emailError}</div>}
          <input
            className="formInput"
            type="text"
            placeholder="phone number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            className="formInput"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
