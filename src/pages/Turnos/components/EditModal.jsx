import { Modal, Button, FloatingLabel, Form, FormGroup, FormLabel, FormSelect, ModalTitle, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import axiosClient from "../../../config/axiosClient";
import { ADD_TURNOS_VALUES } from "../../../constanst";
import useForm from "../../../hooks/useForm";
import Swal from 'sweetalert2';
import { calculateDateRange } from "../../../helpers/calculateDateRange";
import { handleKeyDown } from "../../../helpers/validations";

const EditModal = ({ show, handleClose, selected, getTurnos }) => {
  const [setUsuarios] = useState([]);
  const [veterinarios, setVeterinarios] = useState([]);
  const [isFormChanged, setIsFormChanged] = useState(false);
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

  const getTurno = async () => {
    try {
      if (selected) {
        const response = await axiosClient.get('/turnos/' + selected);
        setValues(response.data.turno);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateTurno = async (info) => {
    try {
      const updatedInfo = {
        ...info,
        veterinarian: info.veterinarian,
        user: info.user._id
      };
  
      await axiosClient.put(`/turnos/${selected}`, updatedInfo);
      getTurnos();
      setIsFormChanged(false);
      Swal.fire({
        icon: 'success',
        title: 'Cambios guardados',
        text: 'Los cambios se han guardado exitosamente.',
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
    getTurno();
  }, [selected]);

  const { values, setValues, handleSubmit, handleKeyUp } = useForm(
    ADD_TURNOS_VALUES,
    updateTurno
  );


  const handleFormChange = () => {
    setIsFormChanged(true);
  };


  const handleCloseModal = (confirmChanges) => {
    if(confirmChanges){
      handleClose();
    }else{
      setIsFormChanged(false);
      getTurno();
      handleClose();
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleCloseModal} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title className="ms-3 d-flex flex-column align-items-start">
            <h2>Editar turno de {values?.user?.nombre}</h2>
            <h6 className="mt-1 text-muted">Mascota: <span className="text-primary fs-5">{values?.user?.pet?.nombre}</span></h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <FloatingLabel controlId="floatingInput" label="Detalle Cita" className="mb-3" required>
              <Form.Control
                type="text"
                placeholder="Detalle de la cita"
                className="required"
                onKeyUp={handleKeyUp}
                name="detalleCita"
                defaultValue={values.detalleCita}
                onChange={handleFormChange}
                minLength={3}
                maxLength={40}
                patern="^[a-zA-Z\u00C0-\u00FFñÑ]+(?: [a-zA-Z\u00C0-\u00FFñÑ]+)*"                title="Solo letras y sin espacios al inicio (min 3, max 40 caracteres)"
                onKeyDown={handleKeyDown}
                required
              />
            </FloatingLabel>

            <FormGroup controlId="veterinarian" className="mb-3" required>
              <FormLabel className="ms-2">Veterinario:</FormLabel>
              <FormSelect
                name="veterinarian"
                id="veterinarian"
                onChange={(e) => {setValues({ ...values, veterinarian: e.target.value }); handleFormChange()}}
                value={values.veterinarian._id}
                required
              >
                {veterinarios.map((veterinario) => (
                  <option key={veterinario._id} value={veterinario._id}>
                    {veterinario.nombre}
                  </option>
                ))}
              </FormSelect>
            </FormGroup>

            <FloatingLabel controlId="floatingHora" label="Hora" required>
              <Form.Control
                type="time"
                className="mb-3"
                onKeyUp={handleKeyUp}
                name="hora"
                defaultValue={values.hora}
                onChange={handleFormChange}
                required
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingFecha" label="Fecha" required>
              <Form.Control
                type="date"
                className="mb-4"
                onKeyUp={(e) => { handleKeyUp(e); handleFormChange(); }}
                name="fecha"
                min={minDate}
                max={maxDate}
                pattern="[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])"
                title="La fecha debe tener el formato AAAA-MM-DD"
                value={values.fecha ? values.fecha.split("T")[0] : ''}
                onChange={(e) => setValues({ ...values, fecha: e.target.value })}
                required
                />
            </FloatingLabel>

            <Container className="text-end">
              <Button className="primary-button btn-warning" type="submit" onClick={() => handleCloseModal(true)} disabled={!isFormChanged}>
                Guardar cambios
              </Button>
              <Button variant="secondary" className="ms-2" onClick={handleCloseModal}>
                Cancelar
              </Button>
            </Container>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditModal;