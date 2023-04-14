import React from "react";
import UserCard from "../UserCard/UserCard";
import "./UserList.css";

const UserList = ({ userList, selectUser, getWarning }) => {
  return (
    <div className="user_list">
      {userList.map((user) => (
        <UserCard
          user={user}
          selectUser={selectUser}
          key={user.id}
          getWarning={getWarning}
        />
      ))}
    </div>
  );
};

export default UserList;
