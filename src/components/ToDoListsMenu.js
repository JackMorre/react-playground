import MenuCard from "./MenuCard";

export default function ToDoListsMenu({ onCardClick, fakeList }) {
  return (
    <div className="container menu">
      <h1>My Lists!</h1>
      {fakeList.map((list) => {
        return <MenuCard key={list.id} onCardClick={onCardClick} list={list} />;
      })}
    </div>
  );
}
