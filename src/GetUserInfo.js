import { useState, useEffect, React } from "react";
import styles from "./app.module.css";
import Users from "./services/Users";

function GetUserInfo() {
  const [userData, setuserData] = useState({});
  const [userName, setuserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const gitHubUrl = `https://api.github.com/users/${userName}`;
      setIsLoading(true);
      setError(null);
      try {
        const jsonData = await fetch(gitHubUrl);
        const userInfo = await jsonData.json();
        setuserData(userInfo);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    }
    if (userName) {
      fetchData();
    }
  }, [dataFetched]);

  const handleChange = (event) => {
    setuserName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDataFetched(true);
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>An error occurred: {error.message}</div>
      ) : (
        <div>
          <form className={styles.form}>
            <input
              test-id="gitUser"
              type="text"
              placeholder="Enter GitHub user name:"
              value={userName}
              onChange={handleChange}
            />
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
          {userName && <Users userData={userData} />}
        </div>
      )}
    </div>
  );
}

export default GetUserInfo;
