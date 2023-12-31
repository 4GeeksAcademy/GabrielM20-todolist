import React, { useEffect, useState } from "react";


function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  function handleInput(event) {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    } else {
      alert("El campo no puede estar vacío");
    }
  }

  function handleRemoveItem(index) {
    const newTodos = todos.filter((_, currentIndex) => currentIndex !== index);
    setTodos(newTodos);
  }

  useEffect(() => {
    const getTodo = async () => {
      let url = "https://playground.4geeks.com/apis/fake/todos/user/";
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          setTodos(data);
        } else {
          console.log("Error", response.status, response.statusText);
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    getTodo();

  }, []);

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
                handleInput(e);
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
                handleRemoveItem(index);
              }}
            ></i>
          </li>
        ))}
      </ul>
      <div>{todos.length} items</div>
    </div>
  );
}

export default Todo;