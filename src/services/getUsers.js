function GetUsers({ userName }) {
  async function getdata({ userName }) {
    const jsonData = await fetch(`https://api.github.com/users${userName}`);
    const users = await jsonData.json();
    return users;
  }

  return <div>getUsers</div>;
}

export default GetUsers;
