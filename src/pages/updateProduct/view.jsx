import React, { useState, useEffect } from "react";
import { UpdateProductsForm } from "../../components";
import { PageHeader, Typography, Spin } from "antd";
import app from "../../firebase/base";

const View = ({ history, match }) => {
  const [data, setData] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    const fetchDoc = async () => {
      const db = app.firestore();
      const res = await db.collection("products").doc(match.params.id).get();
      setData(res.data());
      const storage = app.storage();
      storage
        .ref(res.data().photo)
        .getDownloadURL()
        .then((url) => {
          setImgUrl(url);
        });
    };
    fetchDoc();
  }, []);

  return (
    <div className="wrapper">
      <PageHeader
        onBack={history.goBack}
        title={
          <Typography.Title level={3}>
            Страница добавления товара
          </Typography.Title>
        }
      />
      {data ? (
        <UpdateProductsForm
          history={history}
          id={match.params.id}
          data={data}
          imgUrl={imgUrl}
        />
      ) : (
        <Spin />
      )}
    </div>
  );
};

export { View };
