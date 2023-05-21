import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UserList from "./components/UserList/UserList";
import Form from "./components/Form.jsx/Form";
import Warning from "./components/Warning/Warning";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const URL_BASE = "https://users-crud.academlo.tech//";
  const [usersList, setUsersList] = useState([]);
  const [formActive, setFormActive] = useState(false);
  const [userSelected, setUserSelected] = useState(null);
  const [warningVisible, setWarningVisible] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  // Ordena los usuarios de manera alfabetica por nombres
  const orderUsers = usersList.sort((a, b) =>
    a.first_name.localeCompare(b.first_name)
  );

  // Leer usuarios de la API
  const getUsers = async () => {
    try {
      const resp = await axios.get(`${URL_BASE}users/`);
      setUsersList(resp.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Mostrar el formulario de inscripción de usuario
  const createUserForm = () => {
    setFormActive(true);
    setUserSelected(null);
  };

  // Función para seleccionar usuario del cual queremos editar la información
  const selectUser = (user) => {
    setFormActive(true);
    setUserSelected(user);
  };

  // Función para traer el usuario al Warning de eliminar
  const getWarning = (user) => {
    setWarningVisible(true);
    setUserToDelete(user);
  };

  // Función para cancelar la eliminación del usuario
  const cancelDelete = () => {
    setWarningVisible(false);
    setUserToDelete(null);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <Header createUserForm={createUserForm} usersList={usersList} />
      {formActive && (
        <Form
          setFormActive={setFormActive}
          URL_BASE={URL_BASE}
          getUsers={getUsers}
          userSelected={userSelected}
          setUserSelected={setUserSelected}
        />
      )}
      <UserList
        userList={usersList}
        selectUser={selectUser}
        getWarning={getWarning}
      />
      {warningVisible && (
        <Warning
          userToDelete={userToDelete}
          setWarningVisible={setWarningVisible}
          URL_BASE={URL_BASE}
          getUsers={getUsers}
          cancelDelete={cancelDelete}
          setUserToDelete={setUserToDelete}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
