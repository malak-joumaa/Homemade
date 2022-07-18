import { useState } from "react";
import Button from "./Button";

const Specifications = ({ question, setQuestion, dishIndex }) => {
  const types = ["dropDown", "checkBox", "textBox", "radio"];

  //Change Input Values on change according index
  const handleFormChange = (index, event, dishIndex) => {
    let data = [...question[dishIndex]];
    data[index][event.target.name] = event.target.value;
    let data2 = [...question];
    data2[dishIndex] = data;
    setQuestion(data2);
  };

  //Add a new question field
  const addQuestion = () => {
    let newQuestion = {
      question: "",
      type: "textBox",
      choices: [],
      currentChoice: "",
    };
    let data = [...question[dishIndex]];
    data.push(newQuestion);
    let data2 = [...question];
    data2[dishIndex] = data;
    setQuestion(data2);
  };

  //Add New choices to a question
  const handleAddChoice = (index, newChoice) => {
    let data = [...question[dishIndex]];
    data[index].choices.push(newChoice);
    let data2 = [...question];
    data2[dishIndex] = data;
    setQuestion(data2);
  };
  return (
    <div className="container">
      <form>
        {question[dishIndex].map((input, index) => (
          <div key={index}>
            <label>Question Type</label>
            <select
              value={input.type}
              name="type"
              onChange={(e) => {
                handleFormChange(index, e, dishIndex);
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
                handleFormChange(index, e, dishIndex);
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
                    handleFormChange(index, e, dishIndex);
                  }}
                />
                <br />
                <button
                  type="button"
                  onClick={() => {
                    handleAddChoice(index, input.currentChoice);
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
