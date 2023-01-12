import styles from "./app.module.css";
import { useState, useEffect } from "react";
import GetUserInfo from "./GetUserInfo.js";

function App() {
  return (
    <div className="App">
      <div className={styles.container}>
        <main>
          <h1 className={styles.mainh1}>Find Users</h1>
          <div className={styles.topbar}></div>
          <GetUserInfo />
        </main>
      </div>
    </div>
  );
}

export default App;
