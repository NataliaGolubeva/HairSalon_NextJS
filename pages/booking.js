import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import React, { useState } from "react";
import ReactCalendar from "./components/ReactCalendar.jsx";

export default function Booking({ sidebar, ShowSideBar }) {
  return (
    <>
      <div className="bookBar">
        <Link href="#">
          <a className="menuBook" onClick={ShowSideBar}>
            BOOK
          </a>
        </Link>
      </div>
      <div className={sidebar ? "barMenu active" : "barMenu"}>
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
          <ReactCalendar />
        </div>
      </div>
    </>
  );
}
