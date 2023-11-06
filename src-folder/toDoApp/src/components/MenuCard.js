import DeleteIcon from "@mui/icons-material/Delete";

export default function MenuCard({
  list,
  onCardClick,
  selected,
  onDeletingList,
  handleResetClicked,
}) {
  const isSelected = selected?.id === list.id;
  return (
    <li className={`card ${isSelected ? "selected" : ""}`}>
      <div
        className="text-container"
        onClick={() => {
          onCardClick(list);
          handleResetClicked();
        }}
      >
        <h3>{list.title}</h3>
        <p className="listAmount">{list.list.length}</p>
      </div>
      <button
        onClick={() => {
          onDeletingList(list);
        }}
      >
        <DeleteIcon sx={{ fill: "#9b90d5" }} />
      </button>
    </li>
  );
}
