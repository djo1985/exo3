import "./App.css";
import { useEffect, useState } from "react";
import ChangeColor from "./components/ChangeColor/ChangeColor";
import TextBraille from "./components/TextBraille/TextBraille";
import getAllProduts from "./services/api";
import TipsCalcul from "./components/TipsCalcul/TipsCalcul";

const App = () => {
	const [products, setProducts] = useState([]);

	//utiliser un effet de bord (useEffect)
	useEffect(() => {
		//recupérer des données de l'API
		getAllProduts().then((data) => setProducts(data));
	}, []);

	return (
		<div>
			<h1>Ex1: Change couleur</h1>
			<ChangeColor />
			<TextBraille />

			{/* {products.map((product) => {
				return (
					<div key={crypto.randomUUID()}>
						<h3>{product.title}</h3>
						<img
							key={crypto.randomUUID()}
							src={product.image}
							alt=""
							style={{ width: 100 }}
						/>
						<p key={crypto.randomUUID()}>{product.description}</p>
					</div>
				);
			})} */}
			<TipsCalcul />
		</div>
	);
};

export default App;
