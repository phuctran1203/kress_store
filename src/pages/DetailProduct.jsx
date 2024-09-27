import { useLocation } from "react-router-dom";
import NotFound from "../pages/NotFound.jsx";
import GetProductDetail from "../services/GetProductDetail.js";
import { MoneyToNumber, NumberToMoney } from "../components/Format.jsx";
import GetProductReviews from "../services/GetProductReviews.js";
import "../scss/ProductDetail.scss";

function RenderStar() {
	return (
		<svg width="100%" height="100%">
			{Array.from({ length: 5 }, (_, index) => (
				<svg key={index} x={index * 20} y="0" width="20px" height="20px" viewBox="0 0 64 64">
					<path d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265 C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642 c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854 c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72 c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"></path>
				</svg>
			))}
		</svg>
	);
}

function RenderMask() {
	return (
		<svg width="100%" height="100%">
			<mask id="mask">
				{Array.from({ length: 5 }, (_, index) => (
					<svg key={`mask` + index} x={index * 20} y="0" width="20px" height="20px" viewBox="0 0 64 64">
						<path d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265 C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642 c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854 c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72 c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"></path>
					</svg>
				))}
			</mask>
		</svg>
	);
}

function calculatePercent(reviews) {
	return (reviews.reduce((acc, preview) => acc + preview.rate_star, 0) / reviews.length / 5) * 100;
}

function changeAmount(value) {
	let input = document.querySelector("#input-amount");
	let count = parseInt(input.value) + value;
	if (count >= 1) {
		input.value = count;
	}
}

function RenderDetail({ product, reviews }) {
	const { product_id, thumnail, title, price, sold, coupon_percent, coupon_Expired, description, variants } = product;
	console.log(product);
	console.log(reviews);
	return (
		<div className="row p-3">
			<div className="group-image-product col-5 p-0">
				<div className="main-image">
					<img src={`./media/images/products/${thumnail}`} alt="" className="col-12" />
				</div>
				<div className="variants-image">
					{variants.length !== 0 ? <div>co varient</div> : <div>khong co variant</div>}
				</div>
			</div>

			<div className="detail col-7 p-0 ps-3">
				<h3 className="title text-uppercase fw-medium mb-4 py-2">{title}</h3> {/* title san pham*/}
				<div className="review-info d-flex gap-5 mb-2">
					<div className="avg-rate-star">
						<div className="progress" role="progressbar" aria-label="Basic example">
							<div
								className="progress-bar"
								style={{
									width: `${calculatePercent(reviews)}%`,
								}}
							></div>
						</div>
						<div className="stars">
							<RenderStar />
						</div>
						<div className="mask-stars">
							<RenderMask />
						</div>
					</div>
					<p>
						Review: <span className="amount-review">{reviews.length}</span>
					</p>
					<p>
						Sold: <span className="amount-sold">{sold}</span>
					</p>
				</div>
				<div className="price d-flex align-items-start mb-4">
					<h2 className={`fw-normal mb-0 ${coupon_percent !== null ? "text-decoration-line-through opacity-50" : ""}`}>
						{NumberToMoney(price)}
					</h2>
					<span className={`coupon text-bg-danger ms-1 ${coupon_percent !== null ? "" : "d-none"}`}>
						{coupon_percent}%
					</span>
					<h2 className={`fw-normal mb-0 ms-4 text-danger fw-medium ${coupon_percent === null ? "d-none" : ""}`}>
						{NumberToMoney(price * (1 - coupon_percent / 100))}
					</h2>
				</div>
				<div className="amount mb-3 z-2 position-relative">
					<div className="btn-amount-group">
						<button className="minus" onClick={() => changeAmount(-1)}>
							-
						</button>
						<input type="number" min={0} defaultValue="1" id="input-amount" className="bg-transparent" />
						<button className="plus" onClick={() => changeAmount(1)}>
							+
						</button>
					</div>
				</div>
				<div className="button-group mb-3">
					<button className="btn rounded-5 px-4 me-3">Buy now</button>
					<button className="btn rounded-5 px-3 ">Add to cart</button>
				</div>
				<div className="des">
					<h4>MORE INFO</h4>
					<div dangerouslySetInnerHTML={{ __html: description }}></div>
				</div>
			</div>
		</div>
	);
}

export default function DetailProduct() {
	const location = useLocation();
	const id = location.hash.replace("#", "");
	const product = GetProductDetail(id);
	const reviews = product ? GetProductReviews(product.product_id) : [];
	return (
		<div className="product-detail container-lg ">
			{!product ? <NotFound /> : <RenderDetail product={product} reviews={reviews} />}
		</div>
	);
}
