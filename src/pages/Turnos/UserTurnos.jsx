import React, { useContext, useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import axiosClient from "../../config/axiosClient";
import { NavbarBrand } from "../../components/Navbar/NavbarBrand";
import AddModal from "./components/AddModal";
import Swal from "sweetalert2";
import { UserContext } from "../../context/UserContext";

const UserTurnos = () => {
  const { user } = useContext(UserContext);
  const [pet, setPet] = useState(null);
  const [turnos, setTurnos] = useState(null);
  const [selected, setSelected] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  console.log(user, '¡Usuario!');
  console.log(user._id);

  const getTurnos = async () => {
    try {
      if (user && user._id) {
        const response = await axiosClient.get(`/users/${user._id}`);
        console.log(response.data.user.pet.nombre ,'USUARIO en GET');
        setTurnos(response.data.user.turnos);
        setPet(response.data.user.pet.nombre);
      }
    } catch (error) {
      console.error("Error fetching turnos:", error.message);
    }
  };

  const deleteTurno = async () => {
    try {
      const confirmDelete = await Swal.fire({
        title: "¿Estás seguro?",
        text: "Esta acción es irreversible.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar",
      });

      if (confirmDelete.isConfirmed) {
        await axiosClient.delete(`/turnos/${selected}`);

        Swal.fire({
          title: "¡Turno eliminado!",
          text: "El turno ha sido eliminado correctamente.",
          icon: "success",
        });

        setTurnos(turnos.filter((turno) => turno._id !== selected));
        setSelected(null);
      }
    } catch (error) {
      console.error("Error deleting turno:", error.message);
    }
  };

  const handleRowClick = (turnoId) => {
    if (selected === turnoId) {
      setSelected(null);
    } else {
      setSelected(turnoId);
    }
  };

  const handleShowAddModal = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
    getTurnos();
  };

  useEffect(() => {
    getTurnos();
  }, [user]);

  return (
    <>
      <NavbarBrand />
      <Container>
        <Button variant="success" onClick={handleShowAddModal} className="m-3">
          Agregar Turno
        </Button>
        <Button
          variant="danger"
          onClick={deleteTurno}
          className="m-3"
          disabled={!selected}
        >
          Borrar Turno
        </Button>

        <Table bordered hover>
          <thead>
            <tr>
              <th>Mascota</th>
              <th>Detalle Cita</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Veterinario</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(turnos) &&
              turnos.map((turno) => (
                <tr
                  key={turno._id}
                  onClick={() => handleRowClick(turno._id)}
                  className={selected === turno._id ? "selected-row" : ""}
                >
                  <td>{pet}</td>
                  <td>{turno.detalleCita}</td>
                  <td>{new Date(turno.fecha).toLocaleDateString()}</td>
                  <td>{turno.hora}</td>
                  <td>{turno.veterinarian?.nombre}</td>
                </tr>
              ))}
          </tbody>
        </Table>

        <AddModal
          show={showAddModal}
          handleClose={handleCloseAddModal}
          userId={user._id}
        />
      </Container>
    </>
  );
};

export default UserTurnos;
