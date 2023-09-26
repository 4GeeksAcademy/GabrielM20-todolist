import React, { useEffect, useState } from "react";


function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  function handleInput(event) {
    event.preventDefault();
    if (inputValue.trim() !== "") {

      let newTask = {label: inputValue, done: false}
      let newlist = [...list, newTask]
      console.log(newlist);
      putTodo(newlist);
      setList(newlist);
      setTodos([...todos, inputValue]);
      
      // grabar nueva tarea en la api
      // const nuevaTarea = {tarea: inputValue};
      //putTodo(nuevaTarea)
      setInputValue("");

    } else {
      alert("campo vacío");
    }
  }

  function handleRemoveItem(index) {
    const newTodos = todos.filter((_, currentIndex) => currentIndex !== index);
    setTodos(newTodos);
  }
  const getTodo = async () => {
    let user = "GabrielM20";
    let url = "https://playground.4geeks.com/apis/fake/todos/user/" + user;
   
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
  useEffect(() => {

    getTodo();

  }, []);
  

  const putTodo = async (listPut) => {
    let url = "https://playground.4geeks.com/apis/fake/todos/user/GabrielM20"
    let options = {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(listPut), 
    };
  
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const putTodo = await response.json();
        console.log( putTodo);
      } else {
        console.log("error", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud PUT:", error);
    }
  };
  

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
            {item.label ||item }
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