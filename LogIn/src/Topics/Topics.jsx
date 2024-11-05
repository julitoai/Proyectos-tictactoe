import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";

const Topics = () => {
  const [selectedFields, setSelectedFields] = useState("");
  const [selectedBool, setSelectedBool] = useState();

  const handleClick = (content) => {
    setSelectedFields(content);
    setSelectedBool(true);
    console.log();
  };

  return (
    <>
      <h1 className="h1-form">Multi-Step Register Form</h1>
      <div className="container-section">
        <section className="section-box">
          <h2 className="text-form">Which topics you are interested in?</h2>

          <div className="container-button">
            <Button
              addContent={handleClick}
              content="Software Development"
              selected={selectedBool}
              className={
                selectedBool
                  ? (Button.className = "button-topics2")
                  : (Button.className = "button-topics")
              }
            />
            <Button
              addContent={handleClick}
              content="User Experience"
              selected={selectedBool}
              className={
                selectedBool
                  ? (Button.className = "button-topics2")
                  : (Button.className = "button-topics")
              }
            />
            <Button
              addContent={handleClick}
              content="Graphic Design"
              selected={selectedBool}
              className={
                selectedBool
                  ? (Button.className = "button-topics2")
                  : (Button.className = "button-topics")
              }
            />
          </div>

          <span className="span-button">
            <Link className="link" to={`/Summary`}>
              <button className="button-form">Continue</button>
            </Link>
          </span>
        </section>
      </div>
      <p>{selectedFields}</p>
    </>
  );
};

export default Topics;
