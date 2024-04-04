import { Modal, Button, FloatingLabel, Form, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import axiosClient from "../../../config/axiosClient";
import Swal from "sweetalert2";
import { handleKeyDown } from "../../../helpers/validations";

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

  const [isFormChanged, setIsFormChanged] = useState(false);

  const getUser = async () => {
    try {
      if (selectedUser) {
        const response = await axiosClient.get(`/users/${selectedUser}`);
        setUserToUpdate(response.data.user);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [selectedUser]);

  const handleInputChange = (e) => {
    setUserToUpdate({
      ...userToUpdate,
      [e.target.name]: e.target.value,
    });
    setIsFormChanged(true);
  };

  const handlePetInputChange = (e) => {
    setUserToUpdate({
      ...userToUpdate,
      pet: {
        ...userToUpdate.pet,
        [e.target.name]: e.target.value,
      },
    });
    setIsFormChanged(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let updatedPet;

      if (userToUpdate.pet && userToUpdate.pet._id) {
        const petUpdateResponse = await axiosClient.put(`/pets/${userToUpdate.pet._id}`, {
          nombre: userToUpdate.pet.nombre,
          especie: userToUpdate.pet.especie,
          raza: userToUpdate.pet.raza,
        });
        updatedPet = petUpdateResponse.data.pet;
      } else {
        const petCreateResponse = await axiosClient.post("/pets", {
          nombre: userToUpdate.pet.nombre,
          especie: userToUpdate.pet.especie,
          raza: userToUpdate.pet.raza,
        });
        updatedPet = petCreateResponse.data.pet;
        if (updatedPet) {
          await axiosClient.put(`/users/${selectedUser}`, {
            pet: updatedPet._id,
          });
          const response = await axiosClient.get(`/users/${selectedUser}`);
          setUserToUpdate(response.data.user);
        }
      }
      const putUsuario = await axiosClient.put(`/users/${selectedUser}`, {
        nombre: userToUpdate.nombre,
        email: userToUpdate.email,
        role: userToUpdate.role,
      });

      getUsers();
      handleClose();
      setIsFormChanged(false);

      Swal.fire({
        icon: 'success',
        title: 'Cambios guardados',
        text: 'Usuario actualizado.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseModal = () => {
    getUser()
    setUserToUpdate({
      nombre: "",
      email: "",
      role: "",
      pet: {
        nombre: "",
        especie: "",
        raza: "",
      },
    });
    setIsFormChanged(false);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleCloseModal} backdrop="static">
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
          <FloatingLabel controlId="floatingPetNombre" label="Nombre de la Mascota">
            <Form.Control
              type="text"
              placeholder="Nombre de la mascota"
              name="nombre"
              value={userToUpdate.pet ? userToUpdate.pet.nombre : ""}
              onChange={handlePetInputChange}
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
              name="especie"
              value={userToUpdate.pet ? userToUpdate.pet.especie : ""}
              onChange={handlePetInputChange}
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
              name="raza"
              value={userToUpdate.pet ? userToUpdate.pet.raza : ""}
              onChange={handlePetInputChange}
              minLength={3}
              maxLength={40}
              patern="^[a-zA-Z\u00C0-\u00FFñÑ]+(?: [a-zA-Z\u00C0-\u00FFñÑ]+)*"              
              title="Solo letras y sin espacios al inicio (min 3, max 40 caracteres)"
              onKeyDown={handleKeyDown}
              required
            />
          </FloatingLabel>

          <Container className="text-end">
            <Button className="mt-2" variant="warning" type="submit" disabled={!isFormChanged}>
              Guardar cambios
            </Button>
            <Button className="mt-2 ms-2" variant="secondary" onClick={handleCloseModal}>
              Cancelar
            </Button>
          </Container>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditUserModal;