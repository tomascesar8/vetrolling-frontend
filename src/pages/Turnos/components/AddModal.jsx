// import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
// import axiosClient from "../../../config/axiosClient";
// import useForm from "../../../hooks/useForm";
// import { ADD_TURNOS_VALUES } from "../../../constanst";

// const AddModal = ({ show, handleClose, setTurnos, turnos }) => {
//   const addTurno = async (info) => {
//     try {
//       const response = await axiosClient.post('/turnos', info);
//       setTurnos([...turnos, response.data.turno]);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const { handleSubmit, handleKeyUp } = useForm(ADD_TURNOS_VALUES, addTurno);

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Agregar Turno</Modal.Title>
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
//             />
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingUser" label="Usuario">
//             <Form.Control
//               type="text"
//               placeholder="ID del usuario"
//               className=""
//               onKeyUp={handleKeyUp}
//               name="user"
//             />
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingVeterinarian" label="Veterinario">
//             <Form.Control
//               type="text"
//               placeholder="ID del veterinario"
//               className=""
//               onKeyUp={handleKeyUp}
//               name="veterinarian"
//             />
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingFecha" label="Fecha">
//             <Form.Control
//               type="date"
//               className=""
//               onKeyUp={handleKeyUp}
//               name="fecha"
//             />
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingHora" label="Hora">
//             <Form.Control
//               type="time"
//               className=""
//               onKeyUp={handleKeyUp}
//               name="hora"
//             />
//           </FloatingLabel>
//           <Button className="primary-button" type="submit" onClick={handleClose}>
//             Agregar
//           </Button>
//         </form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default AddModal;
import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
import axiosClient from "../../../config/axiosClient";
import useForm from "../../../hooks/useForm";
import { ADD_TURNOS_VALUES } from "../../../constanst";

const AddModal = ({ show, handleClose, setTurnos, turnos }) => {
  const addTurno = async (info) => {
    try {
      const response = await axiosClient.post('/turnos', info);
      setTurnos([...turnos, response.data.turno]);
    } catch (error) {
      console.log(error);
    }
  };

  const { handleSubmit, handleKeyUp } = useForm(ADD_TURNOS_VALUES, addTurno);

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
              onKeyUp={handleKeyUp}
              name="detalleCita"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingUser" label="Usuario">
            <Form.Control
              type="text"
              placeholder="ID del usuario"
              className=""
              onKeyUp={handleKeyUp}
              name="user"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingVeterinarian" label="Veterinario">
            <Form.Control
              type="text"
              placeholder="ID del veterinario"
              className=""
              onKeyUp={handleKeyUp}
              name="veterinarian"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingFecha" label="Fecha">
            <Form.Control
              type="date"
              className=""
              onKeyUp={handleKeyUp}
              name="fecha"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingHora" label="Hora">
            <Form.Control
              type="time"
              className=""
              onKeyUp={handleKeyUp}
              name="hora"
            />
          </FloatingLabel>
          <Button className="primary-button" type="submit" onClick={handleClose}>
            Agregar
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddModal;
