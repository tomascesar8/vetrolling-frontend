// import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
// import { useEffect, useState } from "react";
// import axiosClient from "../../../config/axiosClient";

// const EditUserModal = ({ show, handleClose, selectedUser, getUsers, setUsers }) => {
//   const [userToUpdate, setUserToUpdate] = useState({
//     nombre: "",
//     email: "",
//     password: "",
//     role: "",
//   });

//   useEffect(() => {
//     const getUser = async () => {
//       try {
//         if (selectedUser) {
//           const response = await axiosClient.get(`/users/${selectedUser}`);
//           setUserToUpdate(response.data.user);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     getUser();
//   }, [selectedUser]);

//   const handleInputChange = (e) => {
//     setUserToUpdate({
//       ...userToUpdate,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axiosClient.put(`/users/${selectedUser}`, userToUpdate);
//       handleClose();
//       getUsers();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Editar Usuario</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={handleSubmit}>
//           <FloatingLabel controlId="floatingNombre" label="Nombre">
//             <Form.Control
//               type="text"
//               placeholder="Nombre del usuario"
//               name="nombre"
//               value={userToUpdate.nombre}
//               onChange={handleInputChange}
//             />
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingEmail" label="Email">
//             <Form.Control
//               type="email"
//               placeholder="Email del usuario"
//               name="email"
//               value={userToUpdate.email}
//               onChange={handleInputChange}
//             />
//           </FloatingLabel>

//           <FloatingLabel controlId="floatingRole" label="Rol">
//             <Form.Control
//               as="select"
//               name="role"
//               value={userToUpdate.role}
//               onChange={handleInputChange}
//             >
//               <option value="user">Usuario</option>
//               <option value="admin">Administrador</option>
//             </Form.Control>
//           </FloatingLabel>
//           <Button variant="primary" type="submit" onClick={handleClose}>
//             Guardar Cambios
//           </Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default EditUserModal;


//!--------------------------------------------------------------

// import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
// import { useEffect, useState } from "react";
// import axiosClient from "../../../config/axiosClient";

// const EditUserModal = ({ show, handleClose, selectedUser, getUsers, setUsers }) => {
//   const [userToUpdate, setUserToUpdate] = useState({
//     nombre: "",
//     email: "",
//     role: "",
//     pet: null, // Nueva propiedad para manejar la mascota
//   });

//   useEffect(() => {
//     const getUser = async () => {
//       try {
//         if (selectedUser) {
//           const response = await axiosClient.get(`/users/${selectedUser}`);
//           setUserToUpdate(response.data.user);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     getUser();
//   }, [selectedUser]);

//   const handleInputChange = (e) => {
//     setUserToUpdate({
//       ...userToUpdate,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Solo enviar la información necesaria para la actualización
//       await axiosClient.put(`/users/${selectedUser}`, {
//         role: userToUpdate.role,
//         pet: userToUpdate.pet,
//       });
//       handleClose();
//       getUsers();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Editar Usuario</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={handleSubmit}>
//           <FloatingLabel controlId="floatingNombre" label="Nombre">
//             <Form.Control
//               type="text"
//               placeholder="Nombre del usuario"
//               name="nombre"
//               value={userToUpdate.nombre}
//               onChange={() => {}} // Campo de solo lectura
//             />
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingEmail" label="Email">
//             <Form.Control
//               type="email"
//               placeholder="Email del usuario"
//               name="email"
//               value={userToUpdate.email}
//               onChange={() => {}} // Campo de solo lectura
//             />
//           </FloatingLabel>

//           <FloatingLabel controlId="floatingRole" label="Rol">
//             <Form.Control
//               as="select"
//               name="role"
//               value={userToUpdate.role}
//               onChange={handleInputChange}
//             >
//               <option value="user">Usuario</option>
//               <option value="admin">Administrador</option>
//             </Form.Control>
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingPet" label="Mascota">
//             <Form.Control
//               type="text"
//               placeholder="Nombre de la mascota"
//               name="pet"
//               value={userToUpdate.pet ? userToUpdate.pet.nombre : ''}
//               onChange={handleInputChange}
//             />
//           </FloatingLabel>
//           <Button variant="primary" type="submit" onClick={handleClose}>
//             Guardar Cambios
//           </Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default EditUserModal;


// import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
// import { useEffect, useState } from "react";
// import axiosClient from "../../../config/axiosClient";
// const EditUserModal = ({ show, handleClose, selectedUser, getUsers, setUsers }) => {
//   const [userToUpdate, setUserToUpdate] = useState({
//     nombre: "",
//     email: "",
//     role: "",
//     pet: null, // Nueva propiedad para manejar la mascota
//   });

//   useEffect(() => {
//     const getUser = async () => {
//       try {
//         if (selectedUser) {
//           const response = await axiosClient.get(`/users/${selectedUser}`);
//           setUserToUpdate(response.data.user);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     getUser();
//   }, [selectedUser]);

//   const handleInputChange = (e) => {
//     setUserToUpdate({
//       ...userToUpdate,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Solo enviar la información necesaria para la actualización
//       await axiosClient.put(`/users/${selectedUser}`, {
//         role: userToUpdate.role,
//         pet: {
//           nombre: userToUpdate.pet, // Si la propiedad pet es un string, sino usar userToUpdate.pet.nombre
//         },
//       });
//       handleClose();
//       getUsers();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
    // <Modal show={show} onHide={handleClose}>
    //   <Modal.Header closeButton>
    //     <Modal.Title>Editar Usuario</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    //     <Form onSubmit={handleSubmit}>
    //       <FloatingLabel controlId="floatingNombre" label="Nombre">
    //         <Form.Control
    //           type="text"
    //           placeholder="Nombre del usuario"
    //           name="nombre"
    //           value={userToUpdate.nombre}
    //           onChange={() => {}} // Campo de solo lectura
    //         />
    //       </FloatingLabel>
    //       <FloatingLabel controlId="floatingEmail" label="Email">
    //         <Form.Control
    //           type="email"
    //           placeholder="Email del usuario"
    //           name="email"
    //           value={userToUpdate.email}
    //           onChange={() => {}} // Campo de solo lectura
    //         />
    //       </FloatingLabel>

    //       <FloatingLabel controlId="floatingRole" label="Rol">
    //         <Form.Control
    //           as="select"
    //           name="role"
    //           value={userToUpdate.role}
    //           onChange={handleInputChange}
    //         >
    //           <option value="user">Usuario</option>
    //           <option value="admin">Administrador</option>
    //         </Form.Control>
    //       </FloatingLabel>
    //       <FloatingLabel controlId="floatingPet" label="Mascota">
    //         <Form.Control
    //           type="text"
    //           placeholder="Nombre de la mascota"
    //           name="pet"
    //           value={userToUpdate.pet ? userToUpdate.pet.nombre : ''}
    //           onChange={handleInputChange}
    //         />
    //       </FloatingLabel>
    //       <Button variant="primary" type="submit" onClick={handleClose}>
    //         Guardar Cambios
    //       </Button>
    //     </Form>
    //   </Modal.Body>
    // </Modal>
//   );
// };

// export default EditUserModal;


//!------------------------------------------------------------------------------------

// import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
// import { useEffect, useState } from "react";
// import axiosClient from "../../../config/axiosClient";

// const EditUserModal = ({ show, handleClose, selectedUser, getUsers, setUsers }) => {
//   const [userToUpdate, setUserToUpdate] = useState({
//     nombre: "",
//     email: "",
//     role: "",
//     pet: null,
//   });

//   useEffect(() => {
//     const getUser = async () => {
//       try {
//         if (selectedUser) {
//           const response = await axiosClient.get(`/users/${selectedUser}`);
//           setUserToUpdate(response.data.user);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     getUser();
//   }, [selectedUser]);

//   const handleInputChange = (e) => {
//     setUserToUpdate({
//       ...userToUpdate,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (userToUpdate.pet && userToUpdate.pet.id) {
//         // Actualizar la mascota existente
//         await axiosClient.put(`/pets/${userToUpdate.pet.id}`, {
//           nombre: userToUpdate.pet.nombre,
//         });
//       } else {
//         // Crear una nueva mascota si no existe
//         const petResponse = await axiosClient.post("/pets", {
//           nombre: userToUpdate.pet.nombre,
//         });
//         userToUpdate.pet.id = petResponse.data._id;
//       }

//       // Actualizar el usuario con la referencia al documento de mascota
//       await axiosClient.put(`/users/${selectedUser}`, {
//         role: userToUpdate.role,
//         pet: {
//           id: userToUpdate.pet.id,
//           nombre: userToUpdate.pet.nombre,
//         },
//       });

//       handleClose();
//       getUsers();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Modal show={show} onHide={handleClose}>
//     <Modal.Header closeButton>
//       <Modal.Title>Editar Usuario</Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//       <Form onSubmit={handleSubmit}>
//         <FloatingLabel controlId="floatingNombre" label="Nombre">
//           <Form.Control
//             type="text"
//             placeholder="Nombre del usuario"
//             name="nombre"
//             value={userToUpdate.nombre}
//             onChange={() => {}} // Campo de solo lectura
//           />
//         </FloatingLabel>
//         <FloatingLabel controlId="floatingEmail" label="Email">
//           <Form.Control
//             type="email"
//             placeholder="Email del usuario"
//             name="email"
//             value={userToUpdate.email}
//             onChange={() => {}} // Campo de solo lectura
//           />
//         </FloatingLabel>

//         <FloatingLabel controlId="floatingRole" label="Rol">
//           <Form.Control
//             as="select"
//             name="role"
//             value={userToUpdate.role}
//             onChange={handleInputChange}
//           >
//             <option value="user">Usuario</option>
//             <option value="admin">Administrador</option>
//           </Form.Control>
//         </FloatingLabel>
//         <FloatingLabel controlId="floatingPet" label="Mascota">
//           <Form.Control
//             type="text"
//             placeholder="Nombre de la mascota"
//             name="pet"
//             value={userToUpdate.pet ? userToUpdate.pet.nombre : ''}
//             onChange={handleInputChange}
//           />
//         </FloatingLabel>
//         <Button variant="primary" type="submit" onClick={handleClose}>
//           Guardar Cambios
//         </Button>
//       </Form>
//     </Modal.Body>
//   </Modal>
//   );
// };

// export default EditUserModal;

//!------------------------------------------------------------------------------------

// import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
// import { useEffect, useState } from "react";
// import axiosClient from "../../../config/axiosClient";

// const EditUserModal = ({ show, handleClose, selectedUser, getUsers, setUsers }) => {
//   const [userToUpdate, setUserToUpdate] = useState({
//     nombre: "",
//     email: "",
//     role: "",
//     pet: null,
//   });

//   useEffect(() => {
//     const getUser = async () => {
//       try {
//         if (selectedUser) {
//           const response = await axiosClient.get(`/users/${selectedUser}`);
//           setUserToUpdate(response.data.user);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     getUser();
//   }, [selectedUser]);

//   const handleInputChange = (e) => {
//     setUserToUpdate({
//       ...userToUpdate,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(userToUpdate, 'USER TO UPDATE');

//     try {
//       if (userToUpdate.pet && userToUpdate.pet._id) {
//         // Actualizar la mascota existente
//         console.log(userToUpdate.pet);
//         console.log(userToUpdate.pet._id);
//         await axiosClient.put(`/pets/${userToUpdate.pet._id}`, {
//           nombre: userToUpdate.pet.nombre,
//         });
//       } else {
//         console.log(userToUpdate.pet, 'ARAFUE');
//         // Crear una nueva mascota si no existe
//         const petResponse = await axiosClient.post("/pets", {
//           nombre: userToUpdate.pet.nombre,
//         });
//         console.log(petResponse.data, 'ARAFUE1');
//         userToUpdate.pet._id = petResponse.data._id;
//       }

//       // Actualizar el usuario con la referencia al documento de mascota
//       console.log(selectedUser, 'SELECTED USER');
//       await axiosClient.put(`/users/${selectedUser}`, {
//         role: userToUpdate.role,
//         pet: {
//           _id: userToUpdate.pet._id,
//           nombre: userToUpdate.pet.nombre,
//         },
//       });

//       handleClose();
//       getUsers();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Editar Usuario</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={handleSubmit}>
//           <FloatingLabel controlId="floatingNombre" label="Nombre">
//             <Form.Control
//               type="text"
//               placeholder="Nombre del usuario"
//               name="nombre"
//               value={userToUpdate.nombre}
//               onChange={() => {}} // Campo de solo lectura
//             />
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingEmail" label="Email">
//             <Form.Control
//               type="email"
//               placeholder="Email del usuario"
//               name="email"
//               value={userToUpdate.email}
//               onChange={() => {}} // Campo de solo lectura
//             />
//           </FloatingLabel>

//           <FloatingLabel controlId="floatingRole" label="Rol">
//             <Form.Control
//               as="select"
//               name="role"
//               value={userToUpdate.role}
//               onChange={handleInputChange}
//             >
//               <option value="user">Usuario</option>
//               <option value="admin">Administrador</option>
//             </Form.Control>
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingPet" label="Mascota">
//             <Form.Control
//               type="text"
//               placeholder="Nombre de la mascota"
//               name="pet"
//               value={userToUpdate.pet && userToUpdate.pet.nombre ? userToUpdate.pet.nombre : ''}
//               onChange={handleInputChange}
//             />
//           </FloatingLabel>
//           <Button variant="primary" type="submit">
//             Guardar Cambios
//           </Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default EditUserModal;













import { Modal, Button, FloatingLabel, Form, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import axiosClient from "../../../config/axiosClient";

const EditUserModal = ({ show, handleClose, selectedUser, getUsers }) => {
  const [userToUpdate, setUserToUpdate] = useState({
    nombre: "",
    email: "",
    role: "",
    pet: {
      nombre: "",
      especie: "",
      raza: "",
    },
  });

  useEffect(() => {
    const getUser = async () => {
      try {
        if (selectedUser) {
          const response = await axiosClient.get(`/users/${selectedUser}`);
          setUserToUpdate(response.data.user);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [selectedUser]);

  const handleInputChange = (e) => {
    setUserToUpdate({
      ...userToUpdate,
      [e.target.name]: e.target.value,
    });
  };

  const handlePetInputChange = (e) => {
    setUserToUpdate({
      ...userToUpdate,
      pet: {
        ...userToUpdate.pet,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let updatedPet;

      if (userToUpdate.pet && userToUpdate.pet._id) {
        // Actualizar la mascota existente
        const petUpdateResponse = await axiosClient.put(`/pets/${userToUpdate.pet._id}`, {
          nombre: userToUpdate.pet.nombre,
          especie: userToUpdate.pet.especie,
          raza: userToUpdate.pet.raza,
        });

        updatedPet = petUpdateResponse.data.pet;
      } else {
        // Crear una nueva mascota si no existe
        const petCreateResponse = await axiosClient.post("/pets", {
          nombre: userToUpdate.pet.nombre,
          especie: userToUpdate.pet.especie,
          raza: userToUpdate.pet.raza,
        });

        updatedPet = petCreateResponse.data.pet;

        // Actualizar la referencia de mascota en el usuario solo si hay una mascota
        if (updatedPet) {
          await axiosClient.put(`/users/${selectedUser}`, {
            pet: updatedPet._id,
          });

          // Obtener el usuario actualizado después de vincular la mascota
          const response = await axiosClient.get(`/users/${selectedUser}`);
          setUserToUpdate(response.data.user);
        }
      }

      // Actualizar el usuario con el resto de la información
      await axiosClient.put(`/users/${selectedUser}`, {
        nombre: userToUpdate.nombre,
        email: userToUpdate.email,
        role: userToUpdate.role,
      });

      handleClose();
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <FloatingLabel controlId="floatingNombre" label="Nombre">
            <Form.Control
              type="text"
              placeholder="Nombre del usuario"
              name="nombre"
              value={userToUpdate.nombre}
              onChange={handleInputChange}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingEmail" label="Email">
            <Form.Control
              className="edit-user-email"
              type="email"
              placeholder="Email del usuario"
              name="email"
              value={userToUpdate.email}
              readOnly
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingRole" label="Rol">
            <Form.Control
              as="select"
              name="role"
              value={userToUpdate.role}
              onChange={handleInputChange}
            >
              <option value="user">Usuario</option>
              <option value="admin">Administrador</option>
            </Form.Control>
          </FloatingLabel>

          {/* Campos de la mascota */}
          <FloatingLabel controlId="floatingPetNombre" label="Nombre de la Mascota">
            <Form.Control
              type="text"
              placeholder="Nombre de la mascota"
              name="nombre"
              value={userToUpdate.pet ? userToUpdate.pet.nombre : ""}
              onChange={handlePetInputChange}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPetEspecie" label="Especie de la Mascota">
            <Form.Control
              type="text"
              placeholder="Especie de la mascota"
              name="especie"
              value={userToUpdate.pet ? userToUpdate.pet.especie : ""}
              onChange={handlePetInputChange}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPetRaza" label="Raza de la Mascota">
            <Form.Control
              type="text"
              placeholder="Raza de la mascota"
              name="raza"
              value={userToUpdate.pet ? userToUpdate.pet.raza : ""}
              onChange={handlePetInputChange}
            />
          </FloatingLabel>

          <Container className="text-end">
            <Button className="mt-2" variant="primary" type="submit" onClick={handleClose}>
              Guardar Cambios
            </Button>
          </Container>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditUserModal;
