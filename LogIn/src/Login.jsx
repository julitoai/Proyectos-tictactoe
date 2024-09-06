import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

  const handleInputSubmit = (e) =>{
    e.preventDefault();
    console.log("onchange funcionando")
      const { name, value } = e.target;
      setFormValues({
        ...formValues,
        [name]:value
      })
  }

  const [formValues, setFormValues] = useState({
    input1:'',
    input2:''
});
  const [error, setError] = useState(" ");

  const validacionInputs = () => {
    if(formValues.input1 === ''){
      setError('Este campo es obligatorio')
    }else if(formValues.input2 === ''){
      setError('Este campo es obligatorio')
    }else{
      setError('')
    }
  }

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
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  input1: e.target.value
                })
                validacionInputs();
              }}
            />
            </span>
            <span className="span-form">
            <h3 className="register-text">Email</h3>
            <input
              value={formValues.input2}
              name="input2"
              className="input-form"
              type="text"
              placeholder="Enter your E-mail"
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  input2: e.target.value
                })
                validacionInputs();
              }}
            />
            </span>
            {error && <p>{error}</p>}
            <span className="span-button">
            <button type="submit" className="button-form"><Link className="link" to={`/Topics`}>Continue</Link></button>
            </span>            
          </form>
        </section>
      </div>
    </>
  );
};
export default Login;
