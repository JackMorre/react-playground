import MenuCard from "./MenuCard";

export default function ToDoListsMenu({
  onCardClick,
  fakeList,
  selected,
  onDeletingList,
  onAddingNewList,
  handleResetClicked,
  newListText,
  setNewListText,
}) {
  function handleChangeText({ target }) {
    setNewListText(target.value);
  }

  return (
    <div className="container menu">
      <h1 className="">Hello, User!</h1>
      {fakeList.length !== 0 ? (
        <h2>Here are your lists</h2>
      ) : (
        <h2>No lists yet</h2>
      )}
      <ul className="mainList">
        {fakeList.map((list) => {
          return (
            <MenuCard
              key={list.id}
              onCardClick={onCardClick}
              list={list}
              selected={selected}
              onDeletingList={onDeletingList}
              handleResetClicked={handleResetClicked}
            />
          );
        })}
        <li>
          {" "}
          <input
            type="text"
            placeholder="Add New List"
            value={newListText}
            onChange={(e) => {
              handleChangeText(e);
            }}
            onKeyDown={(e) => {
              onAddingNewList(e, newListText);
            }}
          />
        </li>
      </ul>
    </div>
  );
}
