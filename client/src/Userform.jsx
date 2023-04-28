import React, { useState } from "react";
import axios from "axios";

let UserForm = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user", {
        name,
        email,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UserForm;