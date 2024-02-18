import { useState } from "react";
import data from "./data.js";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(id) {
    console.log(id);
    setSelected(id);
  }
  return (
    <div className="wrapper">
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
    </div>
  );
};

export default Accordion;
