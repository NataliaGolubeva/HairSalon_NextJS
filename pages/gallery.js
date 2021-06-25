import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function gallery() {
  const [loading, setLoading] = useState(true);
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  useEffect(() => {
    axios(`https://wdev2.be/natalia21/eindwerk/api/galleries.json?page=1`)
      .then((response) => {
        setSlides(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <>
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {slides.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
      </section>
    </>
  );
}
export default gallery;
