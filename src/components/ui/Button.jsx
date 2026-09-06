function Button({ children,type, ...props }) {
    return (
        <button type={type || "button"} {...props}>
            {children}
        </button>
    );
}
export default Button;