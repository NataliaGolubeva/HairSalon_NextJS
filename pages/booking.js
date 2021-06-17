import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import React, { useState } from "react";
import ReactCalendar from "./components/ReactCalendar.jsx";
import { FaShoppingBasket } from "react-icons/fa";
import Date from "./components/DatePicker";

export default function Booking({ sidebar, ShowSideBar, user }) {
  //  {!user ? <div>Please Login</div> : <div>Hello {user[0].name}</div>}
  return (
    <>
      <div className="bookBar">
        <Link href="#">
          <a className="menuBook" onClick={ShowSideBar}>
            <FaShoppingBasket />
          </a>
        </Link>
      </div>
      <div className={sidebar ? "bookingMenu active" : "bookingMenu"}>
        <div className="bookBody">
          <div className="menuToggle">
            <Link href="#">
              <a className="menuBook">
                <AiOutlineClose onClick={ShowSideBar} />
              </a>
            </Link>
          </div>
        </div>
        <div className="bookingContent">
          <h2>Choose a day</h2>
          <Date />
        </div>
      </div>
    </>
  );
}
