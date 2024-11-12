import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";

const Topics = () => {
  const [selectedFields, setSelectedFields] = useState("");

  const handleClick = (content) => {
    setSelectedFields(content);
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
              isActive={selectedFields === "Software Development"}
            />
            <Button
              addContent={handleClick}
              content="User Experience"
              isActive={selectedFields === "User Experience"}
            />
            <Button
              addContent={handleClick}
              content="Graphic Design"
              isActive={selectedFields === "Graphic Design"}
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
