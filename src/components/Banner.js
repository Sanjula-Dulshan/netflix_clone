import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../requests";

function Banner() {
  const [movie, setmovie] = useState([]);

  //   useEffect(() => {
  //     async function fetchData() {
  //       const request = await axios.get(requests.fetchActionMovies);
  //       setmovie(
  //         request.data.results[
  //           Math.floor(Math.random() * request.data.results.length - 1)
  //         ]
  //       );

  //       return request;
  //     }
  //     fetchData();
  //   }, []);
  //   console.log(movie);
  return <header></header>;
}

export default Banner;
