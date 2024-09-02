import { Link } from "react-router-dom"

const Root = () => {
  return (
    <>
    <h1 className="h1-form">Home</h1>
    <div className="container-section">
      <section className="section-box">
        <button className="button-form"><Link className="link" to={`Login.jsx`}>Login</Link></button>
        <button className="button-form"><Link className="link" to={`Topics.jsx`}>Topics</Link></button>
        <button className="button-form"><Link className="link" to={`Summary.jsx`}>Summary</Link></button>
      </section>
    </div>
  </>
  );
}
export default Root;