import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import "../scss/Cart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetCart } from "../services/GetUserCart.js";
import { NumberToMoney, MoneyToNumber } from "../components/Format.jsx";

const user_data = JSON.parse(localStorage.getItem("user_data"));
console.log("render ngoia");
export default function Cart() {
	if (!user_data || !user_data.password) {
		window.location.href = "/register";
	}

	const [fakeData, setFakeData] = useState(GetCart(user_data.username));
	const [someChange, setSomeChange] = useState(true);

	const updateAmount = (value_change, id) => {
		let input = document.querySelector(`#amount-${id}`);
		let result = parseInt(input.value) + value_change;
		if (result >= 0) {
			input.value = result;
			let price = document.querySelector(`#price-${id}`);
			let total = document.querySelector(`#total-${id}`);
			total.innerText = NumberToMoney((MoneyToNumber(price.innerText) * result).toFixed(2));
			updateTotalPay();
		}
	};

	const updateTotalItem = () => {
		let count = Array.from(document.querySelectorAll(".item>.check-box>input")).reduce((preValue, element) => {
			return element.checked ? preValue + 1 : preValue;
		}, 0);
		document.querySelector("#total-items").innerText = count;
	};

	const updateTotalPay = () => {
		let total_pay = 0;
		fakeData.forEach((product) => {
			let checkbox = document.querySelector(`#cb-${product.product_id}`);
			if (checkbox.checked) {
				total_pay += MoneyToNumber(document.querySelector(`#total-${product.product_id}`).innerText);
			}
		});
		document.querySelector("#total-pay").innerText = NumberToMoney(total_pay.toFixed(2));
	};

	const deleteProduct = (id) => {
		setFakeData(fakeData.filter((product) => product.product_id != id));
	};

	const handleCheckAll = (e) => {
		Array.from(document.querySelectorAll(".item>.check-box>input")).forEach((checkbox) => {
			checkbox.checked = e.target.checked;
		});
		setSomeChange(!someChange);
	};

	useEffect(() => {
		updateTotalItem();
		updateTotalPay();
	}, [someChange]);

	useEffect(() => {
		updateTotalItem();
		updateTotalPay();
	}, [fakeData]);

	return (
		<div className="cart container-xl p-0">
			<div className="head row m-0">
				<div className="col">
					<input type="checkbox" onClick={(e) => handleCheckAll(e)} />
				</div>
			</div>
			{fakeData.map((data) => {
				return (
					<div className="item row m-0" key={data.product_id}>
						<div className="check-box col-1 align-self-center">
							<input type="checkbox" id={`cb-${data.product_id}`} onClick={() => setSomeChange(!someChange)} />
						</div>
						<div className="image col-lg-1 col-md-2 col-4 align-self-center ">
							<Link to={`/detail#${data.product_id}`}>
								<img className="img-thumbnail" src={`./media/images/products/${data.thumnail}`} alt="" />
							</Link>
						</div>
						<div className="title col-lg col-md-8 col-4 align-self-center ">
							<p className="m-0">{data.title}</p>
						</div>
						<div className="price col-1 align-self-center ">
							<p className="price-inside m-0 d-flex justify-content-center " id={`price-${data.product_id}`}>
								{NumberToMoney(data.price)}
							</p>
						</div>
						<div className="amount col-lg-2 col-md-4 col-4 align-self-center d-flex justify-content-center ">
							<div className="btn-amount-group">
								<button className="minus" onClick={() => updateAmount(-1, data.product_id)}>
									-
								</button>
								<input
									type="number"
									min={0}
									defaultValue={data.amount}
									id={`amount-${data.product_id}`}
									onChange={() => updateAmount(0, data.product_id)}
								/>
								<button className="plus" onClick={() => updateAmount(1, data.product_id)}>
									+
								</button>
							</div>
						</div>
						<div className="total col-lg-2 col-md-4 col-4 align-self-center ">
							<p className="m-0 d-flex justify-content-center total-inside" id={`total-${data.product_id}`}>
								{NumberToMoney((data.price * data.amount).toFixed(2))}
							</p>
						</div>
						<div className="action col-lg-1 col-md-4 col-4 align-self-center d-flex justify-content-center ">
							<FontAwesomeIcon
								icon={faTrashCan}
								style={{ color: "#ff0000", cursor: "pointer" }}
								onClick={() => deleteProduct(data.product_id)}
							/>
						</div>
					</div>
				);
			})}
			{fakeData.length === 0 && (
				<div className="empty-cart row m-0" key="nothing">
					<h2 className="w-auto m-auto text-secondary">hmmm, nothing here!</h2>
				</div>
			)}

			<div className="foot m-0 d-flex justify-content-evenly align-items-center py-2">
				<p className="m-0">
					Total items: <span id="total-items">0</span>
				</p>
				<p className="m-0">
					Total pay: <span id="total-pay">0</span>
				</p>
				<button id="btn-next" className="rounded-5 border-0 px-3">
					Next Step
				</button>
			</div>
		</div>
	);
}
