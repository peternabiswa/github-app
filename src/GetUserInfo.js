import { useState, React } from "react";
import GetUsers from "./services/Users";
import styles from "./app.module.css";

function GetUserInfo({ getName }) {
  const [userName, setUserName] = useState("");

  const handleChange = (event) => {
    setUserName(event.target.value);
    getName(event.target.value);
  };

  return (
    <div>
      <form className={styles.form}>
        <input
          test-id="gitUser"
          type="text"
          placeholder="Enter GitHub user name:"
          value={userName}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GetUserInfo;
