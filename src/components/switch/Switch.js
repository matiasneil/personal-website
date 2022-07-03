import "./Switch.css";

function Switch(props) {
  return (
    <label className="switch">
        <input type="checkbox" onChange={(event) => props.onChangeFn(event.target.checked)}></input>
        <span className="slider round"></span>
    </label>
  );
}

export default Switch;
