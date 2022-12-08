import React from "react";
import formstyles from "./app.module.css";
import { useState, useEffect } from "react";

function GetUserInfo() {
  const [username, setUsername] = useState("");

    const handleChange = (event) => {
      setMessage(event.target.value);
    };

  const handlesubmit = () => {
    // 👇 "message" stores input field value
    setUsername(username);
  };


  return (
    <div className={formstyles.infobox}>
      <form className={formstyles.form}>
        <label>
          <h2>Enter GitHub Username</h2>
          <input
            type="text"
            value={username}
          />
        </label>
        <button className={formstyles.button} type="submit">
          Submit
          {onClick={(event) => {
    setMessage(event.target.value)}}
        </button>
      </form>
    </div>
  );
}
export default GetUserInfo;
