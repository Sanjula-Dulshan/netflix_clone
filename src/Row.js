import React, { useEffect, useState } from "react";
import axios from "axios";

function Row(props) {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    //if [], run once when the row loads, and dont run again

    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  console.log(movies);
  return (
    <div className="row">
      <h2>{props.title}</h2>
    </div>
  );
}

export default Row;
