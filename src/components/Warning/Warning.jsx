import React from "react";
import axios from "axios";
import "./Warning.css";

const Warning = ({
  userToDelete,
  URL_BASE,
  getUsers,
  cancelDelete,
  setWarningVisible,
  setUserToDelete,
}) => {
  // Función para eliminar al usuario seleccionado
  const deleteUser = (user) => {
    axios
      .delete(`${URL_BASE}users/${user.id}/`)
      .then(() => getUsers())
      .catch((error) => console.error(error));
    setWarningVisible(false);
    setUserToDelete(null);
  };

  return (
    <div className="warning__container">
      <div className="warning">
        <p>
          {" "}
          ¿ Do you want to delete the user <br />
          {`"${userToDelete.first_name} ${userToDelete.last_name}"`} ?
        </p>
        <span>{"¡This action is permanent!"}</span>
        <div className="buttons">
          <button
            onClick={() => deleteUser(userToDelete)}
            className="warning__delete"
          >
            Delete
          </button>
          <button onClick={() => cancelDelete()} className="warning__cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Warning;
