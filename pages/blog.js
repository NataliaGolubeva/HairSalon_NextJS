import React, { useState, useEffect } from "react";
import axios from "axios";

function blog() {
  const [loading, setLoading] = useState(true);
  const [blogList, setBlogList] = useState([]);
  useEffect(() => {
    axios(`https://wdev2.be/natalia21/eindwerk/api/blogs?page=1`)
      .then((response) => {
        setBlogList(response.data);
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
    <div>
      <div className="servicePage">
        <h1 className="mainTitle">Our services</h1>
      </div>
    </div>
  );
}

export default blog;
