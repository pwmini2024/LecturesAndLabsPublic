export const TOGGLE_LIKED = "TOGGLE_LIKED";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_LIKED_PRODUCTS = "SET_LIKED_PRODUCTS";

export const toggleLiked = (productId) => ({
  type: TOGGLE_LIKED,
  payload: productId,
});

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const setLikedProducts = (likedProducts) => ({
  type: SET_LIKED_PRODUCTS,
  payload: likedProducts,
});
