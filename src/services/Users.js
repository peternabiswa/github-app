import React from "react";

const Users = (props) => {
  const { userData } = props;
  return (
    <div>
      <div>Name: {userData.name}</div>
      <div>userName: {userData.login}</div>
      <div>ID: {userData.id}</div>
      <div>Followers: {userData.id}</div>
      <div>Following: {userData.id}</div>
      <div>
        <a href={userData.html_url}>Repository</a>
      </div>
      <div>
        <img src={userData.avatar_url} alt="Profile picture"></img>
      </div>
    </div>
  );
};
export default Users;
