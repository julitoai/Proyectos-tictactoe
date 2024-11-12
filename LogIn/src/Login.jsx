import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formValues, setFormValues] = useState({
    input1: "",
    input2: "",
  });

  const [errors, setErrors] = useState({
    input1: "",
    input2: "",
    input3: "",
  });

  const mailRegex = /^[a-zA-Z0-9]{4,12}@[a-zA-Z0-9]{4,10}\.[a-zA-Z]{2,}$/;

  const validacionMail = () => {
    const mailToValidate = formValues.input2;
    return mailRegex.test(mailToValidate);
  };

  const validacionInputs = () => {
    const newErrors = {};

    if (formValues.input1.trim() === "") {
      newErrors.input1 = "El nombre es obligatorio";
    }
    if (formValues.input2.trim() === "") {
      newErrors.input2 = "El Email es obligatorio";
    } else if (!validacionMail()) {
      newErrors.input3 = "El Email no es valido";
    }
    return newErrors;
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validacionInputs();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Formulario válido, continuar con el siguiente paso");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    const updatedErrors = { ...errors };

    if ((name === "input1" && value.trim() === "") || value === " ") {
      updatedErrors.input1 = "El nombre es obligatorio";
    } else if (name === "input1") {
      delete updatedErrors.input1;
    }

    if (name === "input2" || value === " ") {
      if (value.trim() === "") {
        updatedErrors.input2 = "El Email es obligatorio updatedErrors";
      } else if (!mailRegex.test(value)) {
        updatedErrors.input3 = "El Email no es válido updatedErrors";
      } else {
        delete updatedErrors.input2;
        delete updatedErrors.input3;
      }
    }

    setErrors(updatedErrors);
  };

  return (
    <>
      <h1 className="h1-form">Multi-Step Register Form</h1>
      <div className="container-section">
        <section className="section-box">
          <h2>Register</h2>
          <form onSubmit={handleInputSubmit} className="form">
            <span className="span-form">
              <h3 className="register-text">Name</h3>
              <input
                value={formValues.input1}
                name="input1"
                className="input-form"
                type="text"
                placeholder="Enter your name"
                onChange={handleInputChange}
              />
              {errors.input1 && <p className="error">{errors.input1}</p>}
            </span>
            <span className="span-form">
              <h3 className="register-text">Email</h3>
              <input
                value={formValues.input2}
                name="input2"
                className="input-form"
                type="text"
                placeholder="Enter your E-mail"
                onChange={handleInputChange}
              />
              {errors.input2 && <p className="error">{errors.input2}</p>}
              {errors.input3 && <p className="error">{errors.input3}</p>}
            </span>
            <span className="span-button">
              <Link className="link" to={`/Topics`}>
                <button
                  type="submit"
                  className="button-form"
                  disabled={Object.keys(errors).length > 0}
                >
                  Continue
                </button>
              </Link>
            </span>
          </form>
        </section>
      </div>
    </>
  );
};

export default Login;
