;import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
import axiosClient from "../../../config/axiosClient";
import useForm from "../../../hooks/useForm";
import { useEffect, useState } from "react";
import { ADD_TURNOS_VALUES } from "../../../constanst";

const AddModal = ({ show, handleClose, setTurnos, turnos, getTurnos, userId }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [veterinarios, setVeterinarios] = useState([]);

  const getUsuarios = async () => {
    try {
      const response = await axiosClient.get('/users');
      setUsuarios(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getVeterinarios = async () => {
    try {
      const response = await axiosClient.get('/veterinarians');
      setVeterinarios(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTurno = async (info) => {
    try {
      console.log(info);
      const response = await axiosClient.post('/turnos', info);
      console.log(response.data);
      turnos?.setTurnos([...turnos, response.data.turno]);
      handleClose();
      console.log('hola pai'); // Cerrar el modal después de agregar el turno
      getTurnos?.getTurnos(); // Actualizar la lista de turnos después de agregar uno nuevo
    } catch (error) {
      console.log(error);
    }
  };
  userId? ADD_TURNOS_VALUES.user = userId : ADD_TURNOS_VALUES.user = '';
  const { handleSubmit, values, setValues } = useForm(ADD_TURNOS_VALUES, addTurno);

  useEffect(() => {
    getUsuarios();
    getVeterinarios();
  }, []);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Turno</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <FloatingLabel controlId="floatingInput" label="Detalle Cita" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Detalle de la cita"
              className=""
              name="detalleCita"
              value={values.detalleCita || ''}
              onChange={(e) => setValues({ ...values, detalleCita: e.target.value })}
            />
          </FloatingLabel>

          {userId ? (
  <input type="hidden" name="user" value={userId} />
) : (
  <FloatingLabel controlId="floatingUser" label="Usuario">
    <Form.Select
      name="user"
      onChange={(e) => setValues({ ...values, user: e.target.value })}
      value={values.user || ''}
    >
      <option value="">Seleccione un usuario</option>
      {usuarios.map((usuario) => (
        <option key={usuario._id} value={usuario._id}>
          {usuario.nombre}
        </option>
      ))}
    </Form.Select>
  </FloatingLabel>
)}

{/*       <FloatingLabel controlId="floatingUser" label="Usuario">
            <Form.Select
              name="user"
              onChange={(e) => setValues({ ...values, user: e.target.value })}
              value={values.user || ''}
            >
              <option value="">Seleccione un usuario</option>
              {usuarios.map((usuario) => (
                <option key={usuario._id} value={usuario._id}>
                  {usuario.nombre}
                </option>
              ))}
            </Form.Select>
          </FloatingLabel> */}

          <FloatingLabel controlId="floatingVeterinarian" label="Veterinario">
            <Form.Select
              name="veterinarian"
              onChange={(e) => setValues({ ...values, veterinarian: e.target.value })}
              value={values.veterinarian || ''}
            >
              <option value="">Seleccione un veterinario</option>
              {veterinarios.map((veterinario) => (
                <option key={veterinario._id} value={veterinario._id}>
                  {veterinario.nombre}
                </option>
              ))}
            </Form.Select>
          </FloatingLabel>

          <FloatingLabel controlId="floatingFecha" label="Fecha">
            <Form.Control
              type="date"
              name="fecha"
              value={values.fecha || ''}
              onChange={(e) => setValues({ ...values, fecha: e.target.value })}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingHora" label="Hora">
            <Form.Control
              type="time"
              name="hora"
              value={values.hora || ''}
              onChange={(e) => setValues({ ...values, hora: e.target.value })}
            />
          </FloatingLabel>

          <Button className="primary-button" type="submit">
            Agregar
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddModal;
