import "./PillButton.css";

function PillButton(props) {
  return (
    <button type="button" className={`pill-button ${props.formalMode ? "grey-bg" : "purple-bg"}`} onClick={()=> window.open(props.url, "_blank")}>
      <h3>{ props.name }</h3>
    </button>
  );
}

export default PillButton;
