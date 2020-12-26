import { reduxForm } from "redux-form";
import { View } from "./view";

const RegistrationForm = reduxForm({
  form: "registration",
})(View);

export { RegistrationForm };
