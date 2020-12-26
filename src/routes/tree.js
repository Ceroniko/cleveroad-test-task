import { PageHome, PageSignUp, PageSignIn } from "../pages";

const routes = {
  home: {
    path: "/",
    page: PageHome,
    name: "Home",
    link() {
      return this.path;
    },
    exact: true,
  },
  signin: {
    path: "/signin",
    page: PageSignIn,
    name: "Sign In",
    link() {
      return this.path;
    },
    exact: true,
  },
  signup: {
    path: "/signup",
    page: PageSignUp,
    name: "Sign Up",
    link() {
      return this.path;
    },
    exact: true,
  },
};

const __ROOT_ROUTE__ = routes.home.link();

export { routes, __ROOT_ROUTE__ };
