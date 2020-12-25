/** Build environment */
export const BUILD_ENV = process.env.NODE_ENV;
export const IS_DEVELOPMENT = BUILD_ENV === "development";
export const IS_PRODUCTION = BUILD_ENV === "production";

/** Permissions */
export const ALLOW_DEV_CONSOLE =
  process.env.REACT_APP_ALLOW_DEV_CONSOLE === "true";
export const ALLOW_REDUX_DEVTOOLS_EXTENSION =
  process.env.REACT_APP_ALLOW_REDUX_DEVTOOLS_EXTENSION === "true";
export const ALLOW_WINDOW_EXTENDS =
  process.env.REACT_APP_ALLOW_WINDOW_EXTENDS === "true";
