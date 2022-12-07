async function getUsers() {
  const jsonData = await fetch(`https://api.github.com/users`);
  const users = await jsonData.json();
  return users;
}

export default getUsers;
