const initialState = {
  data: [],
  error: "",
  fetching: false,
};

export function products(state = initialState, action) {
  switch (action.type) {
    case "PRODUCTS_REQUEST_START":
      return {
        ...state,
        fetching: true,
      };
    case "PRODUCTS_REQUEST_SUCCESS":
      return {
        ...state,
        fetching: false,
        data: action.payload,
      };
    case "PRODUCTS_REQUEST_FAILURE":
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}
