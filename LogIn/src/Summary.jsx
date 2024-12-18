import { Link } from "react-router-dom";
import { useLoginContext } from "./context/context.jsx";

const Summary = () => {
  const { loginTopics } = useLoginContext();
  return (
    <>
      <h1 className="h1-form">Multi-Step Register Form</h1>
      <div className="container-section">
        <section className="section-box">
          <h2 className="text-form">Summary</h2>
          <div>
            <p>
              <span className="grey-text">Name:</span> Julián Ruani
            </p>
            <p>
              <span className="grey-text">Email:</span> juliamruani@gmail.com
            </p>
          </div>
          <div>
            <p>
              <span className="grey-text">Topics:</span>
            </p>
            <ul className="list-sum">
              <p>{loginTopics}</p>
            </ul>
          </div>
          <span className="span-button">
            <Link className="link" to={`/`}>
              <button className="button-form">Confirm</button>
            </Link>
          </span>
        </section>
      </div>
    </>
  );
};
export default Summary;
