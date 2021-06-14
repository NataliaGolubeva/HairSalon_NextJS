import "../styles/styles.scss";
import Link from "next/link";
import Modal from "react-modal";
import { useRouter, Router } from "next/router";
import { useState } from "react";
import Login from "./login";
import Booking from "./booking";
import Footer from "./footer";
import LoginForm from "./components/LoginForm";
import Cookies from "js-cookie";

import { route } from "next/dist/next-server/server/router";

Modal.setAppElement("#__next");

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  function ShowSideBar() {
    setSidebar(!sidebar);
  }

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //const router = useRouter();
  const [error, setError] = useState("");

  function login_check(e) {
    e.preventDefault();
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
            <Link href="/services">
              <a title="go to SERVICE page">SERVICES</a>
            </Link>
          </li>

          <li>
            <Link href="/login?login=true" as="/login">
              <a title="go to Login page">LOGIN</a>
            </Link>
          </li>
          <li>
            <Booking sidebar={sidebar} ShowSideBar={ShowSideBar} />
          </li>
        </ul>
      </div>

      <div className="wrap">
        <div className="main">
          <Component {...pageProps} />
        </div>
      </div>
      <Modal
        isOpen={!!router.query.login}
        onRequestClose={() => router.push("/")}
        style={{
          content: {
            backgroundColor: "#658080",
            border: "2px solid #AAA9A9",
          },
        }}
      >
        <LoginForm
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
