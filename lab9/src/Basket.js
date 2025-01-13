import { useContext } from "react";
import LanguageContext from "./LanguageContext";

const Basket = (props) => {
	const basketText = {
		"en-US": "Your basket is empty.",
		"de-DE": "Ihr Warenkorb ist leer.",
		"pl-PL": "Twój koszyk jest pusty.",
	};

	const { language } = useContext(LanguageContext);

	return (
		<div className="box">
			<h2 className="title">Basket</h2>
			<p>{basketText[language]}</p>
		</div>
	);
};

export default Basket;
