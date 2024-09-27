import { GetProductsList } from "./GetProductsList";
const fake_table_cart = [
	{
		username: "phuctran",
		product_id: "N1",
		amount: 2,
	},
	{
		username: "phuctran",
		product_id: "N2",
		amount: 1,
	},
	{
		username: "phuctran",
		product_id: "N3",
		amount: 4,
	},
];
function fake_query_db(username) {
	const products = GetProductsList();
	let user_cart = [];
	fake_table_cart.forEach((cart_user) => {
		let found = products.find(
			(product) => username === cart_user.username && cart_user.product_id === product.product_id
		);
		if (found) {
			user_cart.push({ ...cart_user, ...found });
		}
	});
	return user_cart;
}
export function GetCart(username) {
	return fake_query_db(username);
}
