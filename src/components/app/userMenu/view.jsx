import React from "react";
import app from "../../../firebase/base";

const View = () => {
  return (
    <div>
      <p>Hello User</p>
      <button
        onClick={() => {
          app.auth().signOut();
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export { View };
