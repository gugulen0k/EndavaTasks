import React, {
  useState,
  useEffect,
  useReducer,
  createContext,
  useCallback,
} from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import reducer from "./components/reducer";

export const StateContext = createContext();
export const DispatchContext = createContext();

function App() {
  const [inputText, setInputText] = useState("");
  const [filter, setFilter] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("todos"))
  );

  // Functions
  const filterHandler = () => {
    switch (filter) {
      case "Completed":
        setFilteredTodos(state.filter((todo) => todo.completed === true));
        break;
      case "Uncompleted":
        setFilteredTodos(state.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(state);
        break;
    }
  };

  // Save to local storage
  const saveLocalTodos = () => {
    if (state === null) localStorage.setItem("todos", JSON.stringify([]));
    else localStorage.setItem("todos", JSON.stringify(state));
  };

  const getLocalTodos = useCallback(() => {
    console.log("object");
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      dispatch(todoLocal);
    }
  }, [state]);

  useEffect(() => getLocalTodos(), [getLocalTodos]);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [state, filter]);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <Form
            setInputText={setInputText}
            inputText={inputText}
            // state={state}
            // dispatch={dispatch}
            setFilter={setFilter}
          />
          <TodoList
            // state={state}
            // dispatch={dispatch}
            filteredTodos={filteredTodos}
          />
        </DispatchContext.Provider>
      </StateContext.Provider>
    </div>
  );
}

export default App;
