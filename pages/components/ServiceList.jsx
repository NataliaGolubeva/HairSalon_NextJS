import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ServiceList() {
  const [loading, setLoading] = useState(true);
  const [serviceList, setServiceList] = useState([]);
  useEffect(() => {
    axios(`https://wdev2.be/natalia21/eindwerk/api/service_lists.json?page=1`)
      .then((response) => {
        setServiceList(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <ul>
        {serviceList.length > 0 &&
          serviceList.map((service) => (
            <li key={service.id}>
              {service.title} {service.price} €<div>{service.category}</div>
            </li>
          ))}
      </ul>
    </>
  );
}
