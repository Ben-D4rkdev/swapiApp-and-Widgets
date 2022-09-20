export default function Button(props) {
  return (
    <div
      onClick={() => props.handleChange(props.children)}
      className={`button-wrapper ${isNaN(props.children) ? "operator" : null} ${
        props.label || ""
      }`}
    >
      {props.children}
    </div>
  );
}
