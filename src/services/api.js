//récupération de tous les produits

const getAllProduts = async () => {
	//configurer une requete HTTP
	const requestInfos = new Request("https://fakestoreapi.com/products");
	console.log(requestInfos);
	//exécuter la requete HTTP
	const request = await fetch(requestInfos);
	//récupérer la réponse
	const response = await request.json();
	return response;
};
export default getAllProduts;
