import { Link } from "react-router-dom";
import Topics from "./Topics/Topics";
import { useState } from "react";

const Summary = () => {

  const [campos, setCampos] = useState([])
  const spreadCampos = Topics.selectedFields
  console.log(spreadCampos)
  /*setCampos([...spreadCampos])*/
    return (
      <>
        <h1 className="h1-form">Multi-Step Register Form</h1>
        <div className="container-section">
          <section className="section-box">
            <h2 className="text-form">Summary</h2>
            <div>
            <p><span className="grey-text">Name:</span> Julián Ruani</p>
            <p><span className="grey-text">Email:</span> juliamruani@gmail.com</p>
            </div>
            <div>
            <p><span className="grey-text">Topics:</span></p>
            <ul className="list-sum">
            <li>{campos}</li>
            </ul>
            </div>
            <span className="span-button">
            <button className="button-form"><Link className="link" to={`/`}>Confirm</Link></button>

            </span>            
          </section>
        </div>
      </>
    );
  };
  export default Summary;
  