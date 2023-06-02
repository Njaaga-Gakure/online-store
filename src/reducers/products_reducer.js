import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "../action";
const productsReducer = (state, action) => {
  if (action.type === OPEN_SIDEBAR) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === CLOSE_SIDEBAR) {
    return { ...state, isSidebarOpen: false };
  }
};

export default productsReducer;
