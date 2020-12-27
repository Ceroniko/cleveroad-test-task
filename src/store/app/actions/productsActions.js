import app from "../../../firebase/base";

export const requestProducts = () => {
  return (dispatch) => {
    dispatch(requestStart());
    app
      .firestore()
      .collection("products")
      .get()
      .then((data) => data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      .then((payload) => dispatch(requestSuccess(payload)))
      .catch((error) => dispatch(requestFailure(error)));
  };
};

export const requestStart = () => {
  return { type: "PRODUCTS_REQUEST_START" };
};

export const requestSuccess = (payload) => {
  return { type: "PRODUCTS_REQUEST_SUCCESS", payload };
};

export const requestFailure = (error) => {
  return { type: "PRODUCTS_REQUEST_FAILURE", error };
};
