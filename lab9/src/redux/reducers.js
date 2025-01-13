import { TOGGLE_LIKED, SET_PRODUCTS, SET_LIKED_PRODUCTS } from "./actions";

const initialState = {
  products: {},
  likedProducts: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LIKED:
      return {
        ...state,
        likedProducts: state.likedProducts.includes(action.payload)
          ? state.likedProducts.filter((id) => id !== action.payload)
          : [...state.likedProducts, action.payload],
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SET_LIKED_PRODUCTS:
      return {
        ...state,
        likedProducts: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
