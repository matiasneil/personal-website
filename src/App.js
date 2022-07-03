import { useState } from "react";
import "./App.css";
import PillButton from "./components/pill-button/PillButton";
import Switch from "./components/switch/Switch";
import data from "./data.json";

function App() {
  const [formalMode, setFormalMode] = useState(false);

  return (
    <div className="container">
      <div className="content">
        <div className="switch-container">
          <p className="emoji">🍺</p>
          <Switch onChangeFn={setFormalMode}></Switch>
          <p className="emoji">💼</p>
        </div>

        <h1>Matías Neil</h1>
        {formalMode && <h2>Fullstack developer</h2>}

        <section className="pills-section">
          {data.links.map((link, i) => {
            const show = link.formal == formalMode;
            return (
              show && (
                <PillButton
                  class={link.class}
                  name={link.name}
                  bgColor={link.bgColor}
                  key={i}
                />
              )
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
