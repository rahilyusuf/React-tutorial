import AppName from "./componenets/AppName";
import AppTodo from "./componenets/AddTodo";
import TodoItem from "./componenets/TodoItem";
import TodoItem2 from "./componenets/TodoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-Container">
      <AppName></AppName>
      <AppTodo></AppTodo>
      <div className="items-container">
        <TodoItem></TodoItem>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;
