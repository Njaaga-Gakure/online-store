import {
  LOAD_PRODUCTS,
  SET_GRID,
  SET_LIST,
  SORT_PRODUCTS,
  UPDATE_SORT,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../action";
const filterProductsReducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((product) => product.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      filtered_products: [...action.payload],
      all_products: [...action.payload],
      filters: {
        ...state.filters,
        price: maxPrice,
        max_price: maxPrice,
      },
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
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let newProducts = [...filtered_products];
    if (sort === "price-asc") {
      newProducts = newProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-desc") {
      newProducts = newProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      newProducts = newProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === "name-z") {
      newProducts = newProducts.sort((a, b) => b.name.localeCompare(a.name));
    }
    return { ...state, filtered_products: newProducts };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_PRODUCTS) {
    return { ...state };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        color: "all",
        price: state.filters.max_price,
      },
    };
  }
  throw new Error(`no action type matching ${action.type}`);
};

export default filterProductsReducer;
