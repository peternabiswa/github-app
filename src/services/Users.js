import React from "react";
import style from "./users.module.css";

const Users = (props) => {
  const { userData } = props;
  return (
    <div className={style.userProfile}>
      <div>
        <img
          className={style.profilePic}
          src={userData.avatar_url}
          alt="Profile"
        ></img>
      </div>

      <div className={style.details}>
        <h1>{userData.name}</h1>
        <div>userName: {userData.login}</div>
        <div>ID: {userData.id}</div>
        <div>Followers: {userData.id}</div>
        <div>Following: {userData.id}</div>
        <div>
          <a className={style.link} href={userData.html_url}>
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};
export default Users;
