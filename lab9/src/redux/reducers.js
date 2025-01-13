import { TOGGLE_LIKED } from "./actions";
import productsData from "../data";

const initialState = {
	products: productsData,
	likedProducts: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_LIKED:
			const productId = action.payload;
			const isLiked = state.likedProducts.includes(productId);
			const likedProducts = isLiked
				? state.likedProducts.filter((id) => id !== productId) // remember - filter creates a new array
				: [...state.likedProducts, productId];
			return {
				...state,
				likedProducts,
			};
		default:
			return state;
	}
};

export default rootReducer;
