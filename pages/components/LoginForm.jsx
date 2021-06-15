import React from "react";

function LoginForm({ setEmail, setPassword, login_check, isLoading, error }) {
  return (
    <div>
      <div className="inputPage">
        <h1 className="mainTitle">Login</h1>

        <div className="inputText">
          <p>
            First time here? <a href="/register">Register</a>
          </p>
        </div>
        {error && <div className="error">{error}</div>}
        <div className="inputBlock">
          <div className="inputWindow">
            <input
              className="formInput"
              type="text"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
          </div>
          <div className="inputWindow">
            <input
              className="formInput"
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />
          </div>
        </div>
        <button disabled={isLoading} onClick={login_check} type="submit">
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
