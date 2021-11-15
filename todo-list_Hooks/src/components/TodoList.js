import React, { useContext } from "react";
import { DispatchContext, StateContext } from "../App";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = ({ filteredTodos }) => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo dispatch={dispatch} todo={todo} state={state} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
