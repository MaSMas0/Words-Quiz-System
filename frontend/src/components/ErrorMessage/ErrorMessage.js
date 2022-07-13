// Make a error message component to format error messages in the application
// it will render its children in this case will be the span element
const ErrorMessage = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: 10,
        marginBottom: 10,
        borderRadius: 4,
        backgroundColor: "orangered",
        textAlign: "center",
        color: "white",
        textTransform: "capitalize",
      }}
    >
      {children}
    </div>
  );
};

export default ErrorMessage;
