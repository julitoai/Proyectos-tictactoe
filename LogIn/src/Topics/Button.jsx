const Button = ({ addContent, content, selected, className }) => {
  return (
    <>
      <button
        className={className}
        onClick={() => addContent(content)}
        selected={selected}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
