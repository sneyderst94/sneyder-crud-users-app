import React from "react";
import "./Header.css";

const Header = ({ usersList, createUserForm }) => {
  return (
    <header className="header__container">
      <div className="title__button">
        <h1>Users Management</h1>
        <button onClick={createUserForm} className="create__user">
          <i className="bx bxs-user-plus"></i> Create new user
        </button>
      </div>
      <p className="registered__users">
        <strong>Registered users: </strong> {usersList.length}
      </p>
    </header>
  );
};

export default Header;
