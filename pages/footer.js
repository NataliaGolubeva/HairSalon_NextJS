import { FiInstagram } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { CgCopyright } from "react-icons/cg";
function Footer() {
  return (
    <div className="footerContainer">
      <div className="copyright">
        {" "}
        <CgCopyright /> Copyright 2021. All rights reserved.
      </div>
      <div className="followUs">
        <a href="https://www.instagram.com/natalia.gilin/" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://www.instagram.com/natalia.gilin/" target="_blank">
          <FaFacebookSquare />
        </a>
        <a href="https://www.instagram.com/natalia.gilin/" target="_blank">
          <FaTwitterSquare />
        </a>
      </div>
    </div>
  );
}

export default Footer;
