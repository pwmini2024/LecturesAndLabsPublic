import { useSelector } from "react-redux";
import ProductListItem from "./ProductListItem";
import { useContext } from "react";
import LanguageContext from "./LanguageContext";

const ProductsList = (props) => {
	const { language } = useContext(LanguageContext);
	const products = useSelector((state) => state.products[language]);

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
