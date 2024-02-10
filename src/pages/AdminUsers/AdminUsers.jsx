import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import AddUserModal from "./components/AddUserModal";
import EditUserModal from "./components/EditUserModal";
import axiosClient from "../../config/axiosClient";
import { NavbarBrand } from "../../components/Navbar/NavbarBrand";
import "./AdminUsers.css";
import Swal from "sweetalert2";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleCloseAddModal = () => setShowAddModal(false);
  const handleShowAddModal = () => setShowAddModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);
  const handleShowEditModal = () => setShowEditModal(true);

  const getUsers = async () => {
    try {
      const response = await axiosClient.get("/users");
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const deleteUser = async () => {
  //   try {
  //     // Obtener la información del usuario antes de eliminarlo
  //     const userToDelete = users.find((user) => user._id === selectedUser);
  //     console.log(selectedUser);
  //     console.log(userToDelete);
  //     // Eliminar la mascota vinculada al usuario
  //     if (userToDelete.pet) {
  //       console.log(userToDelete.pet._id);
  //       await axiosClient.delete(`/pets/${userToDelete.pet._id}`);
  //       console.log("La mascota se elimino correctamente");
  //     }
  //     // Eliminar el usuario
  //     const response = await axiosClient.delete(`/users/${selectedUser}`);
  //     console.log(response);

  //     // Actualizar la lista de usuarios excluyendo el usuario eliminado
  //     setUsers(users.filter((user) => user._id !== selectedUser));

  //     // Limpiar la selección actual
  //     setSelectedUser(null);
  //   } catch (error) {
  //     console.log('Error al borrar el usuario');
  //     console.log(error);
  //   }
  // };

  const deleteUser = async () => {
    try {
      // Obtener la información del usuario antes de eliminarlo
      const userToDelete = users.find((user) => user._id === selectedUser);
  
      // Mostrar el modal de confirmación
      const confirmDelete = await Swal.fire({
        title: "¿Estás seguro?",
        text: `Se eliminará el usuario ${userToDelete.nombre}. Esta acción es irreversible.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar",
      });
  
      if (confirmDelete.isConfirmed) {
        // Eliminar la mascota vinculada al usuario
        if (userToDelete.pet) {
          await axiosClient.delete(`/pets/${userToDelete.pet._id}`);
        }
  
        // Eliminar el usuario
        await axiosClient.delete(`/users/${selectedUser}`);
  
        // Mostrar el modal de éxito
        Swal.fire({
          title: "¡Usuario eliminado!",
          text: `El usuario ${userToDelete.nombre} ha sido eliminado correctamente.`,
          icon: "success",
        });
  
        // Actualizar la lista de usuarios excluyendo el usuario eliminado
        setUsers(users.filter((user) => user._id !== selectedUser));
  
        // Limpiar la selección actual
        setSelectedUser(null);
      }
    } catch (error) {
      console.log('Error al borrar el usuario');
      console.log(error);
    }
  };
  

  const handleRowClick = (userId) => {
    if (selectedUser === userId) {
      setSelectedUser(null);
    } else {
      setSelectedUser(userId);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <NavbarBrand />
      <Container>
        <Button variant="success" onClick={handleShowAddModal} className="m-3">
          Agregar Usuario
        </Button>
        <Button
          variant="warning"
          onClick={handleShowEditModal}
          className="m-3"
          disabled={!selectedUser}
        >
          Editar Usuario
        </Button>
        <Button variant="danger" onClick={deleteUser} className="m-3" disabled={!selectedUser}>
          Borrar Usuario
        </Button>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Mascota</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                onClick={() => handleRowClick(user._id)}
                className={selectedUser === user._id ? "selected-row" : ""}
              >
                <td>{user.nombre}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.pet?.nombre}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <AddUserModal
          show={showAddModal}
          handleClose={handleCloseAddModal}
          setUsers={setUsers}
          users={users}
          getUsers={getUsers}
        />
        <EditUserModal
          show={showEditModal}
          handleClose={handleCloseEditModal}
          selectedUser={selectedUser}
          getUsers={getUsers}
          setUsers={setUsers}
        />
      </Container>
    </>
  );
};

export default Users;
