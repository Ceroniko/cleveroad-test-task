import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { View } from "./view";

const mapStateToProps = (state) => {
  return {
    login: state.form.login,
  };
};

const LoginForm = compose(
  connect(mapStateToProps, null),
  reduxForm({
    form: "login",
  })
)(View);

export { LoginForm };
