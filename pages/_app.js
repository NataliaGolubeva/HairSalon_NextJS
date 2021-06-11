import "../styles/styles.scss";
import Link from "next/link";
import Modal from "react-modal";
import { useRouter, Router } from "next/router";
import { useState } from "react";
import Login from "./login";
import Booking from "./booking";
import Footer from "./footer";
import { route } from "next/dist/next-server/server/router";

Modal.setAppElement("#__next");

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log(router.route);
  const [isOpen, setIsOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  function ShowSideBar() {
    setSidebar(!sidebar);
  }

  function toggleModal() {
    setIsOpen(!isOpen);
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
        <Login />
      </Modal>
      <Footer />
    </>
  );
}

export default MyApp;
