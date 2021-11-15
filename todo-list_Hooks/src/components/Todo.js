import React, { useContext } from "react";
import "./Todo.css";

// Import images
import trash from "../images/trash.svg";
import checked from "../images/checked.svg";
import { DispatchContext, StateContext } from "../App";

const Todo = ({ todo }) => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const taskExists = (value) => state.some((item) => value === item.text);

  const deleteHandler = () => {
    dispatch({ type: "remove", payload: todo });
  };

  const editHandler = () => {
    const newValue = prompt("Enter the new title for this task");
    if (taskExists(newValue)) {
      alert("Task already exists");
    } else {
      if (newValue === null) return;
      else if (newValue.length === 0) {
        alert("Name should contain at least 1 character");
      } else {
        dispatch({ type: "edit", payload: { newValue, todo } });
      }
    }
  };

  const completeHandler = () => {
    dispatch({ type: "complete", payload: todo });
  };

  return (
    <li className={`${todo.completed ? "completed-li" : ""}`}>
      <div className="todo-title-box">
        <span
          className={`todo-title ${todo.completed ? "completed" : ""}`}
          onClick={editHandler}
        >
          {todo.text}
        </span>
      </div>
      <div className="interaction">
        <button onClick={completeHandler} className="checked">
          <img src={checked} alt="" />
        </button>
        <button onClick={deleteHandler} className="trash">
          <img src={trash} alt="" />
        </button>
      </div>
    </li>
  );
};

export default Todo;
