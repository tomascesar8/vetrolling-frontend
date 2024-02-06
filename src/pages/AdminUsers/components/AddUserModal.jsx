// import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
// import { useState } from "react";
// import axiosClient from "../../../config/axiosClient";

// const AddUserModal = ({ show, handleClose, setUsers, users, getUsers }) => {
//   const [newUser, setNewUser] = useState({
//     nombre: "",
//     email: "",
//     password: "",
//     role: "user", // Puedes establecer un valor predeterminado
//   });

//   const handleInputChange = (e) => {
//     setNewUser({
//       ...newUser,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axiosClient.post("/users", newUser);
//       handleClose();
//       getUsers();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Agregar Usuario</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={handleSubmit}>
//           <FloatingLabel controlId="floatingNombre" label="Nombre">
//             <Form.Control
//               type="text"
//               placeholder="Nombre del usuario"
//               name="nombre"
//               onChange={handleInputChange}
//             />
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingEmail" label="Email">
//             <Form.Control
//               type="email"
//               placeholder="Email del usuario"
//               name="email"
//               onChange={handleInputChange}
//             />
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingPassword" label="Contraseña">
//             <Form.Control
//               type="password"
//               placeholder="Contraseña del usuario"
//               name="password"
//               onChange={handleInputChange}
//             />
//           </FloatingLabel>
//           <Button variant="primary" type="submit" onClick={handleClose} className="mt-3">
//             Agregar
//           </Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default AddUserModal;

//*-----------------------------------------------------------








//!2
// import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
// import { useState } from "react";
// import axiosClient from "../../../config/axiosClient";

// const AddUserModal = ({ show, handleClose, setUsers, users, getUsers }) => {
//   const [newUser, setNewUser] = useState({
//     nombre: "",
//     email: "",
//     password: "",
//     role: "user",
//     pet: null, // Nueva propiedad para manejar la mascota
//   });

//   const handleInputChange = (e) => {
//     setNewUser({
//       ...newUser,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Solo enviar la información necesaria para la creación
//       await axiosClient.post("/users", {
//         nombre: newUser.nombre,
//         email: newUser.email,
//         password: newUser.password,
//         role: newUser.role,
//         pet: newUser.pet,
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
//         <Modal.Title>Agregar Usuario</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={handleSubmit}>
//           <FloatingLabel controlId="floatingNombre" label="Nombre">
//             <Form.Control
//               type="text"
//               placeholder="Nombre del usuario"
//               name="nombre"
//               onChange={handleInputChange}
//             />
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingEmail" label="Email">
//             <Form.Control
//               type="email"
//               placeholder="Email del usuario"
//               name="email"
//               onChange={handleInputChange}
//             />
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingPassword" label="Contraseña">
//             <Form.Control
//               type="password"
//               placeholder="Contraseña del usuario"
//               name="password"
//               onChange={handleInputChange}
//             />
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingPet" label="Mascota">
//             <Form.Control
//               type="text"
//               placeholder="Nombre de la mascota"
//               name="pet"
//               onChange={handleInputChange}
//             />
//           </FloatingLabel>
//           <Button variant="primary" type="submit" onClick={handleClose} className="mt-3">
//             Agregar
//           </Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default AddUserModal;


//! 3

// import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
// import { useState } from "react";
// import axiosClient from "../../../config/axiosClient";

// const AddUserModal = ({ show, handleClose, setUsers, users, getUsers }) => {
//   const [newUser, setNewUser] = useState({
//     nombre: "",
//     email: "",
//     password: "",
//     role: "user",
//     pet: {
//       nombre: "", // Nueva propiedad para el nombre de la mascota
//       especie: "", // Nueva propiedad para la especie de la mascota
//       raza: "", // Nueva propiedad para la raza de la mascota
//     },
//   });

//   const handleInputChange = (e) => {
//     // Manejar cambios en el input de la mascota
//     if (e.target.name.startsWith("pet.")) {
//       setNewUser({
//         ...newUser,
//         pet: {
//           ...newUser.pet,
//           [e.target.name.replace("pet.", "")]: e.target.value,
//         },
//       });
//     } else {
//       setNewUser({
//         ...newUser,
//         [e.target.name]: e.target.value,
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Solo enviar la información necesaria para la creación
//       await axiosClient.post("/users", {
//         nombre: newUser.nombre,
//         email: newUser.email,
//         password: newUser.password,
//         role: newUser.role,
//         pet: newUser.pet,
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
//         <Modal.Title>Agregar Usuario</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={handleSubmit}>
//           <FloatingLabel controlId="floatingNombre" label="Nombre">
//             <Form.Control
//               type="text"
//               placeholder="Nombre del usuario"
//               name="nombre"
//               onChange={handleInputChange}
//             />
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingEmail" label="Email">
//             <Form.Control
//               type="email"
//               placeholder="Email del usuario"
//               name="email"
//               onChange={handleInputChange}
//             />
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingPassword" label="Contraseña">
//             <Form.Control
//               type="password"
//               placeholder="Contraseña del usuario"
//               name="password"
//               onChange={handleInputChange}
//             />
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingPetNombre" label="Nombre de la Mascota">
//             <Form.Control
//               type="text"
//               placeholder="Nombre de la mascota"
//               name="pet.nombre"
//               onChange={handleInputChange}
//             />
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingPetEspecie" label="Especie de la Mascota">
//             <Form.Control
//               type="text"
//               placeholder="Especie de la mascota"
//               name="pet.especie"
//               onChange={handleInputChange}
//             />
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingPetRaza" label="Raza de la Mascota">
//             <Form.Control
//               type="text"
//               placeholder="Raza de la mascota"
//               name="pet.raza"
//               onChange={handleInputChange}
//             />
//           </FloatingLabel>
//           <Button variant="primary" type="submit" onClick={handleClose} className="mt-3">
//             Agregar
//           </Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default AddUserModal;


// import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
// import { useState } from "react";
// import axiosClient from "../../../config/axiosClient";

// const AddUserModal = ({ show, handleClose, setUsers, users, getUsers }) => {
//   const [newUser, setNewUser] = useState({
//     nombre: "",
//     email: "",
//     password: "",
//     role: "user",
//     pet: {
//       nombre: "", // Nueva propiedad para el nombre de la mascota
//       especie: "", // Nueva propiedad para la especie de la mascota
//       raza: "", // Nueva propiedad para la raza de la mascota
//     },
//   });

//   const handleInputChange = (e) => {
//     // Manejar cambios en el input de la mascota
//     if (e.target.name.startsWith("pet.")) {
//       setNewUser({
//         ...newUser,
//         pet: {
//           ...newUser.pet,
//           [e.target.name.replace("pet.", "")]: e.target.value,
//         },
//       });
//     } else {
//       setNewUser({
//         ...newUser,
//         [e.target.name]: e.target.value,
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Solo enviar la información necesaria para la creación
//       await axiosClient.post("/users", {
//         nombre: newUser.nombre,
//         email: newUser.email,
//         password: newUser.password,
//         role: newUser.role,
//         pet: newUser.pet,
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
    //     <Modal.Title>Agregar Usuario</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    //     <Form onSubmit={handleSubmit}>
    //       <FloatingLabel controlId="floatingNombre" label="Nombre">
    //         <Form.Control
    //           type="text"
    //           placeholder="Nombre del usuario"
    //           name="nombre"
    //           onChange={handleInputChange}
    //         />
    //       </FloatingLabel>
    //       <FloatingLabel controlId="floatingEmail" label="Email">
    //         <Form.Control
    //           type="email"
    //           placeholder="Email del usuario"
    //           name="email"
    //           onChange={handleInputChange}
    //         />
    //       </FloatingLabel>
    //       <FloatingLabel controlId="floatingPassword" label="Contraseña">
    //         <Form.Control
    //           type="password"
    //           placeholder="Contraseña del usuario"
    //           name="password"
    //           onChange={handleInputChange}
    //         />
    //       </FloatingLabel>
    //       <FloatingLabel controlId="floatingRole" label="Rol">
    //         <Form.Select
    //           name="role"
    //           value={newUser.role}
    //           onChange={handleInputChange}
    //         >
    //           <option value="user">Usuario</option>
    //           <option value="admin">Administrador</option>
    //         </Form.Select>
    //       </FloatingLabel>
    //       <FloatingLabel controlId="floatingPetNombre" label="Nombre de la Mascota">
    //         <Form.Control
    //           type="text"
    //           placeholder="Nombre de la mascota"
    //           name="pet.nombre"
    //           onChange={handleInputChange}
    //         />
    //       </FloatingLabel>
    //       <FloatingLabel controlId="floatingPetEspecie" label="Especie de la Mascota">
    //         <Form.Control
    //           type="text"
    //           placeholder="Especie de la mascota"
    //           name="pet.especie"
    //           onChange={handleInputChange}
    //         />
    //       </FloatingLabel>
    //       <FloatingLabel controlId="floatingPetRaza" label="Raza de la Mascota">
    //         <Form.Control
    //           type="text"
    //           placeholder="Raza de la mascota"
    //           name="pet.raza"
    //           onChange={handleInputChange}
    //         />
    //       </FloatingLabel>
    //       <Button variant="primary" type="submit" className="mt-3">
    //         Agregar
    //       </Button>
    //     </Form>
    //   </Modal.Body>
    // </Modal>
//   );
// };

// export default AddUserModal;





// AddUserModal.js
// import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
// import { useState } from "react";
// import axiosClient from "../../../config/axiosClient";

// const AddUserModal = ({ show, handleClose, setUsers, users, getUsers }) => {
//   const [newUser, setNewUser] = useState({
//     nombre: "",
//     email: "",
//     password: "",
//     role: "user",
//     pet: {
//       nombre: "",
//       especie: "",
//       raza: "",
//     },
//   });

//   const handleInputChange = (e) => {
//     if (e.target.name.startsWith("pet.")) {
//       setNewUser({
//         ...newUser,
//         pet: {
//           ...newUser.pet,
//           [e.target.name.replace("pet.", "")]: e.target.value,
//         },
//       });
//     } else {
//       setNewUser({
//         ...newUser,
//         [e.target.name]: e.target.value,
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const petResponse = await axiosClient.post("/pets", {
//         // Crear un nuevo documento de mascota
//         nombre: newUser.pet.nombre,
//         especie: newUser.pet.especie,
//         raza: newUser.pet.raza,
//       });

//       // Crear un nuevo usuario con la referencia al documento de mascota
//       await axiosClient.post("/users", {
//         nombre: newUser.nombre,
//         email: newUser.email,
//         password: newUser.password,
//         role: newUser.role,
//         pet: {
//           id: petResponse.data._id, // Usar el ID de la mascota creada
//           nombre: newUser.pet.nombre,
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
//       <Modal.Title>Agregar Usuario</Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
      // <Form onSubmit={handleSubmit}>
      //   <FloatingLabel controlId="floatingNombre" label="Nombre">
      //     <Form.Control
      //       type="text"
      //       placeholder="Nombre del usuario"
      //       name="nombre"
      //       onChange={handleInputChange}
      //     />
      //   </FloatingLabel>
      //   <FloatingLabel controlId="floatingEmail" label="Email">
      //     <Form.Control
      //       type="email"
      //       placeholder="Email del usuario"
      //       name="email"
      //       onChange={handleInputChange}
      //     />
      //   </FloatingLabel>
      //   <FloatingLabel controlId="floatingPassword" label="Contraseña">
      //     <Form.Control
      //       type="password"
      //       placeholder="Contraseña del usuario"
      //       name="password"
      //       onChange={handleInputChange}
      //     />
      //   </FloatingLabel>
      //   <FloatingLabel controlId="floatingRole" label="Rol">
      //     <Form.Select
      //       name="role"
      //       value={newUser.role}
      //       onChange={handleInputChange}
      //     >
      //       <option value="user">Usuario</option>
      //       <option value="admin">Administrador</option>
      //     </Form.Select>
      //   </FloatingLabel>
      //   <FloatingLabel controlId="floatingPetNombre" label="Nombre de la Mascota">
      //     <Form.Control
      //       type="text"
      //       placeholder="Nombre de la mascota"
      //       name="pet.nombre"
      //       onChange={handleInputChange}
      //     />
      //   </FloatingLabel>
      //   <FloatingLabel controlId="floatingPetEspecie" label="Especie de la Mascota">
      //     <Form.Control
      //       type="text"
      //       placeholder="Especie de la mascota"
      //       name="pet.especie"
      //       onChange={handleInputChange}
      //     />
      //   </FloatingLabel>
      //   <FloatingLabel controlId="floatingPetRaza" label="Raza de la Mascota">
      //     <Form.Control
      //       type="text"
      //       placeholder="Raza de la mascota"
      //       name="pet.raza"
      //       onChange={handleInputChange}
      //     />
      //   </FloatingLabel>
      //   <Button variant="primary" type="submit" className="mt-3">
      //     Agregar
      //   </Button>
      // </Form>
//     </Modal.Body>
//   </Modal>
//   );
// };

// export default AddUserModal;

//?---------------------------------------------------------------------------------
// import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
// import { useState } from "react";
// import axiosClient from "../../../config/axiosClient";

// const AddUserModal = ({ show, handleClose, getUsers }) => {
//   const [newUser, setNewUser] = useState({
//     nombre: "",
//     email: "",
//     password: "",
//     role: "user",
//     pet: {
//       nombre: "",
//       especie: "",
//       raza: "",
//     },
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     if (name.startsWith("pet.")) {
//       setNewUser((prevUser) => ({
//         ...prevUser,
//         pet: {
//           ...prevUser.pet,
//           [name.replace("pet.", "")]: value,
//         },
//       }));
//     } else {
//       setNewUser({
//         ...newUser,
//         [name]: value,
//       });
//     }
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   try {
//   //     const petResponse = await axiosClient.post("/pets", newUser.pet);

//   //     await axiosClient.post("/users", {
//   //       ...newUser,
//   //       pet: {
//   //         id: petResponse.data._id,
//   //         nombre: newUser.pet.nombre,
//   //         especie: newUser.pet.especie,
//   //         raza: newUser.pet.raza,
//   //       },
//   //     });

//   //     handleClose();
//   //     getUsers();
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     // // Crear un nuevo documento de mascota
//     // const petResponse = await axiosClient.post("/pets", {
//     //   nombre: newUser.pet.nombre,
//     //   especie: newUser.pet.especie,
//     //   raza: newUser.pet.raza,
//     // });

//     // Crear un nuevo usuario con la referencia al documento de mascota
//     const userResponse = await axiosClient.post("/users", {
//       nombre: newUser.nombre,
//       email: newUser.email,
//       password: newUser.password,
//       role: newUser.role,
//       pet: {
//         id: petResponse.data._id, // Usar el ID de la mascota creada
//         nombre: newUser.pet.nombre,
//         especie: newUser.pet.especie,
//         raza: newUser.pet.raza
//       },
//     });

//     handleClose();
//     getUsers();
//   } catch (error) {
//     console.log(error);
//   }
// };


//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Agregar Usuario</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//       <Form onSubmit={handleSubmit}>
        // <FloatingLabel controlId="floatingNombre" label="Nombre">
        //   <Form.Control
        //     type="text"
        //     placeholder="Nombre del usuario"
        //     name="nombre"
        //     onChange={handleInputChange}
        //   />
        // </FloatingLabel>
        // <FloatingLabel controlId="floatingEmail" label="Email">
        //   <Form.Control
        //     type="email"
        //     placeholder="Email del usuario"
        //     name="email"
        //     onChange={handleInputChange}
        //   />
        // </FloatingLabel>
        // <FloatingLabel controlId="floatingPassword" label="Contraseña">
        //   <Form.Control
        //     type="password"
        //     placeholder="Contraseña del usuario"
        //     name="password"
        //     onChange={handleInputChange}
        //   />
        // </FloatingLabel>
        // <FloatingLabel controlId="floatingRole" label="Rol">
        //   <Form.Select
        //     name="role"
        //     value={newUser.role}
        //     onChange={handleInputChange}
        //   >
        //     <option value="user">Usuario</option>
        //     <option value="admin">Administrador</option>
        //   </Form.Select>
        // </FloatingLabel>
//         <FloatingLabel controlId="floatingPetNombre" label="Nombre de la Mascota">
//           <Form.Control
//             type="text"
//             placeholder="Nombre de la mascota"
//             name="pet.nombre"
//             onChange={handleInputChange}
//           />
//         </FloatingLabel>
//         <FloatingLabel controlId="floatingPetEspecie" label="Especie de la Mascota">
//           <Form.Control
//             type="text"
//             placeholder="Especie de la mascota"
//             name="pet.especie"
//             onChange={handleInputChange}
//           />
//         </FloatingLabel>
//         <FloatingLabel controlId="floatingPetRaza" label="Raza de la Mascota">
//           <Form.Control
//             type="text"
//             placeholder="Raza de la mascota"
//             name="pet.raza"
//             onChange={handleInputChange}
//           />
//         </FloatingLabel>
//         <Button variant="primary" type="submit" className="mt-3">
//           Agregar
//         </Button>
//       </Form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default AddUserModal;

//?---------------------------------------------------------------------------------------------

// Importa las bibliotecas necesarias
import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
import { useState } from "react";
import axiosClient from "../../../config/axiosClient";

// Define el componente funcional
const AddUserModal = ({ show, handleClose, getUsers }) => {
  // Estado para almacenar los datos del nuevo usuario y su mascota
  const [newUser, setNewUser] = useState({
    nombre: "",
    email: "",
    password: "",
    role: "user",
    pet: {
      nombre: "",
      especie: "",
      raza: "",
    },
  });

  // Maneja el cambio en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Actualiza el estado dependiendo si es un campo de usuario o mascota
    if (name.startsWith("pet.")) {
      setNewUser((prevUser) => ({
        ...prevUser,
        pet: {
          ...prevUser.pet,
          [name.replace("pet.", "")]: value,
        },
      }));
    } else {
      setNewUser({
        ...newUser,
        [name]: value,
      });
    }
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Crear un nuevo usuario con la referencia al documento de mascota
      const response = await axiosClient.post("/users", newUser);

      // Cerrar el modal y actualizar la lista de usuarios
      handleClose();
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  // Renderiza el componente del modal
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingNombre" label="Nombre">
          <Form.Control
            type="text"
            placeholder="Nombre del usuario"
            name="nombre"
            onChange={handleInputChange}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingEmail" label="Email">
          <Form.Control
            type="email"
            placeholder="Email del usuario"
            name="email"
            onChange={handleInputChange}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Contraseña">
          <Form.Control
            type="password"
            placeholder="Contraseña del usuario"
            name="password"
            onChange={handleInputChange}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingRole" label="Rol">
          <Form.Select
            name="role"
            value={newUser.role}
            onChange={handleInputChange}
          >
            <option value="user">Usuario</option>
            <option value="admin">Administrador</option>
          </Form.Select>
        </FloatingLabel>
          <FloatingLabel controlId="floatingPetNombre" label="Nombre de la Mascota">
            <Form.Control
              type="text"
              placeholder="Nombre de la mascota"
              name="pet.nombre"
              onChange={handleInputChange}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPetEspecie" label="Especie de la Mascota">
            <Form.Control
              type="text"
              placeholder="Especie de la mascota"
              name="pet.especie"
              onChange={handleInputChange}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPetRaza" label="Raza de la Mascota">
            <Form.Control
              type="text"
              placeholder="Raza de la mascota"
              name="pet.raza"
              onChange={handleInputChange}
            />
          </FloatingLabel>
          <Button variant="primary" type="submit" className="mt-3">
            Agregar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

// Exporta el componente
export default AddUserModal;
