import { useSelector, useDispatch } from "react-redux";
import { toggleLiked } from "./redux/actions";

const ProductListItem = ({ product }) => {
	const likedProducts = useSelector((state) => state.likedProducts);
	const dispatch = useDispatch();
	const isLiked = likedProducts.includes(product.id);

	const handleToggleLike = async (productId) => {
    // First update the UI through Redux
    dispatch(toggleLiked(productId));

    // Then persist to the server
    const updatedLikedProducts = isLiked
      ? likedProducts.filter((id) => id !== productId)
      : [...likedProducts, productId];

    try {
      await fetch("http://localhost:3001/likes/default", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productIds: updatedLikedProducts,
        }),
      });
    } catch (error) {
      console.error("Error updating liked products:", error);
    }
  };

  const handleAddToBasket = (productId) => {
    console.log(`Product with id ${productId} added to Basket`);
  };

  return (
    <li>
      <span style={{ marginRight: 5 }}>{product.title}</span>
      <span
        onClick={() => handleToggleLike(product.id)}
        style={{ cursor: "pointer", marginRight: 5 }}
      >
        <i
          className={`fa-heart ${isLiked ? "fas" : "far"}`}
          style={{ color: isLiked ? "green" : "grey" }}
        ></i>
      </span>

      <span
        style={{ color: "blue" }}
        onClick={() => handleAddToBasket(product.id)}
      >
        <i className={`fas fa-cart-plus`} style={{ color: "blue" }}></i>
      </span>
    </li>
  );
};

export default ProductListItem;
