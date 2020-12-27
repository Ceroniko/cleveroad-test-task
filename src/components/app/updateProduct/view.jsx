import React, { useState } from "react";
import { Form, Input, InputNumber, Button, DatePicker, message } from "antd";
import { ImgUpload } from "../imgUpload";
import app from "../../../firebase/base";
import moment from "moment";

const View = ({ history, id, data, imgUrl }) => {
  const [imageLink, setImageLink] = useState(data.photo);

  const handleUpdateProducts = async (values) => {
    if (imageLink) {
      let db = app.firestore();
      await db
        .collection("products")
        .doc(id)
        .set({
          title: values.title,
          description: values.description || null,
          price: values.price,
          discount: values.discount || null,
          canceldate: values.canceldate?._d || null,
          photo: imageLink,
        });
      history.push("/products");
    } else {
      message.error("Загрузите картинку");
    }
  };

  return (
    <div style={{ width: "700px" }}>
      <Form onFinish={handleUpdateProducts}>
        <Form.Item
          name="title"
          required
          initialValue={data.title}
          rules={[
            {
              required: true,
              message: "Требуется заполнить поле заголовка",
            },
            {
              min: 20,
              message: "Заголовок должен содержать не менее 20 символов",
            },
            {
              max: 60,
              message: "Заголовок должен содержать не более 60 символов",
            },
          ]}
        >
          <Input placeholder="Заголовок" />
        </Form.Item>
        <Form.Item
          name="description"
          initialValue={data.description}
          rules={[
            {
              max: 200,
              message: "Заголовок должен содержать не более 200 символов",
            },
          ]}
        >
          <Input.TextArea placeholder="Описание товара" />
        </Form.Item>
        <Form.Item
          name="price"
          required
          initialValue={data.price}
          rules={[
            {
              required: true,
              message: "Требуется заполнить поле цены",
            },
            {
              type: "number",
              max: 99999999.99,
              message: "Цена должна быть не более 99999999.99",
            },
            {
              type: "number",
              min: 0,
              message: "Цена не должна быть отрицательным числом",
            },
          ]}
        >
          <InputNumber style={{ width: "700px" }} placeholder="Цена товара" />
        </Form.Item>
        <Form.Item
          name="discount"
          initialValue={data.discount}
          rules={[
            {
              type: "number",
              max: 90,
              message: "Скидка должна быть не более 90%",
            },
            {
              type: "number",
              min: 10,
              message: "Скидка должна быть не менее 10%",
            },
          ]}
        >
          <InputNumber style={{ width: "700px" }} placeholder="Скидка" />
        </Form.Item>
        <Form.Item
          name="canceldate"
          dependencies={["discount"]}
          initialValue={
            data.canceldate ? moment(data.canceldate.seconds * 1000) : null
          }
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (getFieldValue("discount") && value) {
                  if (new Date(value._d) <= Date.now()) {
                    return Promise.reject(
                      "Дата должна быть больше текущей даты"
                    );
                  }
                  return Promise.resolve();
                } else if (!getFieldValue("discount") && value) {
                  return Promise.reject("Сначала введите скидку");
                } else if (!getFieldValue("discount") && !value) {
                  return Promise.resolve();
                }
                Promise.resolve();
              },
            }),
          ]}
        >
          <DatePicker
            style={{ width: "700px" }}
            placeholder="Дата окончания скидки"
          />
        </Form.Item>
        <ImgUpload photo={imgUrl} setImageLink={setImageLink} />
        <Form.Item>
          <Button style={{ width: "700px" }} type="primary" htmlType="submit">
            Обновить товар
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export { View };
