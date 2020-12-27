import React, { useState } from "react";
import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import app from "../../../firebase/base";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function addImg(file) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = function () {
      let sizes = {
        width: this.width,
        height: this.height,
      };
      URL.revokeObjectURL(this.src);
      resolve(sizes);
    };
    img.onerror = reject;
    let objectURL = URL.createObjectURL(file);
    img.src = objectURL;
  });
}

async function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  let isWidthRight = false,
    isHeightRight = false;
  if (!isJpgOrPng) {
    message.error("Вы можете загрузить только JPG/PNG файлы");
  }

  const sizes = await addImg(file);

  isWidthRight = sizes.width >= 200 && sizes.width <= 4000;
  isHeightRight = sizes.height >= 200 && sizes.height <= 4000;
  if (!isHeightRight) {
    message.error("Высота картинки должна быть от 200 до 4000 пикселей");
  }

  if (!isWidthRight) {
    message.error("Ширина картинки должна быть от 200 до 4000 пикселей");
  }
  return isJpgOrPng && isWidthRight && isHeightRight
    ? Promise.resolve()
    : Promise.reject();
}

const View = ({ setImageLink, ...rest }) => {
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState(rest.photo);

  const customUpload = async ({ onError, onSuccess, file }) => {
    const storage = app.storage();
    const metadata = {
      contentType: file.type,
    };
    const storageRef = await storage.ref();

    const imgFile = storageRef.child(file.name);
    try {
      const image = await imgFile.put(file, metadata);
      setImageLink(image.metadata.fullPath);
      onSuccess(null, image);
    } catch (e) {
      onError(e);
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Загрузить</div>
    </div>
  );

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setLoading(false);
        setImageURL(imageUrl);
      });
    }
  };

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      showUploadList={false}
      beforeUpload={beforeUpload}
      onChange={handleChange}
      customRequest={customUpload}
    >
      {imageURL || rest.photo ? (
        <img
          src={imageURL || rest.photo}
          alt={"products"}
          style={{ width: "100%" }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};

export { View };
