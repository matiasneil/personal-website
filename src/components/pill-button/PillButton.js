import "./PillButton.css";

function PillButton(props) {
  return (
    <button className="pill-button" onClick={()=> window.open(props.url, "_blank")} style={{backgroundColor: `${props.formalMode ? "#333333" : "#9663C4"}`}}>
      <h3>{ props.name }</h3>
    </button>
  );
}

export default PillButton;
