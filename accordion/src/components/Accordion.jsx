import { useState } from "react";
import data from "./data.js";
import "./accordion.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(id) {
    setSelected(id);
  }

  function handleMultiSelection(id) {
    const multipleArr = [...multiple];
    const currentIdIndex = multipleArr.indexOf(id);

    currentIdIndex === -1
      ? multipleArr.push(id)
      : multipleArr.splice(currentIdIndex, 1);

    setMultiple(multipleArr);
  }

  function handleEnableMultiSelection() {
    multiSelection ? setMultiple([]) : setSelected(null);
    setMultiSelection(!multiSelection);
  }

  return (
    <div className="accordion">
      <button type="button" onClick={handleEnableMultiSelection}>
        {multiSelection ? "Enable Single-Select" : "Enable Multi-Select"}
      </button>
      {data && data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className="item">
            {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <div
              className="question"
              onClick={
                multiSelection
                  ? () => handleMultiSelection(item.id)
                  : () => handleSingleSelection(item.id)
              }
            >
              <h3>{item.question}</h3>
              <span>+</span>
            </div>
            {selected === item.id || multiple.indexOf(item.id) !== -1 ? (
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
