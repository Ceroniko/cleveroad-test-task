

const routes = {
    home: {
        path: "/",
        page,
        name: "Home",
        link() {
            return this.path;
        },
        exact: true
    }
}

const __ROOT_ROUTE__ = routes.home.link();

export { routes, __ROOT_ROUTE__ };
