import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import AddModal from "./components/AddModal";
import EditModal from "./components/EditModal";
import axiosClient from "../../config/axiosClient";
import { NavbarBrand } from "../../components/Navbar/NavbarBrand";
import "./AdminTurnos.css";
import Swal from "sweetalert2";
import { formatDate } from "../../helpers/formatDate";

const Turnos = ({ showButtons = true, showNavbar = true }) => {
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
      console.error(error);
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
      console.error(error);
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
  }, []);

  return (
    <>
      {showNavbar && <NavbarBrand />}
      <Container className="pb-5">
        {showButtons && (    
        <>
        <Container className="mt-4 mt-md-5 mb-3 mb-sm-3 d-flex justify-content-center flex-wrap">
          <Button variant="success" onClick={handleShow} className="button-table m-1 m-sm-3">
            Agregar Turno
          </Button>
          <Button
            variant="warning"
            onClick={handleShowEdit}
            className="button-table m-1 m-sm-3"
            disabled={!selected}
          >
            Editar Turno
          </Button>
          <Button variant="danger" onClick={deleteTurno} className="button-table m-1 m-sm-3" disabled={!selected}>
            Borrar Turno
          </Button>
        </Container>
        </>
      )}
        <Table className="table  mb-0" bordered hover>
          <thead>
            <tr className="col-12 d-flex flex-wrap">
              <th className="col-4 col-sm-2">Usuario</th>
              <th className="col-4 col-sm-2">Mascota</th>
              <th className="col-4 col-sm-2">Detalle Cita</th>
              <th className="col-4 col-sm-2">Fecha</th>
              <th className="col-4 col-sm-2">Hora</th>
              <th className="col-4 col-sm-2">Veterinario</th>
            </tr>
          </thead>
          <tbody>
            {turnos.map((turno) => (
              <tr
                key={turno._id}
                onClick={() => handleRowClick(turno._id)}
                className={selected === turno._id ? "selected-row d-flex flex-wrap" : "d-flex flex-wrap"}
              >
                <td className="col-4 col-sm-2">{turno.user?.nombre}</td>
                <td className="col-4 col-sm-2">{turno.user?.pet?.nombre}</td>
                <td className="col-4 col-sm-2">{turno.detalleCita}</td>
                <td className="col-4 col-sm-2">{formatDate(turno.fecha)}</td>
                <td className="col-4 col-sm-2">{turno.hora}</td>
                <td className="col-4 col-sm-2">{turno.veterinarian?.nombre}</td>
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