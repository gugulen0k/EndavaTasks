import React from "react";
import "./Todo.css";

// Import images
import trash from "../images/trash.svg";
import checked from "../images/checked.svg";

const Todo = ({ text, todo, todos, setTodos }) => {
  // Events
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <li className={`${todo.completed ? "completed-li" : ""}`}>
      <span className={`${todo.completed ? "completed" : ""}`}>{text}</span>
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
