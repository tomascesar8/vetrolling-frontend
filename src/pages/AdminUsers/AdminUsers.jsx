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
      <Container className="pb-3">
        <Container className="mt-4 mt-md-5 mb-3 mb-sm-3">
          <Button variant="success" onClick={handleShowAddModal} className="button-table m-1 m-md-3">
            Crear usuario
          </Button>
          <Button
            variant="warning"
            onClick={handleShowEditModal}
            className="button-table m-1 m-sm-3"
            disabled={!selectedUser}
          >
            Editar Usuario
          </Button>
          <Button variant="danger" onClick={deleteUser} className="button-table m-1 m-md-3" disabled={!selectedUser}>
            Borrar Usuario
          </Button>
        </Container>
        <Table className="row pb-5" bordered hover>
          <thead>
            <tr className="col-12 d-flex direction-column flex-wrap">
              <th className="col-3 ">Nombre</th>
              <th className="col-4 ">Email</th>
              <th className="col-2 ">Rol</th>
              <th className="col-3 ">Mascota</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                onClick={() => {
                  if (user._id !== "65a365c50cd6f9e4d0936fb7") {
                    handleRowClick(user._id);
                  }
                }}
                className={
                  `col-12 d-flex direction-column flex-wrap ${user._id === "65a365c50cd6f9e4d0936fb7"
                    ? "read-only-row"
                    : selectedUser === user._id
                    ? "selected-row"
                    : ""
                  }`
                }
                readOnly={user._id === "65a365c50cd6f9e4d0936fb7"}
              >
                <td className="col-3 ">{user.nombre}</td>
                <td className="col-4 ">{user.email}</td>
                <td className="col-2 ">{user.role}</td>
                <td className="col-3 ">{user.pet?.nombre}</td>
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
