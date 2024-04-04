import { Modal, Button, FloatingLabel, Form, Alert, Container } from "react-bootstrap";
import { useState } from "react";
import axiosClient from "../../../config/axiosClient";
import Swal from "sweetalert2";
import { handleKeyDown, handleKeyDownForEmail, noSpacesKeyDown } from "../../../helpers/validations";

const AddUserModal = ({ show, handleClose, getUsers }) => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosClient.post("/users", newUser);
      handleClose();
      getUsers();
      Swal.fire({
        icon: 'success',
        title: 'Usuario agregado',
        text: 'Usuario creado exitosamente.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error al agregar el usuario',
        text: error.response.data.message,
      });
    }
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Crear nuevo usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingNombre" label="Nombre">
          <Form.Control
            type="text"
            placeholder="Nombre del usuario"
            name="nombre"
            onChange={handleInputChange}
            minLength={3}
            maxLength={40}
            patern="^[a-zA-Z\u00C0-\u00FFñÑ]+(?: [a-zA-Z\u00C0-\u00FFñÑ]+)*"            
            title="Solo letras y sin espacios al inicio (min 3, max 40 caracteres)"
            onKeyDown={handleKeyDown}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingEmail" label="Email">
          <Form.Control
            type="email"
            placeholder="Email del usuario"
            name="email"
            onChange={handleInputChange}
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="El email debe tener el formato 'nombre@dominio.tld'"
            minLength={10}
            maxLength={35}
            onKeyDown={handleKeyDownForEmail}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Contraseña">
          <Form.Control
            type="password"
            placeholder="Contraseña del usuario"
            name="password"
            onChange={handleInputChange}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$"
            title="La contraseña debe tener al menos 6 caracteres y contener letras mayúsculas, minúsculas, números y caracteres especiales"
            onKeyDown={noSpacesKeyDown}
            required
            maxLength={30}
            className="mb-0"
          />
          <p variant="success" className="text-success mt-0 mb-2 alert-input-password">
          *La contraseña debe tener al menos 6 caracteres (mayúsculas, minúsculas, números y caracteres especiales)
          </p>
        </FloatingLabel>
        <FloatingLabel controlId="floatingRole" label="Rol">
          <Form.Select
            name="role"
            value={newUser.role}
            onChange={handleInputChange}
            required
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
              minLength={3}
              maxLength={40}
              patern="^[a-zA-Z\u00C0-\u00FFñÑ]+(?: [a-zA-Z\u00C0-\u00FFñÑ]+)*"              
              title="Solo letras y sin espacios al inicio (min 3, max 40 caracteres)"
              onKeyDown={handleKeyDown}
              required
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPetEspecie" label="Especie de la Mascota">
            <Form.Control
              type="text"
              placeholder="Especie de la mascota"
              name="pet.especie"
              onChange={handleInputChange}
              minLength={3}
              maxLength={40}
              patern="^[a-zA-Z\u00C0-\u00FFñÑ]+(?: [a-zA-Z\u00C0-\u00FFñÑ]+)*"              
              title="Solo letras y sin espacios al inicio (min 3, max 40 caracteres)"
              onKeyDown={handleKeyDown}
              required
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPetRaza" label="Raza de la Mascota">
            <Form.Control
              type="text"
              placeholder="Raza de la mascota"
              name="pet.raza"
              onChange={handleInputChange}
              minLength={3}
              maxLength={40}
              patern="^[a-zA-Z\u00C0-\u00FFñÑ]+(?: [a-zA-Z\u00C0-\u00FFñÑ]+)*"              
              title="Solo letras y sin espacios al inicio (min 3, max 40 caracteres)"
              onKeyDown={handleKeyDown}
              required
            />
          </FloatingLabel>
          <Container className="text-end">
            <Button variant="success" type="submit" className="mt-3">
              Crear Usuario
            </Button>
            <Button variant="secondary" type="button" className="ms-2 mt-3" onClick={handleClose}>
              Cancelar
            </Button>
          </Container>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddUserModal;
