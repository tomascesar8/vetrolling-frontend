export const validationLogin = values => {
  let errors = {};
  if (!values.email) {
    errors.email = 'El email es obligatorio';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'El email no es válido';
  } else if (values.email.length > 30) {
    errors.email = 'El email no debe poseer más de 30 caracteres';
  }

  if (!values.password) {
    errors.password = 'La contraseña es obligatoria'
  } else if (values.password.length < 8) {
    errors.password = 'La contraseña debe tener como mínimo 8 caracteres'
  } else if (values.password.length > 30) {
    errors.password = 'La contraseña no debe poseer más de 30 caracteres'
  }
  return errors;
}

export const validationRegister = (values) => {
  const errors = {};

  if (!values.nombre.trim()) {
    errors.nombre = 'El nombre es obligatorio';
  } else if (values.nombre.trim().length < 3 || values.nombre.trim().length > 50) {
    errors.nombre = 'El nombre debe tener entre 3 y 50 caracteres';
  }

  if (!values.email.trim()) {
    errors.email = 'El email es obligatorio';
  } else if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
    errors.email = 'Ingresa un email válido';
  }

  if (!values.password) {
    errors.password = 'La contraseña es obligatoria';
  } else if (values.password.length < 6 || values.password.length > 30) {
    errors.password = 'La contraseña debe tener entre 6 y 30 caracteres';
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Las contraseñas no coinciden';
  }

  if (!values.pet || !values.pet.nombre) {
    errors['pet.nombre'] = 'El nombre de la mascota es obligatorio';
  } else if (values.pet.nombre.length < 3 || values.pet.nombre.length > 50) {
    errors['pet.nombre'] = 'El nombre de la mascota debe tener entre 3 y 50 caracteres';
  }

  if (!values.pet || !values.pet.especie) {
    errors['pet.especie'] = 'La especie de la mascota es obligatoria';
  } else if (values.pet.especie.length < 3 || values.pet.especie.length > 20) {
    errors['pet.especie'] = 'La especie de la mascota debe tener entre 3 y 20 caracteres';
  }

  if (!values.pet || !values.pet.raza) {
    errors['pet.raza'] = 'La raza de la mascota es obligatoria';
  } else if (values.pet.raza.length < 3 || values.pet.raza.length > 20) {
    errors['pet.raza'] = 'La raza de la mascota debe tener entre 3 y 20 caracteres';
  }
  return errors;
};

export const handleKeyDown = (e) => {
  const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\u00f1\u00d1]+(?: [a-zA-ZÀ-ÖØ-öø-ÿ\u00f1\u00d1]+)*[a-zA-ZÀ-ÖØ-öø-ÿ\u00f1\u00d1\s]*$/;
  const { value, selectionStart, selectionEnd } = e.target;
  const nextValue = value.substring(0, selectionStart) + e.key + value.substring(selectionEnd);
  if (!regex.test(nextValue) && !e.key.match(regex)) {
    e.preventDefault();
  }
};

export const noSpacesKeyDown = (e) => {
  if (e.key === ' ') {
    e.preventDefault();
  }
};

export const handleKeyDownForEmail = (e) => {
  const regex = /^[a-zA-Z0-9._@]+$/;
  if (!e.key.match(regex)) {
    e.preventDefault();
  }
};

export const handleInputForPhone = (e) => {
  const { value } = e.target;
  const sanitizedValue = value.replace(/[^0-9 ]/g, '');
  e.target.value = sanitizedValue;
}
