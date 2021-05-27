export const getData = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  const response = await fetch(url);

  const data = await response.json();

  const users = data.map((user) => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    address: user.address.street,
    city: user.address.city,
    phone: user.phone,
  }));

  return users;
};
