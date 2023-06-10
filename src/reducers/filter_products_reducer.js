import { LOAD_PRODUCTS, SET_GRID, SET_LIST, UPDATE_SORT } from "../action";
const filterProductsReducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      filtered_products: [...action.payload],
      all_products: [...action.payload],
    };
  }
  if (action.type === SET_GRID) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LIST) {
    return { ...state, grid_view: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  throw new Error(`no action type matching ${action.type}`);
};

export default filterProductsReducer;