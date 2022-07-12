import { useState } from "react";
import Button from "./Button";

const Specifications = () => {
  const [question, setQuestion] = useState([
    {
      question: "Special Instructions",
      type: "textBox",
      choices: [],
      currentChoice: "",
    },
  ]);

  const types = ["dropDown", "checkBox", "textBox", "radio"];

  //Change Input Values on change according to event and index
  const handleFormChange = (index, event) => {
    let data = [...question];
    data[index][event.target.name] = event.target.value;
    setQuestion(data);
  };

  //Add a new question field
  const addQuestion = () => {
    let newQuestion = {
      question: "",
      type: "textBox",
      choices: [],
      currentChoice: "",
    };
    setQuestion([...question, newQuestion]);
  };

  //Add New choices to a question
  const handleChoiceAdd = (index, newChoice) => {
    let data = [...question];
    data[index].choices.push(newChoice);
    setQuestion(data);
  };

  return (
    <div className="container">
      <form>
        {question.map((input, index) => (
          <div key={index}>
            <label>Question Type</label>
            <select
              value={input.type}
              name="type"
              onChange={(e) => {
                handleFormChange(index, e);
              }}
            >
              {types.map((type) => (
                <option value={type}>{type}</option>
              ))}
            </select>
            <br />
            <label>Question: </label>
            <input
              type="text"
              name="question"
              value={input.question}
              onChange={(e) => {
                handleFormChange(index, e);
              }}
            />
            <br />
            {(input.type === "dropDown" || input.type === "radio") && (
              <div>
                <span>Choices: </span>
                <input
                  type={"text"}
                  name="currentChoice"
                  onChange={(e) => {
                    handleFormChange(index, e);
                  }}
                />
                <br />
                <button
                  type="button"
                  onClick={() => {
                    handleChoiceAdd(index, input.currentChoice);
                  }}
                >
                  Add Choice
                </button>
                {input.choices.map((choice) => {
                  return <div>{choice}</div>;
                })}
              </div>
            )}
          </div>
        ))}
        <Button btn_name="+" btn_func={addQuestion} />
      </form>
    </div>
  );
};

export default Specifications;
