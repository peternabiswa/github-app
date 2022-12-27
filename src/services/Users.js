function Users({ userData }) {
  console.log([...userData]);
  // userData?.map((user) => {
  //   return (
  //     <ul>
  //       <li> {user.name} </li>
  //       <li> {user.id} </li>
  //       <li> {user.login} </li>
  //       <li> {user.avatar_url} </li>
  //       <li> {user.company} </li>
  //       <li> {user.email} </li>
  //     </ul>
  //   );
  // });
}

export default Users;
