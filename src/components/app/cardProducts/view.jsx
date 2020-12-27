import React, { useState, useEffect } from "react";
import { Typography, Card, Button } from "antd";
import { NavLink } from "react-router-dom";
import app from "../../../firebase/base";

const { Paragraph } = Typography;

const View = (props) => {
  const [imgUrl, setImgUrl] = useState(null);
  useEffect(() => {
    const storage = app.storage();

    storage
      .ref(props.photo)
      .getDownloadURL()
      .then((url) => {
        setImgUrl(url);
      });
  }, []);

  const onDelete = async () => {
    const db = app.firestore();
    await db.collection("products").doc(props.id).delete();
    const storage = app.storage();
    await storage.ref(props.photo).delete();
    props.onChange();
  };

  return (
    <Card key={props.id} hoverable cover={<img alt={imgUrl} src={imgUrl} />}>
      <Card.Meta
        title={<Paragraph>{props.title}</Paragraph>}
        description={
          <div>
            <Paragraph>{props.description}</Paragraph>
            {props.discount &&
            new Date(props.canceldate.seconds * 1000) > Date.now() ? (
              <div>
                <Paragraph>Цена до скидки: {props.price}</Paragraph>
                <Paragraph>
                  Цена со скидкой:{" "}
                  {Math.floor(props.price * +("0." + (100 - props.discount)))}
                </Paragraph>
                <Paragraph>
                  Дата окончания скидки:{" "}
                  {new Date(
                    props.canceldate.seconds * 1000
                  ).toLocaleDateString()}
                </Paragraph>
              </div>
            ) : (
              <Paragraph>Цена {props.price}</Paragraph>
            )}
            <Button onClick={onDelete} style={{ width: "50%" }}>
              Удалить
            </Button>
            <NavLink to={`/products/${props.id}`}>
              <Button style={{ width: "50%" }}>Изменить</Button>
            </NavLink>
          </div>
        }
      />
    </Card>
  );
};

export { View };
