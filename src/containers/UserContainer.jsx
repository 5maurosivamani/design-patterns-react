import React, { useEffect } from "react";
import UserList from "../components/UserList/";

function UserContainer() {
  const url = "https://fakestoreapi.com/users";
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const json = await response.json();
      if (!json.length) return;
      setUsers(json);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h2>Users (Container / Presentation Pattern)</h2>
      <UserList users={users} loading={loading} error={error} />
    </>
  );
}

export default UserContainer;
