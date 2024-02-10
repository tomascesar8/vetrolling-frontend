import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import AddModal from "./components/AddModal";
import EditModal from "./components/EditModal";
import axiosClient from "../../config/axiosClient";
import { NavbarBrand } from "../../components/Navbar/NavbarBrand";
import "./AdminTurnos.css";
import Swal from "sweetalert2";

const Turnos = () => {
  const [turnos, setTurnos] = useState([]);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const getTurnos = async () => {
    try {
      const response = await axiosClient.get("/turnos");
      setTurnos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTurno = async () => {
    try {
      // Obtener la información del turno antes de eliminarlo
      const turnoToDelete = turnos.find((turno) => turno._id === selected);
  
      // Mostrar el modal de confirmación
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
        // Eliminar el turno
        await axiosClient.delete(`/turnos/${selected}`);
  
        // Mostrar el modal de éxito
        Swal.fire({
          title: "¡Turno eliminado!",
          text: "El turno ha sido eliminado correctamente.",
          icon: "success",
        });
  
        // Actualizar la lista de turnos excluyendo el turno eliminado
        setTurnos(turnos.filter((turno) => turno._id !== selected));
  
        // Limpiar la selección actual
        setSelected(null);
      }
    } catch (error) {
      console.log('Error al borrar el turno');
      console.log(error);
    }
  };
  

  const handleRowClick = (turnoId) => {
    if (selected === turnoId) {
      setSelected(null);
    } else {
      setSelected(turnoId);
    }
  };

  useEffect(() => {
    getTurnos();
    console.log('GET TURNOS');
  }, []);

  return (
    <>
      <NavbarBrand />
      <Container>
        <Button variant="success" onClick={handleShow} className="m-3">
          Agregar Turno
        </Button>
        <Button
          variant="warning"
          onClick={handleShowEdit}
          className="m-3"
          disabled={!selected}
        >
          Editar Turno
        </Button>
        <Button variant="danger" onClick={deleteTurno} className="m-3" disabled={!selected}>
          Borrar Turno
        </Button>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Mascota</th>
              <th>Detalle Cita</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Veterinario</th>
            </tr>
          </thead>
          <tbody>
            {turnos.map((turno) => (
              <tr
                key={turno._id}
                onClick={() => handleRowClick(turno._id)}
                className={selected === turno._id ? "selected-row" : ""}
              >
                <td>{turno.user?.nombre}</td>
                <td>{turno.user?.pet?.nombre}</td>
                <td>{turno.detalleCita}</td>
                <td>{new Date(turno.fecha).toLocaleDateString()}</td>
                <td>{turno.hora}</td>
                <td>{turno.veterinarian?.nombre}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <AddModal 
          show={show} 
          handleClose={handleClose} 
          setTurnos={setTurnos} 
          turnos={turnos} 
          getTurnos={getTurnos}
        />
        <EditModal
          show={showEdit}
          handleClose={handleCloseEdit}
          selected={selected}
          getTurnos={getTurnos}
          setTurnos={setTurnos}
        />
      </Container>
    </>
  );
};

export default Turnos;