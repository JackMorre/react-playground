export default function MenuCard({ list, onCardClick }) {
  return (
    <div
      className="card"
      onClick={() => {
        onCardClick(list);
      }}
    >
      <div className="text-container">
        <h3>{list.title}</h3>
        <p>items: {list.length}</p>
      </div>
      <button>Delete</button>
    </div>
  );
}
