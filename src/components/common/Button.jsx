function Button({ children, type, ...props }) {
  return (
    <button
      className="auth-btn"
      type={type || "button"}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;