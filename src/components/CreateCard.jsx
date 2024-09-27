import { Link } from "react-router-dom";
import { NumberToMoney } from "./Format.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { FormatSold } from "./Format.jsx";
import "../scss/CreateCard.scss";
export default function CreateCard({ info }) {
	const { product_id, thumnail, title, price, sold, coupon_percent } = info;
	const hasCoupon = coupon_percent !== null ? true : false;
	return (
		<div className="box" data-id={product_id}>
			<Link to={`/detail#${product_id}`}>
				<div className="card h-100 border-0 d-flex flex-column">
					<div className="image">
						<img src={`./media/images/products/${thumnail}`} className="card-img-top" alt="product-image" />
					</div>
					<span className={`position-absolute end-0 badge badge-off ${hasCoupon ? "" : "d-none"}`}>
						<FontAwesomeIcon icon={faTicket} className="me-1" />
						{coupon_percent + "% off"}
					</span>
					<div className="card-body d-flex flex-column justify-content-between p-lg-2">
						<p className="card-title">{title}</p>
						<div className="d-flex justify-content-between align-items-end">
							<p className="m-0 price">
								<span className={hasCoupon ? "text-decoration-line-through text-secondary text-opacity-75 " : ""}>
									<span className="base-price">{NumberToMoney(price)}</span>
								</span>
								<span className={`ps-1 text-danger fw-medium  ${hasCoupon ? "" : "d-none"}`}>
									<span className="sale-price ">{NumberToMoney((price * (1 - coupon_percent / 100)).toFixed(2))}</span>
								</span>
							</p>
							<small className="m-0 text-body-secondary">
								<span className="sold me-1">
									<FormatSold sold={parseInt(sold)} />
								</span>
								sold
							</small>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}
