// // import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
// // import axiosClient from "../../../config/axiosClient";
// // import useForm from "../../../hooks/useForm";
// // import { ADD_TURNOS_VALUES } from "../../../constanst";

// // const AddModal = ({ show, handleClose, setTurnos, turnos }) => {
// //   const addTurno = async (info) => {
// //     try {
// //       const response = await axiosClient.post('/turnos', info);
// //       setTurnos([...turnos, response.data.turno]);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   const { handleSubmit, handleKeyUp } = useForm(ADD_TURNOS_VALUES, addTurno);

// //   return (
// //     <Modal show={show} onHide={handleClose}>
// //       <Modal.Header closeButton>
// //         <Modal.Title>Agregar Turno</Modal.Title>
// //       </Modal.Header>
// //       <Modal.Body>
// //         <form onSubmit={handleSubmit}>
// //           <FloatingLabel controlId="floatingInput" label="Detalle Cita" className="mb-3">
// //             <Form.Control
// //               type="text"
// //               placeholder="Detalle de la cita"
// //               className=""
// //               onKeyUp={handleKeyUp}
// //               name="detalleCita"
// //             />
// //           </FloatingLabel>
// //           <FloatingLabel controlId="floatingUser" label="Usuario">
// //             <Form.Control
// //               type="text"
// //               placeholder="ID del usuario"
// //               className=""
// //               onKeyUp={handleKeyUp}
// //               name="user"
// //             />
// //           </FloatingLabel>
// //           <FloatingLabel controlId="floatingVeterinarian" label="Veterinario">
// //             <Form.Control
// //               type="text"
// //               placeholder="ID del veterinario"
// //               className=""
// //               onKeyUp={handleKeyUp}
// //               name="veterinarian"
// //             />
// //           </FloatingLabel>
// //           <FloatingLabel controlId="floatingFecha" label="Fecha">
// //             <Form.Control
// //               type="date"
// //               className=""
// //               onKeyUp={handleKeyUp}
// //               name="fecha"
// //             />
// //           </FloatingLabel>
// //           <FloatingLabel controlId="floatingHora" label="Hora">
// //             <Form.Control
// //               type="time"
// //               className=""
// //               onKeyUp={handleKeyUp}
// //               name="hora"
// //             />
// //           </FloatingLabel>
// //           <Button className="primary-button" type="submit" onClick={handleClose}>
// //             Agregar
// //           </Button>
// //         </form>
// //       </Modal.Body>
// //     </Modal>
// //   );
// // };

// // export default AddModal;
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



// import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
// import axiosClient from "../../../config/axiosClient";
// import useForm from "../../../hooks/useForm";
// import { useEffect, useState } from "react";
// import { ADD_TURNOS_VALUES } from "../../../constanst";

// const AddModal = ({ show, handleClose, setTurnos, turnos }) => {
//   const [usuarios, setUsuarios] = useState([]);
//   const [veterinarios, setVeterinarios] = useState([]);

//   const getUsuarios = async () => {
//     try {
//       const response = await axiosClient.get('/users');
//       setUsuarios(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getVeterinarios = async () => {
//     try {
//       const response = await axiosClient.get('/veterinarians');
//       setVeterinarios(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const addTurno = async (info) => {
//     try {
//       // Extraer solo el _id del usuario y del veterinario
//       const updatedInfo = {
//         ...info,
//         user: info.user?._id || null,
//         veterinarian: info.veterinarian || null,
//       };

//       console.log(updatedInfo);

//       const response = await axiosClient.post('/turnos', updatedInfo);
//       setTurnos([...turnos, response.data.turno]);
//       handleClose(); // Cerrar el modal después de agregar el turno
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const { handleSubmit, values, setValues } = useForm(ADD_TURNOS_VALUES, addTurno);

//   useEffect(() => {
//     getUsuarios();
//     getVeterinarios();
//   }, []);

//   const handleUserChange = (e) => {
//     const selectedUser = usuarios.find((user) => user.nombre === e.target.value);
//     setValues({ ...values, user: selectedUser || { _id: null, nombre: e.target.value } });
//   };

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
//               name="detalleCita"
//               value={values.detalleCita || ''}
//               onChange={(e) => setValues({ ...values, detalleCita: e.target.value })}
//             />
//           </FloatingLabel>

//           <FloatingLabel controlId="floatingUser" label="Usuario">
//             <Form.Control
//               type="text"
//               placeholder="Nombre del usuario"
//               name="user"
//               list="usuariosList"
//               value={values.user?.nombre || ''}
//               onChange={handleUserChange}
//             />
//             <datalist id="usuariosList">
//               {usuarios.map((usuario) => (
//                 <option key={usuario._id} value={usuario.nombre} />
//               ))}
//             </datalist>
//           </FloatingLabel>

//           <FloatingLabel controlId="floatingVeterinarian" label="Veterinario">
//             <Form.Select
//               name="veterinarian"
//               onChange={(e) => setValues({ ...values, veterinarian: e.target.value })}
//               value={values.veterinarian || ''}
//             >
//               <option value="">Seleccione un veterinario</option>
//               {veterinarios.map((veterinario) => (
//                 <option key={veterinario._id} value={veterinario._id}>
//                   {veterinario.nombre}
//                 </option>
//               ))}
//             </Form.Select>
//           </FloatingLabel>

//           <FloatingLabel controlId="floatingFecha" label="Fecha">
//             <Form.Control
//               type="date"
//               name="fecha"
//               value={values.fecha || ''}
//               onChange={(e) => setValues({ ...values, fecha: e.target.value })}
//             />
//           </FloatingLabel>

//           <FloatingLabel controlId="floatingHora" label="Hora">
//             <Form.Control
//               type="time"
//               name="hora"
//               value={values.hora || ''}
//               onChange={(e) => setValues({ ...values, hora: e.target.value })}
//             />
//           </FloatingLabel>

//           <Button className="primary-button" type="submit">
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
import { useEffect, useState } from "react";
import { ADD_TURNOS_VALUES } from "../../../constanst";

const AddModal = ({ show, handleClose, setTurnos, turnos, getTurnos }) => {
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

  // const addTurno = async (info) => {
  //   try {
  //     const response = await axiosClient.post('/turnos', info);
  //     // Actualizamos los turnos después de agregar uno nuevo
  //     setTurnos((prevTurnos) => [...prevTurnos, response.data.turno]);
  //     handleClose(); // Cerrar el modal después de agregar el turno
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const addTurno = async (info) => {
    try {
      console.log(info);
      const response = await axiosClient.post('/turnos', info);
      setTurnos([...turnos, response.data.turno]);
      handleClose(); // Cerrar el modal después de agregar el turno
      getTurnos(); // Actualizar la lista de turnos después de agregar uno nuevo
    } catch (error) {
      console.log(error);
    }
  };

  const { handleSubmit, values, setValues } = useForm(ADD_TURNOS_VALUES, addTurno);

  useEffect(() => {
    getUsuarios();
    getVeterinarios();
  }, []);

  const handleUserChange = (e) => {
    const selectedUser = usuarios.find((user) => user.nombre === e.target.value);
    setValues({ ...values, user: selectedUser || { _id: null, nombre: e.target.value } });
  };

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

          <FloatingLabel controlId="floatingUser" label="Usuario">
            <Form.Control
              type="text"
              placeholder="Nombre del usuario"
              name="user"
              list="usuariosList"
              value={values.user?.nombre || ''}
              onChange={handleUserChange}
            />
            <datalist id="usuariosList">
              {usuarios.map((usuario) => (
                <option key={usuario._id} value={usuario.nombre} />
              ))}
            </datalist>
          </FloatingLabel>

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

