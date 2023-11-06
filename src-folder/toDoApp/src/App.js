import { useState } from "react";
import ToDoList from "./components/ToDoList";
import ToDoListsMenu from "./components/ToDoListsMenu";

const fakeList = [
  {
    id: 1,
    title: "stuff to do at home",
    list: [
      { id: 567, item: "walk the dog" },
      { id: 327, item: "walk the dog" },
      { id: 914, item: "walk the dog" },
      { id: 456, item: "walk the dog" },
      { id: 728, item: "walk the dog" },
      { id: 672, item: "walk the dog" },
    ],
  },
  {
    id: 2,
    title: "shopping list",
    list: [
      { id: 174, item: "walk the dog" },
      { id: 492, item: "walk the dog" },
      { id: 503, item: "walk the dog" },
      { id: 297, item: "walk the dog" },
      { id: 396, item: "walk the dog" },
      { id: 267, item: "walk the dog" },
    ],
  },
  {
    id: 3,
    title: "work",
    list: [
      { id: 2673, item: "walk the dog" },
      { id: 627, item: "walk the dog" },
      { id: 909, item: "walk the dog" },
      { id: 926, item: "walk the dog" },
      { id: 472, item: "walk the dog" },
      { id: 267, item: "walk the dog" },
    ],
  },
];

export default function App() {
  const [clicked, setClicked] = useState("");
  const [selected, setSelected] = useState(null);
  const [lists, setList] = useState(fakeList);
  const [newListText, setNewListText] = useState("");

  function handleSelectedList(list) {
    setSelected(list);
  }

  // function handleResetList() {
  //   setSelected(null);
  // }

  function handleResetClicked() {
    setClicked("");
  }

  function handleAddToList(addedItem) {
    const id = crypto.randomUUID();
    const newItem = { id, item: addedItem };
    const newList = [...selected.list, newItem];
    console.log(newList);

    const updatedList = lists.map((mainlist) => {
      if (mainlist.id === selected.id) {
        mainlist.list = newList;
        return mainlist;
      } else return mainlist;
    });

    setList(updatedList);
  }

  function handleUpdateList(newItem) {
    if (selected) {
      const newlist = selected.list.map((item) => {
        if (item.id === newItem.id) {
          return newItem;
        } else return item;
      });

      const updatedList = lists.map((mainlist) => {
        if (mainlist.id === selected.id) {
          mainlist.list = newlist;
          return mainlist;
        } else return mainlist;
      });

      setList(updatedList);
    }
  }

  function handleAddNewList(event, title) {
    if (event.key === "Enter") {
      if (!title) return;
      console.log(event.key, title);
      const id = crypto.randomUUID();
      const newObject = { id, title, list: [] };
      console.log(newObject);

      const newList = [...lists, newObject];

      setList(newList);
      handleSelectedList(newObject);
      setNewListText("");
    }
  }

  function handleDeleteList(deletedItem) {
    const newList = lists.filter((list) => {
      if (list.id === deletedItem.id) {
        return null;
      } else {
        return list;
      }
    });
    setSelected(null);
    setList(newList);
  }

  return (
    <main>
      {selected && (
        <ToDoList
          list={selected}
          onHandleUpdateList={handleUpdateList}
          onAddingToList={handleAddToList}
          clicked={clicked}
          setClicked={setClicked}
          handleResetClicked={handleResetClicked}
        />
      )}
      <ToDoListsMenu
        newListText={newListText}
        setNewListText={setNewListText}
        handleResetClicked={handleResetClicked}
        onCardClick={handleSelectedList}
        fakeList={lists}
        selected={selected}
        onDeletingList={handleDeleteList}
        onAddingNewList={handleAddNewList}
      />
    </main>
  );
}
