import Head from "next/head";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1 className="mainHeader">Victoria</h1>
          <h3 className="secondHeader">Diest</h3>
        </div>
        <div className="iconArrow">
          <IoIosArrowDown />
        </div>
        <div className="homeContent">
          <div className="block">
            <div className="quote left">
              "Inner beauty is great but fabulous hair never hearts."{" "}
            </div>
            <div className="homeImage">
              <img
                src="https://wdev2.be/natalia21/eindwerk/system/image.php?image=/natalia21/eindwerk/system/public/photos/front2.jpg"
                width="400px"
              />
            </div>
          </div>
          <div className="block">
            <div className="homeImage">
              <img
                src="https://wdev2.be/natalia21/eindwerk/system/image.php?image=/natalia21/eindwerk/system/public/photos/front1.jpg"
                width="400px"
              />
            </div>
            <div className="quote right">
              "Invest in your hair. It's a crown you never take off."
            </div>
          </div>
        </div>
        <div className="bottomBlock">
          <div className="centerQuote">
            Behind every beautiful woman is a hairdresser who loves her.
          </div>
          <div className="centerLink">
            <a href="/about">Let's meet</a>
          </div>
        </div>
      </div>
    </>
  );
}
