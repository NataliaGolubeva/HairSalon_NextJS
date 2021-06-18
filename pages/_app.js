import "../styles/styles.scss";
import Link from "next/link";
import Modal from "react-modal";
import { useRouter, Router } from "next/router";
import { useState, useEffect } from "react";
import Booking from "./booking";
import Footer from "./footer";
import LoginForm from "../components/LoginForm";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

Modal.setAppElement("#__next");

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jwt = Cookies.get("user-info");
    if (jwt) {
      const { id } = jwt_decode(jwt);
      if (id) {
        setUser(id);
        console.log(id);
        setLoggedIn(true);
      }
    }
  }, []);
  const router = useRouter();
  const [sidebar, setSidebar] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  function ShowSideBar() {
    setSidebar(!sidebar);
  }

  const [username, setEmail] = useState("nata@example.com");
  const [password, setPassword] = useState("nata123");
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [tokenData, setTokenData] = useState({});
  //const router = useRouter();
  const [error, setError] = useState("");

  function login_check() {
    let data = { username, password };
    setIsLoading(true);
    let result = fetch("https://wdev2.be/natalia21/eindwerk/api/login_check", {
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
          setUser(data.token);
          setLoggedIn(true);
          Cookies.set("user-info", JSON.stringify(data.token));
          setIsVisible(false);

          router.push("/");
        }
        console.log(data.token);
      })
      .catch((error) => {
        setError("Server Error");
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false); // stop the loader
      });
  }

  function logout() {
    Cookies.remove("user-info");
    setLoggedIn(false);
  }
  // function decodeJwt() {
  //   user ? console.log(jwt_decode(user)) : console.log("login");
  // }

  return (
    <>
      <div className="main_nav">
        <div className="logo">LOGO</div>
        <ul className="navigation">
          <li>
            <Link href="/">
              <a title="go to HOME page" id="home">
                HOME
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a title="go to ABOUT page" id="about">
                ABOUT
              </a>
            </Link>
          </li>

          <li>
            <Link href="/hairServices">
              <a title="go to SERVICE page">SERVICES</a>
            </Link>
          </li>
          <li>
            <Link href="/ourServices">
              <a title="go to SERVICE page">Redux</a>
            </Link>
          </li>

          {!loggedIn ? (
            <button onClick={() => setIsVisible(true)}>LOGIN</button>
          ) : (
            <button onClick={() => logout()}>LOGOUT</button>
          )}
          <li>
            <Booking sidebar={sidebar} ShowSideBar={ShowSideBar} user={user} />
          </li>
        </ul>
      </div>

      <div className="wrap">
        <div className="main">
          <Component {...pageProps} />
        </div>
      </div>
      <Modal
        isOpen={isVisible}
        onRequestClose={() => setIsVisible(false)}
        style={{
          content: {
            backgroundColor: "#658080",
            border: "2px solid #AAA9A9",
          },
        }}
      >
        <LoginForm
          email={username}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          login_check={login_check}
          isLoading={isLoading}
          error={error}
        />
      </Modal>
      <Footer />
    </>
  );
}

export default MyApp;
