import {
  CLOSE_SIDEBAR,
  OPEN_SIDEBAR,
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from "../action";
const productsReducer = (state, action) => {
  if (action.type === OPEN_SIDEBAR) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === CLOSE_SIDEBAR) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === FETCH_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }
  if (action.type === FETCH_PRODUCTS_SUCCESS) {
    const featured_products = action.payload.filter(
      ({ featured }) => featured === true
    );
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products,
    };
  }
  if (action.type === FETCH_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }
};

export default productsReducer;
