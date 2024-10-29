import { Link } from "react-router-dom";
import {  useState } from "react";
import Button from "./Button"

const Topics = () => {
  
  const [selectedFields, setSelectedFields] = useState({
    content1: '',
    content2: '',
    content3: ''
  })

  const handleClick = (content) => {
    console.log('activo')
    setSelectedFields(selectedFields.content1)
  }
    return (
      <>
        <h1 className="h1-form">Multi-Step Register Form</h1>
        <div className="container-section">
          <section className="section-box">
            <h2 className="text-form">Which topics you are interested in?</h2>
              
              <div className="container-button">
              <Button addContent={handleClick} content='Software Development' selected={false}/>
              <Button addContent={handleClick} content='User Experience' selected={false}/>
              <Button addContent={handleClick} content='Graphic Design' selected={false}/>
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
  