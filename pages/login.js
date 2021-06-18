import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import LoginForm from "../components/LoginForm";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");

  function login_check() {
    let data = { email, password };
    setIsLoading(true);
    let result = fetch("https://wdev2.be/natalia21/eindwerk/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())

      .then((data) => {
        if (data.error) {
          setError("Invalid credentials");
        }
        if (data && !data.error) {
          setUser(data);
          Cookies.set("user-info", JSON.stringify(user));
          router.push("/");
        }
        console.log(data);
      })
      .catch((error) => {
        setError("Server Error");
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false); // stop the loader
      });
  }
  // <ul>{user && user.map((u) => <li key={u.id}>{u.name}</li>)}</ul>

  return (
    <>
      <LoginForm
        setEmail={setEmail}
        setPassword={setPassword}
        login_check={login_check}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
}
