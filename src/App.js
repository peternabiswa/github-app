import styles from "./app.module.css";
import { useState, useEffect } from "react";
import GetUserInfo from "./GetUserInfo.js";
import Users from "./services/Users";

function App() {
  const [userData, setuserData] = useState({});
  const [userName, setuserName] = useState("");

  const getName = (name) => {
    setuserName(name);
  };
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

  return (
    <div className="App">
      <div className={styles.container}>
        <main>
          <h1 className={styles.mainh1}>Find Users</h1>
          <div className={styles.topbar}></div>
          <GetUserInfo getName={getName} />
          <Users userData={userData} />;
        </main>
      </div>
    </div>
  );
}

export default App;
