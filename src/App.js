import React, { useState } from "react";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoText === "") {
      alert("This can not be empty");
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      isDone: false,
      text: todoText,
      date: new Date(),
    };
    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="container">
      <h1 className="my-5 text-center">TodoApp</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            value={todoText}
            onChange={(event) => setTodoText(event.target.value)}
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <button type="submit" className="btn btn-success" id="basic-addon2">
            Save
          </button>
        </div>
      </form>
      {todos.length <= 0 ? (
        <div>
          <p>You dont have any todos yet</p>
        </div>
      ) : (
        <div>
          {todos.map((item) => (
            <div class="alert alert-secondary" role="alert">
              {item.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default App;
