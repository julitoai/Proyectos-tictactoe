import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "./Button"

const Topics = () => {
  
  const [selectedFields, setSelectedFields] = useState('')

  /* const [buttonState, setButtonState] = useState() */

  /* botones seleccionados */

  /* let setButton = Button.isSelected */
    
  const handleButtonClick = () => {
    console.log('activado')
    const contentButton = Button.props.content
    setSelectedFields(contentButton)
  }


    return (
      <>
        <h1 className="h1-form">Multi-Step Register Form</h1>
        <div className="container-section">
          <section className="section-box">
            <h2 className="text-form">Which topics you are interested in?</h2>
              
              <div className="container-button">
              <Button onClick={handleButtonClick} content='Software Development' isSelected={false}/>
              <Button onClick={handleButtonClick} content='User Experience' isSelected={false}/>
              <Button onClick={handleButtonClick} content='Graphic Design' isSelected={false}/>
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
  