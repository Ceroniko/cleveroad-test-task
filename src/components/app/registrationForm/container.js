import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { View } from "./view";

const mapStateToProps = (state) => {
  return {
    registration: state.form.registration,
  };
};

const RegistrationForm = compose(
  connect(mapStateToProps, null),
  reduxForm({
    form: "registration",
  })
)(View);

export { RegistrationForm };
