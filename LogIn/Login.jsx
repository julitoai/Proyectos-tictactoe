const Login = () => {
  return (
    <>
      <h1 className="h1-form">Multi-Step Register Form</h1>
      <div className="container-section">
        <section className="section-box">
          <h2 className="text-form">Register</h2>
          <form className="form" action="get">
            <span className="span-form">
            <h3 className="text-form">Name</h3>
            <input
              className="input-form"
              type="text"
              placeholder="Enter your name"
            />
            </span>
            <span className="span-form">
            <h3 className="text-form">Email</h3>
            <input
              className="input-form"
              type="text"
              placeholder="Enter your E-mail"
            />
            </span>
            <span className="span-button">
            <button className="button-form">Continuar</button>
            </span>
          </form>
        </section>
      </div>
    </>
  );
};
export default Login;
