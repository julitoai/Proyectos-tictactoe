import { Link } from "react-router-dom"

const Root = () => {
  return (
    <>
    <h1 className="h1-form">Home</h1>
    <div className="container-section">
      <section className="section-box">
        <button className="button-form"><Link className="link" to={`Login`}>Login</Link></button> 
        <button className="button-form"><Link className="link" to={`Topics`}>Topics</Link></button>
        <button className="button-form"><Link className="link" to={`Summary`}>Summary</Link></button>
      </section>
      <button className="button-form"><Link className="link" to={`Api`}>API</Link></button>
    </div>
  </>
  );
}
export default Root;