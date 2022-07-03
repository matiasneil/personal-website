import "./PillButton.css";

function PillButton(props) {
  return (
    <div className="pill-button" style={{backgroundColor: `${props.bgColor}`}}>
      <h3>{ props.name }</h3>
    </div>
  );
}

export default PillButton;
