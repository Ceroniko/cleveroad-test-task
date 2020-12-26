import { reduxForm } from "redux-form";
import { View } from "./view";

const LoginForm = reduxForm({
  form: "login",
})(View);

export { LoginForm };
