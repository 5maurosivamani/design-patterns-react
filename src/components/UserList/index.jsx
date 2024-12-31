import React from "react";
import "./UserList.css";
import PropTypes from "prop-types";

function UserList({ users, loading, error }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went Wrong!</p>;
  if (!users) return null;

  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user.id} className="user">
          <strong>{user.username}</strong>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

const user = PropTypes.shape({
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

UserList.propTypes = {
  users: PropTypes.arrayOf(user).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default UserList;

