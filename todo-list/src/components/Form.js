import React from "react";
import Select from "react-select";
import _ from "lodash";
import "./Form.css";
import plusIcon from "../images/add.svg";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "Uncompleted", label: "Uncompleted" },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "black" : "black",
  }),
  input: () => ({
    background: "transparent",
    height: "40px",
    width: "150px",
  }),
};

const Form = ({ inputText, setInputText, todos, setTodos, setFilter }) => {
  const inputTextHandler = (e) => setInputText(e.target.value);
  const filterHandler = (e) => setFilter(e.value);

  const submitTodoHandler = (e) => {
    e.preventDefault();

    if (inputText.length !== 0) {
      setTodos([
        ...todos,
        {
          id: parseInt(_.uniqueId()),
          text: inputText,
          completed: false,
        },
      ]);
      setInputText("");
    }
  };


  return (
    <form>
      <div className="btn-group">
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button
          className="add-button"
          type="submit"
          onClick={submitTodoHandler}
        >
          <img src={plusIcon} alt="" />
        </button>
      </div>
      <Select
        onChange={filterHandler}
        defaultValue={{ label: "All", value: 0 }}
        className="select"
        backgroundColor="black"
        width="150px"
        styles={customStyles}
        options={options}
      />
    </form>
  );
};

export default Form;
