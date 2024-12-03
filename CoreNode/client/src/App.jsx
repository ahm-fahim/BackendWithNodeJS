import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const userData = { name };

    console.log(userData);
    fetch("http://localhost:5001/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        const newUser = [...users, data];
        setUsers(newUser);
        form.reset();
      });
  };

  return (
    <>
      <h1>Core Node JS</h1>
      <form onSubmit={handleAddUser} action="">
        <input type="text" name="name" />
        <button type="submit">Add</button>
      </form>
      <h2>Total Users : {users.length}</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
}

export default App;
