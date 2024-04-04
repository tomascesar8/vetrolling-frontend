import { Modal, Button, FloatingLabel, Form, Container } from "react-bootstrap";
import axiosClient from "../../../config/axiosClient";
import useForm from "../../../hooks/useForm";
import { useEffect, useState } from "react";
import { ADD_TURNOS_VALUES } from "../../../constanst";
import Swal from "sweetalert2";
import { calculateDateRange } from "../../../helpers/calculateDateRange";
import { handleKeyDown } from "../../../helpers/validations";

const AddModal = ({ show, handleClose, turnos, setTurnos, getTurnos, userId }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [veterinarios, setVeterinarios] = useState([]);
  const { minDate, maxDate } = calculateDateRange();

  const getUsuarios = async () => {
    try {
      const response = await axiosClient.get('/users');
      setUsuarios(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getVeterinarios = async () => {
    try {
      const response = await axiosClient.get('/veterinarians');
      setVeterinarios(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addTurno = async (info) => {
    try {
      const newTurno = await axiosClient.post('/turnos', info);
      const updatedTurnos = Array.isArray(turnos) ? [...turnos, newTurno.data.turno] : [newTurno.data.turno];
      setTurnos(updatedTurnos);
      setValues(ADD_TURNOS_VALUES);
      handleClose();
      getTurnos();
      Swal.fire({
        icon: 'success',
        title: 'Turno agendado',
        text: 'Turno agendado exitosamente.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsuarios();
    getVeterinarios();
  }, []); 

  userId? ADD_TURNOS_VALUES.user = userId : ADD_TURNOS_VALUES.user = '';
  const { handleSubmit, values, setValues } = useForm(ADD_TURNOS_VALUES, addTurno);

  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title className="py-2">Agendar nuevo turno</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <FloatingLabel controlId="floatingInput" label="Detalle Cita">
            <Form.Control
              type="text"
              placeholder="Detalle de la cita"
              className="required"
              name="detalleCita"
              value={values.detalleCita || ''}
              onChange={(e) => setValues({ ...values, detalleCita: e.target.value })}
              minLength={3}
              maxLength={40}
              patern="^[a-zA-Z\u00C0-\u00FFñÑ]+(?: [a-zA-Z\u00C0-\u00FFñÑ]+)*"              
              title="Solo letras y sin espacios al inicio (min 3, max 40 caracteres)"
              onKeyDown={handleKeyDown}
              required
            />
          </FloatingLabel>

          {userId ? (
            <input type="hidden" name="user" value={userId} />
          ) : (
            <FloatingLabel controlId="floatingUser" label="Usuario" className="required">
              <Form.Select
                name="user"
                onChange={(e) => setValues({ ...values, user: e.target.value })}
                value={values.user || ''}
                required
              >
                <option value="">Seleccione un usuario</option>
                {usuarios.map((usuario) => (
                  <option key={usuario._id} value={usuario._id} required>
                    {usuario.nombre}
                  </option>
                ))}
              </Form.Select>
            </FloatingLabel>
          )}

          <FloatingLabel controlId="floatingVeterinarian" label="Veterinario" className="required">
            <Form.Select
              name="veterinarian"
              onChange={(e) => setValues({ ...values, veterinarian: e.target.value })}
              value={values.veterinarian || ''}
              required
            >
              <option value="">Seleccione un veterinario</option>
              {veterinarios.map((veterinario) => (
                <option key={veterinario._id} value={veterinario._id} required>
                  {veterinario.nombre}
                </option>
              ))}
            </Form.Select>
          </FloatingLabel>

          <FloatingLabel controlId="floatingFecha" label="Fecha" className="required">
            <Form.Control
              type="date"
              name="fecha"
              value={values.fecha || ''}
              onChange={(e) => setValues({ ...values, fecha: e.target.value })}
              min={minDate}
              max={maxDate}
              required
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingHora" label="Hora" className="required">
            <Form.Control
              type="time"
              name="hora"
              value={values.hora || ''}
              onChange={(e) => setValues({ ...values, hora: e.target.value })}
              required
            />
          </FloatingLabel>
                
          <Container className="text-end">
            <Button className="primary-button btn-success mt-3" type="submit">
              Agendar turno
            </Button>
            <Button variant="secondary" className="ms-2 mt-3" onClick={handleClose}>
              Cancelar
            </Button>
          </Container>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddModal;
