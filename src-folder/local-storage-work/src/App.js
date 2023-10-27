import { useState } from "react";

export default function App() {
  const [inputNumber, setInputNumber] = useState("");
  const [listOfNumbers, setListOfNumbers] = useState([]);

  function changeInputText({ target }) {
    setInputNumber(Number(target.value));
  }

  function updateList() {
    if (listOfNumbers.length === 0) {
      const newList = [inputNumber];
      setListOfNumbers(newList);
      localStorage.setItem("listItem", JSON.stringify(newList));
      setInputNumber("");
    } else {
      const storedNumbers = JSON.parse(localStorage.getItem("listItem"));
      console.log(storedNumbers, inputNumber);
      const newList = [inputNumber, ...storedNumbers];
      console.log(newList);
      setListOfNumbers(newList);
      localStorage.setItem("listItem", JSON.stringify(newList));
      setInputNumber("");
    }
  }
  return (
    <div>
      {/* create an app tha adds nums to the page, you add the with an input and a submit button. Each button added is also added to local storage. */}
      <input type="text" value={inputNumber} onChange={changeInputText}></input>
      <button onClick={updateList}>submit</button>

      <ul>
        {listOfNumbers < 1 ? (
          <li>Please add a number!</li>
        ) : (
          listOfNumbers.map((num) => {
            return <li key={num}>{num}</li>;
          })
        )}
      </ul>
    </div>
  );
}
