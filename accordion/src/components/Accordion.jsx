import { useState } from "react";
import data from "./data.js";
import "./accordion.css";

const Accordion = () => {
  const [selected, setSelected] = useState("1");

  function handleSingleSelection(id) {
    console.log(id);
    setSelected(id);
  }
  return (
    <div className="accordion">
      {data && data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className="item">
            {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <div
              className="question"
              onClick={() => handleSingleSelection(item.id)}
            >
              <h3>{item.question}</h3>
              <span>+</span>
            </div>
            {selected === item.id ? (
              <div className="answer">
                <p>{item.answer}</p>
              </div>
            ) : null}
          </div>
        ))
      ) : (
        <div>No data</div>
      )}
    </div>
  );
};

export default Accordion;
