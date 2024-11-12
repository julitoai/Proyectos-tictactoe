const Button = ({ addContent, content, isActive }) => {
  return (
    <>
      <button
        className={isActive ? "button-topics2" : "button-topics"}
        onClick={() => addContent(content)}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
