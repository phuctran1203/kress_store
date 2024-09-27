//fake table comment of products
const Product_review = [
	{
		product_id: "N1",
		rate_star: 4,
		username: "nguyenthinh",
		content: "",
	},
	{
		product_id: "N1",
		rate_star: 2,
		username: "ngochau",
		content: "",
	},
	{
		product_id: "N1",
		rate_star: 2,
		username: "baongoc",
		content: "",
	},
	{
		product_id: "N1",
		rate_star: 3,
		username: "quynhnhu",
		content: "",
	},
	{
		product_id: "N2",
		rate_star: 5,
		username: "baongoc",
		content: "",
	},
];
export default function GetProductReviews(product_id) {
	return Product_review.filter((reivew) => reivew.product_id === product_id);
}
