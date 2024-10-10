import { Link } from "react-router-dom";
import { useState } from "react";

const Topics = () => {
  
  const [selectedFields, setSelectedFields] = useState()

  
  /* botones seleccionados */
  function handleButtonClick(){
    setSelectedFields(selectedFields.value);
    console.log(selectedFields)
  }


    return (
      <>
        <h1 className="h1-form">Multi-Step Register Form</h1>
        <div className="container-section">
          <section className="section-box">
            <h2 className="text-form">Which topics you are interested in?</h2>
              
              <div className="container-button">
              <button value= '1' onClick={handleButtonClick} className="button-topics">Software Development</button>
              <button value= '2' onClick={handleButtonClick} className="button-topics">User Experience</button>
              <button value= '3' onClick={handleButtonClick} className="button-topics">Graphic Design</button>
              </div>

              <span className="span-button">
              <button className="button-form"><Link className="link" to={`/Summary`}>Continue</Link></button>

              </span>
            
          </section>
        </div>
        <p>
          {selectedFields}
        </p>
      </>
    );
  };
  export default Topics;
  