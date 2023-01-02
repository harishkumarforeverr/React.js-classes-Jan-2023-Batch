import React, { useState } from "react";

const Conditions = () => {
  const [view, setView] = useState("small"); 
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setView("small");
          }}
        >
          Small
        </button>
        <button
          onClick={() => {
            setView("big");
          }}
        >
          big
        </button>
      </div>
      {view === "small" && (
        <div
          className="divColor"
          style={{
            background: "red",
            width: "16rem",
            height: "15rem",
          }}
        >
          {" "}
          Small
        </div>
      )}
      {view === "big" && (
        <div
          className="divColor"
          style={{
            background: "green",
            width: "26rem",
            height: "25rem",
          }}
        >
          {" "}
          big
        </div>
      )}
    </div>
  );
};
export default Conditions;
