import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [newArray, setNewArray] = useState([]);
  console.log(input);
  const array = [
    "apple",
    "banana",
    "orange",
    "pinapple",
    "grape",
    "black berry",
    "mosambi",
    "kiwi",
    "strawberry",
    "avacado"
  ];

  useEffect(() => {
    const filteredArray = array.filter((item) => item.includes(input));
    setNewArray(filteredArray);
  }, [input]);

  const listItems = newArray.map((item) => {
    return (
      <div>
        <ol>{item}</ol>
      </div>
    );
  });
  return (
    <div className="App">
      <h3>Search for a Fruit</h3>
      <input
        type="text"
        value={input}
        id="input"
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <div>
        <ul>{listItems}</ul>
      </div>
    </div>
  );
}
