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
export const HISTORY_BASENAME = process.env.REACT_APP_HISTORY_BASENAME || "/";

export const FIREBASE_KEY = process.env.REACT_APP_FIREBASE_KEY;
export const FIREBASE_DOMAIN = process.env.REACT_APP_FIREBASE_DOMAIN;
export const FIREBASE_DATABASE = process.env.REACT_APP_FIREBASE_DATABASE;
export const FIREBASE_PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID;
export const FIREBASE_STORAGE_BUCKET =
  process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
export const FIREBASE_SENDER_ID = process.env.REACT_APP_FIREBASE_SENDER_ID;
console.log(process.env);
