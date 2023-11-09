import Notification from "./Notification";

export default function NotificationList({
  notifications,
  handleReadAll,
  unreadNote,
}) {
  return (
    <div className="notification-list">
      <div className="title-card">
        <div className="title-container">
          <h2>Notifications</h2>
          <h3>{unreadNote}</h3>
        </div>
        <button className="mark-all" onClick={handleReadAll}>
          Mark all as read
        </button>
      </div>

      <ul className="notifications">
        {notifications.map((note) => {
          return <Notification key={note.data.name} notification={note} />;
        })}
      </ul>
    </div>
  );
}
