import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import { StarRating } from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Very Bad", "Not Good", "Okay", "Good", "Brilliant"]}
    />
    <StarRating color="green" size={32} className="test" defaultRating={3} />
  </React.StrictMode>
);
