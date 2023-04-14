import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Form.css";

const Form = ({
  setFormActive,
  URL_BASE,
  getUsers,
  userSelected,
  setUserSelected,
}) => {
  const { register, handleSubmit, reset } = useForm();

  const inputsDefault = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: "",
  };

  useEffect(() => {
    if (userSelected) {
      reset(userSelected);
    } else {
      reset(inputsDefault);
    }
  }, [userSelected]);

  //Función para crear un nuevo usuario y actualizar los datos de un usuario

  const submit = (userData) => {
    //! Si hay un usuario seleccionado entonces ejecuta la función de actualizar
    if (userSelected) {
      axios
        .put(`${URL_BASE}users/${userSelected.id}/`, userData)
        .then(() => getUsers())
        .catch((error) => console.error(error));
    } else {
      //! Si no hay un usuario seleccionado entonces la función sirve para crear un nuevo usuario
      axios
        .post(`${URL_BASE}users/`, userData)
        .then(() => getUsers())
        .catch((error) => console.error(error));
    }
    closeForm();
  };

  // Función para cerrar el formulario
  const closeForm = () => {
    setFormActive(false);
    setUserSelected(null);
  };

  return (
    <div className="form__container">
      <div className="form__app">
        <button onClick={closeForm} className="btn__close">
          X
        </button>
        <h3>{userSelected ? "Edit user " : "New user"}</h3>
        <form onSubmit={handleSubmit(submit)}>
          <div className="form__input__label">
            <label htmlFor="first_name"></label>First name
            <input
              type="text"
              id="first_name"
              {...register("first_name")}
              required
            />
          </div>
          <div className="form__input__label">
            <label htmlFor="last_name"></label>Last name
            <input
              type="text"
              id="last_name"
              {...register("last_name")}
              required
            />
          </div>
          <div className="form__input__label">
            <label htmlFor="email"></label>Email
            <input type="email" id="email" {...register("email")} required />
          </div>
          <div className="form__input__label">
            <label htmlFor="password"></label>Password
            <input
              type="password"
              id="password"
              {...register("password")}
              required
            />
          </div>
          <div className="form__input__label">
            <label htmlFor="birthday"></label>Birthday
            <input
              type="date"
              id="birthday"
              {...register("birthday")}
              required
            />
          </div>
          <button type="submit" className="btn__submit">
            {userSelected ? "Update data" : "Add new user"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
