import { useState } from "react";
import "./App.css";
import PillButton from "./components/pill-button/PillButton";
import Switch from "./components/switch/Switch";
import Typewrite from "./components/typewrite/Typewrite";
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

        {!formalMode && <h1 className="purple-rain-font">Matias Neil</h1>}

        {formalMode && <h1>Matías Neil</h1>}

        {formalMode && 
          <Typewrite element={<h2>fullstack developer</h2>}/>}

        <section className="pills-section">
          {data.links.map((link, i) => {
            const show = link.formal === formalMode;
            return (
              show && (
                <PillButton
                  class={link.class}
                  name={link.name}
                  bgColor={link.bgColor}
                  url={link.url}
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
