import { Link } from "react-router-dom";
import Button from "./Button";
import { useLoginContext } from "../context/context";

const Topics = () => {
  /* const [selectedFields, setSelectedFields] = useState(""); */
  const { loginTopics, setLoginTopics } = useLoginContext();

  const handleClick = (content) => {
    setLoginTopics(content);
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
              isActive={loginTopics === "Software Development"}
            />
            <Button
              addContent={handleClick}
              content="User Experience"
              isActive={loginTopics === "User Experience"}
            />
            <Button
              addContent={handleClick}
              content="Graphic Design"
              isActive={loginTopics === "Graphic Design"}
            />
          </div>

          <span className="span-button">
            <Link className="link" to={`/Summary`}>
              <button className="button-form">Continue</button>
            </Link>
          </span>
        </section>
      </div>
    </>
  );
};

export default Topics;
