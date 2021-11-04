import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Functions
  const filterHandler = () => {
    switch (filter) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "Uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // Save to local storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null)
      localStorage.setItem("todos", JSON.stringify([]));
    else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  useEffect(() => getLocalTodos(), []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, filter]);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setFilter={setFilter}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
