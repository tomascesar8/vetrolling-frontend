import { Modal, Button, FloatingLabel, Form, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import { useEffect, useState } from "react";
import axiosClient from "../../../config/axiosClient";
import { ADD_TURNOS_VALUES } from "../../../constanst";
import useForm from "../../../hooks/useForm";

const EditModal = ({ show, handleClose, selected, getTurnos }) => {
  const [ setUsuarios] = useState([]);
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

  const getTurno = async () => {
    try {
      if (selected) {
        const response = await axiosClient.get('/turnos/' + selected);
        setValues(response.data.turno);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateTurno = async (info) => {
    try {
      console.log(info.veterinarian);
      const updatedInfo = {
        ...info,
        veterinarian: info.veterinarian,
        user: info.user._id
      };
  
      await axiosClient.put(`/turnos/${selected}`, updatedInfo);
      console.log(updatedInfo);
      getTurnos();
    } catch (error) {
      console.log(error);
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
  useEffect(() => {
    console.log(values);
  }, [values]); 

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Turno de <span className="text-primary">{values?.user?.nombre} ({values?.user?.pet?.nombre})</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <FloatingLabel controlId="floatingInput" label="Detalle Cita" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Detalle de la cita"
                className=""
                onKeyUp={handleKeyUp}
                name="detalleCita"
                defaultValue={values.detalleCita}
                // value={values.detalleCita}
              />
            </FloatingLabel>

            <FormGroup controlId="veterinarian" className="mb-3">
              <FormLabel className="ms-2">Veterinario:</FormLabel>
              <FormSelect
                name="veterinarian"
                id="veterinarian"
                onChange={(e) => setValues({ ...values, veterinarian: e.target.value })}
                value={values.veterinarian._id}
              >
                {veterinarios.map((veterinario) => (
                  <option key={veterinario._id} value={veterinario._id}>
                    {veterinario.nombre}
                  </option>
                ))}
              </FormSelect>
            </FormGroup>

            {/* <label htmlFor="veterinarian">Veterinario: </label>
            <select
              name="veterinarian"
              id="veterinarian"
              onChange={(e) => setValues({ ...values, veterinarian: e.target.value })}
              value={values.veterinarian._id}
            >
              {veterinarios.map((veterinario) => {
                console.log(values.veterinarian._id);
                console.log(`veterinario._id: ${veterinario._id}`);
                
                return (
                  <option key={veterinario._id} value={veterinario._id}>
                    {veterinario.nombre}
                  </option>
                );
              })}
            </select> */}

            <FloatingLabel controlId="floatingHora" label="Hora">
              <Form.Control
                type="time"
                className="mb-3"
                onKeyUp={handleKeyUp}
                name="hora"
                defaultValue={values.hora}
              />
            </FloatingLabel>
 
            <FloatingLabel controlId="floatingFecha" label="Fecha">
  <Form.Control
    type="date"
    className="mb-4"
    onKeyUp={handleKeyUp}
    name="fecha"
    value={values.fecha ? values.fecha.split("T")[0] : ''}
    onChange={(e) => setValues({ ...values, fecha: e.target.value })}
  />
</FloatingLabel>
            
            <Button className="primary-button" type="submit" onClick={handleClose}>
              Editar
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditModal;