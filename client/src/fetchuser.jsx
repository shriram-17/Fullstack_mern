import axios from "axios";
import React, { useState, useEffect } from "react";

let Userfetch = () => {

  const [users, setUsers] = useState([]);
  const fetchUsers = () => {
    axios
      .get("http://localhost:3000/user/all")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <button onClick={fetchUsers}>Fetch</button>
      <button onClick={()=>{setUsers([])}}>Clear</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Userfetch;
