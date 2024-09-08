import React, { useState } from "react";
import "./styles.css";

function App() {
  const [item, setItem] = useState("");
  const [list, setListItem] = useState(["apple", "orange"]);

  function btnClicked() {
    if (item.trim() !== "") {
      setListItem([...list, item]);
      setItem(""); 
    }
  }

  function textInput(e) {
    setItem(e.target.value);
  }

  function deleteItem(index) {
    const newList = list.filter((_, i) => i !== index);
    setListItem(newList);
  }

  return (
    <div>
      <h1>Todo List:</h1>
      <input type="text" onChange={textInput} value={item} placeholder="Enter your Item" />
      <button onClick={btnClicked}>Add</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button className="delete-button" onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;