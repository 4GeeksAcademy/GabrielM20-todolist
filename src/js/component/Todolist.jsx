import React, { useState } from "react";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h1>Todo List</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setTodos([...todos, inputValue]);
                setInputValue("");
              }
            }}
            placeholder="What do you need to do?"
          />
        </li>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <i
              className="fa solid fa-trash"
              onClick={() => {
                const newTodos = todos.filter((_, currentIndex) => currentIndex !== index);
                setTodos(newTodos);
              }}
            ></i>
          </li>
        ))}
      </ul>
      <div>{todos.length} items</div>
    </div>
  );
};

export default Todo;
