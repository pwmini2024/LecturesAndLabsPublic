export const TOGGLE_LIKED = "TOGGLE_LIKED";

export const toggleLiked = (productId) => ({
	type: TOGGLE_LIKED,
	payload: productId,
});
