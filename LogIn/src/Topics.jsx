import { Link } from "react-router-dom";

const Topics = () => {
    return (
      <>
        <h1 className="h1-form">Multi-Step Register Form</h1>
        <div className="container-section">
          <section className="section-box">
            <h2 className="text-form">Which topics you are interested in?</h2>
              
              <div className="container-button">
              <button className="button-topics">Software Development</button>
              <button className="button-topics">User Experience</button>
              <button className="button-topics">Graphic Design</button>
              </div>

              <span className="span-button">
              <button className="button-form"><Link className="link" to={`/Summary.jsx`}>Continue</Link></button>

              </span>
            
          </section>
        </div>
      </>
    );
  };
  export default Topics;
  