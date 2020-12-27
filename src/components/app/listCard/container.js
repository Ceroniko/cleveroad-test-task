import { compose } from "redux";
import { connect } from "react-redux";
import { View } from "./view";
import { requestProducts } from "../../../store/app/actions";

const mapStateToProps = (state) => {
  return {
    data: state.products.data,
    fetching: state.products.fetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchProducts: () => {
      dispatch(requestProducts());
    },
  };
};

const ListCard = compose(connect(mapStateToProps, mapDispatchToProps))(View);

export { ListCard };
