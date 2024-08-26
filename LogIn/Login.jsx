const Login = () => {
  return (
    <>
      <h1 className="h1-form">Multi-Step Register Form</h1>
      <div className="container-section">
        <section className="section-box">
          <h2 className="text-form">Register</h2>
          <form className="form" action="get">
            <h3 className="text-form">Name</h3>
            <input
              className="input-form"
              type="text"
              placeholder="Enter your name"
            />
            <h3 className="text-form">Email</h3>
            <input
              className="input-form"
              type="text"
              placeholder="Enter your E-mail"
            />

            <button className="button-form">Continuar</button>
          </form>
        </section>
      </div>
    </>
  );
};
export default Login;
