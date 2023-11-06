import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ToDoList({
  list,
  onHandleUpdateList,
  onAddingToList,
  clicked,
  setClicked,
  handleResetClicked,
}) {
  const [listItem, setListItem] = useState("");
  const [newItem, setNewItem] = useState("");

  function handleClickText(item) {
    setClicked(item);
    setListItem(item.item);
  }

  function handleTextChange({ target }) {
    setListItem(target.value);
    const newObject = { id: clicked.id, item: target.value };
    setClicked(newObject);
  }

  function handleNewInput({ target }) {
    setNewItem(target.value);
  }

  return (
    <div className="container list">
      <h2 className="title">{list.title}</h2>
      <ul className="listItems">
        {list.list.map((item) => {
          return (
            <div className="listItem">
              {" "}
              <input
                type="text"
                key={item.id}
                value={item.id === clicked.id ? listItem : item.item}
                onChange={(e) => {
                  if (item.id === clicked.id) {
                    handleTextChange(e);
                  }
                }}
                onBlur={() => {
                  onHandleUpdateList(clicked);
                  setClicked("");
                }}
                onClick={() => {
                  handleClickText(item);
                }}
              ></input>
              {/* {item.id === clicked.id ? (
                <DeleteIcon
                  className="deleteIcon"
                  key={item.id}
                  sx={{ fill: "#9b90d5" }}
                />
              ) : null} */}
              <DeleteIcon
                className={`deleteIcon 
                  ${item.id === clicked.id ? "visable" : ""}
                 `}
                key={item}
                sx={{ fill: "#9b90d5" }}
              />
            </div>
          );
        })}
        <input
          type="text"
          placeholder="Add new item!"
          value={newItem}
          onChange={(e) => {
            handleNewInput(e);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onAddingToList(newItem);
              setNewItem("");
            }
          }}
          onFocus={handleResetClicked}
        ></input>
      </ul>
    </div>
  );
}
