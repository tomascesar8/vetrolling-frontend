import { useEffect, useState } from "react"

const useForm = (initialValues, submit, validation) => {

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false)

  console.log(values);

  useEffect(()=>{
    if(submitting){
      if(Object.keys(errors).length===0){
        submit(values);
      }
      setSubmitting(false);
    }
  },[errors]);

  // const handleKeyUp = (e)=>{
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value
  //   })
  // }


  const handleKeyUp = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [fieldName, subFieldName] = name.split('.');
      console.log('VALUES HANDLEKEYUP',values);
      setValues((prevValues) => ({
        ...prevValues,
        [fieldName]: {
          ...prevValues[fieldName],
          [subFieldName]: value,
        },
      }));
      console.log('VALUES HANDLEKEYUP',values);
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log('Formulario enviado:', values);
    if(validation){
      setErrors(validation(values));
      console.log('if dentro de handlesubmit');
    }else{
      setErrors({});
      console.log('else dentro de handlesubmit');
    }
    setSubmitting(true);
  }

  return {
    handleKeyUp,
    handleSubmit,
    values,
    setValues,
    errors
  };
}
 
export default useForm;