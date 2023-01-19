import React, { useEffect, useState } from "react";
import News from "./NewsSlider/index.js";
import BASE_URL from "../../Base.js";

const Newsfetch = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/posts`)
      .then((res) => res.json())
      .then((res) => {
        setNews(res[0].data);
      })
      .catch((err) => console.error(err));
  });

  return (
    <div>
      <News news={news} />
    </div>
  );
};

export default Newsfetch;
