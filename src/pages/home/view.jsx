import React from "react";
import app from "../../firebase/base";

const View = (props) => {
  React.useEffect(() => {
    const fetchData = async () => {
      const db = app.firestore();
      const data = await db.collection("products").get();
      console.log(data.docs.map((doc) => ({ ...doc.data() })));

      db.collection("products").add({
        title: "Apple iphone",
      });
    };
    fetchData();
  }, []);

  return <div>HomePage</div>;
};

export { View };
