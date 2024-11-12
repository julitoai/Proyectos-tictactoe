import { Link } from "react-router-dom";
const Root = () => {
  return (
    <>
      <h1 className="h1-form">Home</h1>
      <div className="container-section">
        <section className="section-box">
          <Link className="link" to={`Login`}>
            <button className="button-form">Login</button>
          </Link>

          <Link className="link" to={`Topics`}>
            <button className="button-form">Topics</button>
          </Link>
          <Link className="link" to={`Summary`}>
            {" "}
            <button className="button-form">Summary</button>
          </Link>
        </section>

        <Link className="link" to={`Api`}>
          <button className="button-form">API</button>
        </Link>
      </div>
    </>
  );
};
export default Root;
