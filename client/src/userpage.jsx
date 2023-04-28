import React, { useState, useEffect } from "react";
import axios from "axios";

let Userpage = ({ route }) => {
  const [data, setdata] = useState("Empty String");

  useEffect(() => {
    if (!route) {
      axios
        .get("http://localhost:3000/")
        .then((res) => {
          console.log(res.data);
          setdata(res.data);
        })
        .catch((err) => console.log(err));
    }
    if(route==="user")
    {   axios
        .get("http://localhost:3000/user")
        .then((res) => {
          console.log(res.data);
          setdata(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return <h1>{data}</h1>;
};

export default Userpage;
