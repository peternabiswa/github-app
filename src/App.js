import styles from "./app.module.css";
import getUsers from "./services/getUsers";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((userInfo) => setUsers(userInfo))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(users[0]);
  return (
    <div className="App">
      <div className={styles.container}>
        <h1>GitHub Users</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.login}
              <img url={user.avatar_url} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
