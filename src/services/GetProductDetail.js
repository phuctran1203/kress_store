// falke query to database. Use GetProductsList as a temp
import { GetProductsList } from "./GetProductsList";
export default function GetProductDetail(product_id) {
	const products = GetProductsList();
	return products.find((product) => product.product_id === product_id);
}
