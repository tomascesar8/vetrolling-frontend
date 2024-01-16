// import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
// import { useEffect } from "react";
// import axiosClient from "../../../config/axiosClient";
// import { ADD_TURNOS_VALUES } from "../../../constanst";
// import useForm from "../../../hooks/useForm";

// const EditModal = ({ show, handleClose, selected, getTurnos }) => {
//   const getTurno = async () => {
//     console.log(selected);
//     try {
//       if (selected) {
//         const response = await axiosClient.get('/turnos/' + selected);
//         console.log(response.data.turno);
//         setValues(response.data.turno);  // Asegúrate de que refleje la estructura correcta de tu API
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
  

//   const updateTurno = async (info) => {
//     console.log(info);
//     try {
//       await axiosClient.put(`/turnos/${selected}`, info);
//       getTurnos();
//       console.log(selected);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getTurno();
//   }, [selected]);

//   const { values, setValues, handleSubmit, handleKeyUp } = useForm(
//     ADD_TURNOS_VALUES,
//     updateTurno,
    
//   );

//   return (
//     <>
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Editar Turno</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <form onSubmit={handleSubmit}>
//           <FloatingLabel controlId="floatingInput" label="Detalle Cita" className="mb-3">
//             <Form.Control
//               type="text"
//               placeholder="Detalle de la cita"
//               className=""
//               onKeyUp={handleKeyUp}
//               name="detalleCita"
//               defaultValue={values.detalleCita}
//             />
//           </FloatingLabel>
//           <label htmlFor="usuario">Usuario:</label>
//       <select name="usuario" id="usuario">
//         {usuarios.map(usuario => (
//           <option key={usuario._id} value={usuario._id}>{usuario.nombre}</option>
//         ))}
//       </select>

//       <label htmlFor="veterinario">Veterinario:</label>
//       <select name="veterinario" id="veterinario">
//         {veterinarios.map(veterinario => (
//           <option key={veterinario._id} value={veterinario._id}>{veterinario.nombre}</option>
//         ))}
//       </select>
//           <FloatingLabel controlId="floatingFecha" label="Fecha">
//             <Form.Control
//               type="date"
//               className=""
//               onKeyUp={handleKeyUp}
//               name="fecha"
//               defaultValue={values.fecha}
//             />
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingHora" label="Hora">
//             <Form.Control
//               type="time"
//               className=""
//               onKeyUp={handleKeyUp}
//               name="hora"
//               defaultValue={values.hora}
//             />
//           </FloatingLabel>
//           <Button className="primary-button" type="submit" onClick={handleClose}>
//             Editar
//           </Button>
//         </form>
//       </Modal.Body>
//     </Modal>
//     </>
//   );
// };

// export default EditModal;


import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axiosClient from "../../../config/axiosClient";
import { ADD_TURNOS_VALUES } from "../../../constanst";
import useForm from "../../../hooks/useForm";

const EditModal = ({ show, handleClose, selected, getTurnos }) => {
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
      await axiosClient.put(`/turnos/${selected}`, info);
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

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Turno</Modal.Title>
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
              />
            </FloatingLabel>
            <label htmlFor="usuario">Usuario:</label>
            <select name="usuario" id="usuario">
              {usuarios.map(usuario => (
                <option key={usuario._id} value={usuario._id}>{usuario.nombre}</option>
              ))}
            </select>

            <label htmlFor="veterinario">Veterinario:</label>
            <select name="veterinario" id="veterinario">
              {veterinarios.map(veterinario => (
                <option key={veterinario._id} value={veterinario._id}>{veterinario.nombre}</option>
              ))}
            </select>
            <FloatingLabel controlId="floatingFecha" label="Fecha">
              <Form.Control
                type="date"
                className=""
                onKeyUp={handleKeyUp}
                name="fecha"
                defaultValue={values.fecha}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingHora" label="Hora">
              <Form.Control
                type="time"
                className=""
                onKeyUp={handleKeyUp}
                name="hora"
                defaultValue={values.hora}
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
