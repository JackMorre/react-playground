export default function Notification({ notification }) {
  if (notification.type === "reactionPost") {
    return (
      <li className={`note ${!notification.read ? "unread" : ""}`}>
        <p className="note-info">
          <a href="">{notification.data.name}</a>
          {` reacted to your recent post on `}
          <a href="" className="last">
            {notification.data.post}
          </a>
        </p>
      </li>
    );
  }
  if (notification.type === "follow") {
    return (
      <li className={`note ${!notification.read ? "unread" : ""}`}>
        <div className="note-info last">
          <a href="">{notification.data.name}</a>
          <span className="last"> followed you</span>
        </div>
      </li>
    );
  }
  if (notification.type === "join") {
    return (
      <li className={`note ${!notification.read ? "unread" : ""}`}>
        <p className="note-info">
          <a href="">{notification.data.name}</a>
          {` joined `}
          <a href="" className="last">
            {notification.data.group}
          </a>
        </p>
      </li>
    );
  }
  if (notification.type === "pm") {
    return (
      <li className={`note ${!notification.read ? "unread" : ""}`}>
        <div className="note-info">
          <a href="">{notification.data.name}</a>
          <span> sent you a personal message.</span>
          <p className="last">{notification.data.message}</p>
        </div>
      </li>
    );
  }
  if (notification.type === "commentPhoto") {
    return (
      <li className={`note ${!notification.read ? "unread" : ""}`}>
        <div className="note-info">
          <a href="">{notification.data.name}</a>
          <span> commented on your photo.</span>
          <div className="last">
            <span>img</span>
          </div>
        </div>
      </li>
    );
  }
  if (notification.type === "left") {
    return (
      <li className={`note ${!notification.read ? "unread" : ""}`}>
        <p className="note-info">
          <a href="">{notification.data.name}</a>
          {` left your group `}
          <a href="" className="last">
            {notification.data.group}
          </a>
        </p>
      </li>
    );
  }
}
