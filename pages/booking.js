import { FaIoxhost } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import React, { useState } from "react";
import Calendar from "./components/calendar";

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
          <Calendar />
        </div>
      </div>
    </>
  );
}
