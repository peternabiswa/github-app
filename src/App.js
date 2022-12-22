import styles from "./app.module.css";
import { useState, useEffect } from "react";
import GetUserInfo from "./GetUserInfo.js";
import { userName } from "./GetUserInfo.js";

function App() {
  const [userData, setUserData] = useState({});
  const [userName, setUserName] = useState("");

  const getName = (name) => {
    setUserName(name);
  };
  async function getData(userName) {
    const jsonData = await fetch(`https://api.github.com/users${userName}`);
    const userInfo = await jsonData.json();
    setUserData(userInfo);
  }

  useEffect((userName) => {
    getData(userName);
  }, []);

  return (
    <div className="App">
      <div className={styles.container}>
        <main>
          <h1 className={styles.mainh1}>Find Users</h1>
          <div className={styles.topbar}></div>
          <GetUserInfo uname={getName} />
          <Users user={userData} />;
        </main>
      </div>
    </div>
  );
}

export default App;
