// eslint-disable-next-line react/prop-types
const Button = ({ href, type, className, children, ...attributes }) => {
  return (
    <a
      href={href ? href : "#"}
      role={type ? type : "button"}
      className={`btn ${className}`}
      {...attributes}
    >
      {children}
    </a>
  );
};

export default Button;
