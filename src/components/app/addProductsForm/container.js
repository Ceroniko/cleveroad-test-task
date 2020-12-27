import { compose } from "redux";
import { connect } from "react-redux";
import { View } from "./view";
import { requestProducts } from "../../../store/app/actions";

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchProducts: () => {
      dispatch(requestProducts());
    },
  };
};

const AddProductsForm = compose(connect(mapStateToProps, mapDispatchToProps))(
  View
);

export { AddProductsForm };
