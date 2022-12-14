import { useState, React } from "react";
import GetUsers from "./services/GetUsers";
import styles from "./app.module.css";

function GetUserInfo() {
  const [userName, setUserName] = useState("");

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = () => {
    <GetUsers userName={userName} />;
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label> Enter GitHub user name: </label>
        <input
          test-id="gitUser"
          type="text"
          placeholder="..."
          value={userName}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GetUserInfo;
