import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

function blog() {
  const [loading, setLoading] = useState(true);
  const [blogList, setBlogList] = useState([]);
  useEffect(() => {
    axios(`https://wdev2.be/natalia21/eindwerk/api/blogs.json?page=1`)
      .then((response) => {
        setBlogList(response.data);
        console.log(response.data.reverse());
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
      <div className="blogPage">
        <h1 className="mainTitle">Blog</h1>
        <ul className="blogContent">
          {blogList.length > 0 &&
            blogList.map((h) => (
              <li key={h.id} className="postDetails">
                <div className="postTitle" htmlFor={h.title}>
                  {h.title}
                </div>
                {h.post}
                <div className="date">
                  {moment(h.createdAt).format("Do MMM YY")}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default blog;
