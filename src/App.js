import styles from "./app.module.css";
import getUsers from "./services/getUsers";
import { useState, useEffect } from "react";
import GetUserInfo from "./GetUserInfo.js";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((userInfo) => setUsers(userInfo))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(users[0]);
  return (
    <div className="App">
      <div className={styles.container}>
        <div className={styles.topbar}></div>
        <main>
          <h1 className={styles.mainh1}>Find Users</h1>
          <GetUserInfo />
          {/* <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.login}
                <img url={user.avatar_url} />
              </li>
            ))}
          </ul> */}
        </main>
      </div>
    </div>
  );
}

export default App;
