import React from "react";
import "./UserCard.css";

const UserCard = ({ user, selectUser, getWarning }) => {
  return (
    <article className="card">
      <h2>
        {user.first_name} {user.last_name}
      </h2>
      <hr className="divider" />
      <div className="email__container">
        <p>EMAIL</p>
        <span>{user.email}</span>
      </div>
      <div className="birthday__container">
        <p> BIRTHDAY</p>
        <span className="birthday__date">
          <i className="bx bxs-gift"></i>
          <span>{user.birthday}</span>
        </span>
      </div>
      <div className="buttons">
        <button
          onClick={() => selectUser(user)}
          className="btn__edit"
          title="Edit"
        >
          <i className="bx bxs-pencil"></i>
        </button>
        <button
          onClick={() => getWarning(user)}
          className="btn__delete"
          title="Delete"
        >
          <i className="bx bxs-trash"></i>
        </button>
      </div>
    </article>
  );
};

export default UserCard;
