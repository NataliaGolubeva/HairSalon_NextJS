import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  async function login_check() {
    let data = { username, password };
    let result = await fetch(
      "https://wdev2.be/natalia21/eindwerk/api/login_check",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    //result = await response.json();
    Cookies.set("user-info", JSON.stringify(result));

    //router.push("/");
  }

  return (
    <div className="inputPage">
      <h1>Login</h1>
      <div className="inputText">
        <p>
          First time here? <a href="/register">Register</a>
        </p>
      </div>
      <div className="inputBlock">
        <div className="inputWindow">
          <input
            className="formInput"
            type="text"
            placeholder="email"
            onChange={(e) => setUsername(e.target.value)}
            required="true"
          />
        </div>
        <div className="inputWindow">
          <input
            className="formInput"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required="true"
          />
        </div>
      </div>

      <button onClick={login_check} type="submit">
        Login
      </button>
    </div>
  );
}
