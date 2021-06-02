import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  async function login_check() {
    let item = { username, password };
    let result = await fetch("https://127.0.0.1:8001/api/login_check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    router.push("/");
  }
  return (
    <>
      <h1>Login</h1>
      <p>
        First time here? <a href="/register">Register</a>
      </p>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login_check} type="submit">
        Login
      </button>
    </>
  );
}
