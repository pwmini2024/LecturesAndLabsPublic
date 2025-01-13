import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ProductListItem from "./ProductListItem";
import { useContext } from "react";
import LanguageContext from "./LanguageContext";
import { setProducts, setLikedProducts } from "./redux/actions";

const ProductsList = (props) => {
  const { language } = useContext(LanguageContext);
  const products = useSelector((state) => state.products[language] || []);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products
        const productsResponse = await fetch("http://localhost:3001/products");
        const productsData = await productsResponse.json();
        dispatch(setProducts(productsData));

        // Fetch liked products
        const likedResponse = await fetch(
          "http://localhost:3001/likes/default"
        );
        const likedData = await likedResponse.json();
        dispatch(setLikedProducts(likedData.productIds));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="box mr-5 ml-5">
      <h2 className="title">Products</h2>
      <ul>
        {products.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
