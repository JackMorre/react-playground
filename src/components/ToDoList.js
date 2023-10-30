import { useState } from "react";

export default function ToDoList({ list, onHandleUpdateList, onAddingToList }) {
  const [clicked, setClicked] = useState("");
  const [listItem, setListItem] = useState("");
  const [newItem, setNewItem] = useState("Add new item");

  function handleClickText(item) {
    setClicked(item);
    setListItem(item.item);
  }

  function handleTextChange({ target }) {
    // console.log(clicked, listItem);
    setListItem(target.value);
    const newObject = { id: clicked.id, item: target.value };
    setClicked(newObject);
  }

  function handleNewInput({ target }) {
    setNewItem(target.value);
  }

  return (
    <div className="container list">
      <h2>{list.title}</h2>
      <ul>
        {list.list.map((item) => {
          return clicked.id === item.id ? (
            <input
              key={item}
              value={listItem}
              onChange={(e) => {
                handleTextChange(e);
              }}
              onBlur={() => {
                onHandleUpdateList(clicked);
                setClicked("");
              }}
            ></input>
          ) : (
            <li
              onClick={() => {
                handleClickText(item);
              }}
              key={item.id}
            >
              {item.item}
            </li>
          );
        })}
        <input
          value={newItem}
          onChange={(e) => {
            handleNewInput(e);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onAddingToList(newItem);
            }
          }}
        ></input>
      </ul>
    </div>
  );
}
