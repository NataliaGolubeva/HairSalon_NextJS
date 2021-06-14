import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  async function register(e) {
    e.preventDefault();
    let item = { name, lastName, email, phoneNumber, password };
    // let result = await fetch("https://127.0.0.1:8001/api/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     Accept: "application/x-www-form-urlencoded",
    //   },
    //   body: JSON.stringify(item),
    // });
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

    const result = await fetch(
      "https://wdev2.be/natalia21/eindwerk/api/register",
      requestOptions
    );
    const data = await result.json();

    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));

    // result = await result.json();

    router.push("/login");
  }
  return (
    <div className="inputPage">
      <h1>Register</h1>
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
            placeholder="last ncd ha  ame"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className="formInput"
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
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
