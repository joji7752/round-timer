const Button = ({ title, activeClass, _callback }) => {
  return (
    <button
      className={activeClass}
      onClick={_callback}
      style={{ cursor: "pointer" }}
    >
      {title}
    </button>
  );
};
export default Button;
