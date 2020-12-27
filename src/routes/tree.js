import {
  PageHome,
  PageSignUp,
  PageSignIn,
  PageListCard,
  PageAddProduct,
  PageUpdateProduct,
} from "../pages";

const routes = {
  home: {
    path: "/",
    page: PageHome,
    name: "Home",
    link() {
      return this.path;
    },
    exact: true,
    private: false,
  },
  signin: {
    path: "/signin",
    page: PageSignIn,
    name: "Sign In",
    link() {
      return this.path;
    },
    exact: true,
    private: false,
  },
  signup: {
    path: "/signup",
    page: PageSignUp,
    name: "Sign Up",
    link() {
      return this.path;
    },
    exact: true,
    private: false,
  },
  listcard: {
    path: "/products",
    page: PageListCard,
    name: "Products",
    link() {
      return this.path;
    },
    exact: true,
    private: true,
  },
  updateproduct: {
    path: "/products/:id",
    page: PageUpdateProduct,
    name: "Update Products",
    link() {
      return this.path;
    },
    exact: true,
    private: true,
  },
  addproduct: {
    path: "/addproduct",
    page: PageAddProduct,
    name: "Add Products",
    link() {
      return this.path;
    },
    exact: true,
    private: true,
  },
};

const __ROOT_ROUTE__ = routes.home.link();

export { routes, __ROOT_ROUTE__ };
