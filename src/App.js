import React from "react";
import "./styles.css";

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

function AddTodo({ setTodos }) {
  const inputRef = React.useRef();

  function handleAddTodo(event) {
    event.preventDefault();
    const text = event.target.elements.addTodo.value;
    const todo = {
      id: 4,
      text,
      done: false
    };
    setTodos((prevTodos) => {
      return prevTodos.concat(todo);
    });
    inputRef.current.value = "";
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input name="addTodo" placeholder="Add Todo" ref={inputRef} />
      <button type="submit">do it</button>
    </form>
  );
}

export default function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: "wash dishes", done: false },
    { id: 2, text: "wash clothes", done: false },
    { id: 3, text: "wash meatsuit", done: false }
  ]);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todos={todos} />
      <AddTodo setTodos={setTodos} />
    </div>
  );
}
