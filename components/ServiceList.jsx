import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ServiceList() {
  const [loading, setLoading] = useState(true);
  const [serviceList, setServiceList] = useState([]);
  const [haircut, setHaircut] = useState([]);
  const [style, setStyle] = useState([]);
  const [color, setColor] = useState([]);
  const [treatments, setTreatments] = useState([]);
  const [keratin, setKeratin] = useState([]);

  useEffect(() => {
    axios(`https://wdev2.be/natalia21/eindwerk/api/service_lists.json?page=1`)
      .then((response) => {
        setServiceList(response.data);
        console.log(response.data);
        setHaircut(
          response.data.filter(
            (item) => item.category === "/natalia21/eindwerk/api/categories/1"
          )
        );
        setStyle(
          response.data.filter(
            (item) => item.category === "/natalia21/eindwerk/api/categories/2"
          )
        );
        setColor(
          response.data.filter(
            (item) => item.category === "/natalia21/eindwerk/api/categories/3"
          )
        );
        setTreatments(
          response.data.filter(
            (item) => item.category === "/natalia21/eindwerk/api/categories/4"
          )
        );
        setKeratin(
          response.data.filter(
            (item) => item.category === "/natalia21/eindwerk/api/categories/5"
          )
        );
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="services">
      <div className="left">
        <h2>Cut&amp;Blowdry</h2>
        <ul className="serviceContent">
          {haircut.length > 0 &&
            haircut.map((h) => (
              <li key={h.id} className="serviceDetails">
                <div className="name" htmlFor={h.title}>
                  {h.title}
                </div>

                <div className="price">{h.price} €</div>
                <div className="time">{h.duration} min</div>
              </li>
            ))}
        </ul>
        <h2>Style</h2>
        <ul className="serviceContent">
          {style.length > 0 &&
            style.map((h) => (
              <li key={h.id} className="serviceDetails">
                <div className="name" htmlFor={h.title}>
                  {h.title}
                </div>

                <div className="price">{h.price} €</div>
                <div className="time">{h.duration} min</div>
              </li>
            ))}
        </ul>
        <h2>Color</h2>
        <ul className="serviceContent">
          {color.length > 0 &&
            color.map((h) => (
              <li key={h.id} className="serviceDetails">
                <div className="name" htmlFor={h.title}>
                  {h.title}
                </div>

                <div className="price">{h.price} €</div>
                <div className="time">{h.duration} min</div>
              </li>
            ))}
        </ul>
      </div>
      <div className="right">
        <h2>Treatments</h2>
        <ul className="serviceContent">
          {treatments.length > 0 &&
            treatments.map((h) => (
              <li key={h.id} className="serviceDetails">
                <div className="name" htmlFor={h.title}>
                  {h.title}
                </div>

                <div className="price">{h.price} €</div>
                <div className="time">{h.duration} min</div>
              </li>
            ))}
        </ul>
        <h2>Keratin&amp;Botox Services</h2>
        <ul className="serviceContent">
          {keratin.length > 0 &&
            keratin.map((h) => (
              <li key={h.id} className="serviceDetails">
                <div className="name" htmlFor={h.title}>
                  {h.title}
                </div>

                <div className="price">{h.price} €</div>
                <div className="time">{h.duration} min</div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
