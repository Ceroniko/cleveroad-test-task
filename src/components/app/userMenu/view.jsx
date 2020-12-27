import "./style.scss";
import React from "react";
import { Button, Typography } from "antd";
import app from "../../../firebase/base";

const View = () => {
  return (
    <div className={"user_menu"}>
      <Typography.Paragraph style={{ margin: "0 5px" }}>
        Hello User
      </Typography.Paragraph>
      <Button
        onClick={() => {
          app.auth().signOut();
        }}
      >
        Sign out
      </Button>
    </div>
  );
};

export { View };
