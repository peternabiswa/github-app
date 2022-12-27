import { useState, React } from "react";
import styles from "./app.module.css";

function GetUserInfo({ getName }) {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    getName(name);
  };
  return (
    <div>
      <form className={styles.form}>
        <input
          test-id="gitUser"
          type="text"
          placeholder="Enter GitHub user name:"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default GetUserInfo;
