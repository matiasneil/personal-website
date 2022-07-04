import React, { useState } from "react";
import "./App.css";
import PillButton from "./components/pill-button/PillButton";
import Switch from "./components/switch/Switch";
import Typewrite from "./components/typewrite/Typewrite";
import data from "./data.json";

function App() {
  const [formalMode, setFormalMode] = useState(false);

  return (
    <div className={`container ${!formalMode ?"purple-rain-bg" : "beige-bg"}`}>
      <div className="content">
        <div className="switch-container">
          <p className="emoji">☔</p>
          <Switch onChangeFn={setFormalMode}></Switch>
          <p className="emoji">💼</p>
        </div>

        <div className="else-container">
          {formalMode && (
            <React.Fragment>
              <h1>Matías Neil</h1>
              <Typewrite element={<h2>fullstack developer</h2>} />
            </React.Fragment>
          )}

          <section className="pills-section">
            {data.links.map((link, i) => {
              const show = link.formal === formalMode;
              return (
                show && (
                  <PillButton
                    class={link.class}
                    name={link.name}
                    formalMode={formalMode}
                    url={link.url}
                    key={i}
                  />
                )
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
