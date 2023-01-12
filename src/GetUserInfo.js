import { useState, useEffect, React } from "react";
import styles from "./app.module.css";
import Users from "./services/Users";

function GetUserInfo({ getName }) {
  const [userData, setuserData] = useState({});
  const [userName, setuserName] = useState("");

  var gitHubUrl = `https://api.github.com/users/${userName}`;

  const getData = async () => {
    try {
      const jsonData = await fetch(gitHubUrl);
      const userInfo = await jsonData.json();
      setuserData(userInfo);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, [userName]);

  const handleChange = (event) => {
    setuserName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    <Users userData={userData} />;
  };

  return (
    <div>
      <form className={styles.form}>
        <input
          test-id="gitUser"
          type="text"
          placeholder="Enter GitHub user name:"
          value={userName}
          onChange={(event) => handleChange(event)}
        />
        <button type="submit" onClick={(event) => handleSubmit(event)}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default GetUserInfo;
