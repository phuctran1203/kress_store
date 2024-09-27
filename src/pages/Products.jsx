import { GetProductsList } from "../services/GetProductsList.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../components/SearchBar.jsx";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import CreateCard from "../components/CreateCard.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../scss/Products.scss";

const catagories = [
	["Beauty", "./media/images/elements/beauty_catagory.png"],
	["Electric", "./media/images/elements/electric_catagory.png"],
	["Fashion", "./media/images/elements/fashion_catagory.png"],
	["Furniture", "./media/images/elements/furniture_catagory.png"],
	["Sport", "./media/images/elements/sport_catagory.png"],
	["Toy", "./media/images/elements/toy_catagory.png"],
	["Book", "./media/images/elements/book_catagory.png"],
	["Pet Supplies", "./media/images/elements/petsupplies_catagory.png"],
	["Phone & Accessories", "./media/images/elements/phone_accessories_catagory.png"],
	["Health", "./media/images/elements/health_catagory.png"],
	["Food", "./media/images/elements/food_catagory.png"],
	["Beauty", "./media/images/elements/beauty_catagory.png"],
	["Electric", "./media/images/elements/electric_catagory.png"],
	["Fashion", "./media/images/elements/fashion_catagory.png"],
	["Furniture", "./media/images/elements/furniture_catagory.png"],
	["Sport", "./media/images/elements/sport_catagory.png"],
	["Toy", "./media/images/elements/toy_catagory.png"],
];

const departs = {
	"All type": "all-type",
	Sport: "001",
	Shoes: "002",
	Clothing: "003",
};

const prices = {
	"All price": "all-price",
	"Under $25": "0-25",
	"$25 to $50": "25-50",
	"$50 to $100": "50-100",
	"$100 to $200": "100-200",
	"$200 & Above": "200+",
};

const discounts = {
	"All discount": "all-discount",
	"10% off or more": "10+",
	"25% off or more": "25+",
	"50% off or more": "50+",
	"70% off or more": "70+",
};

const products = GetProductsList();
export default function Products() {
	const [radioDepartCheck, setRatioDepartCheck] = useState("All type");
	const [radioPriceCheck, setRadioPriceCheck] = useState("All price");
	const [radioDiscountCheck, setRadioDiscountCheck] = useState("All discount");

	const oldCount = useRef(0);

	const [cardCountExplore, setCardCountExplore] = useState(24);

	const handleClickExplore = () => {
		if (cardCountExplore < products.length) {
			setCardCountExplore(cardCountExplore + 24);
		}
	};

	const checkEndExplore = () => {
		let isShowMore = cardCountExplore < products.length;
		let buttonText = isShowMore ? "show more" : "show less";
		let icon = isShowMore ? faChevronDown : faChevronUp;
		let onClick = isShowMore ? handleClickExplore : () => setCardCountExplore(24);
		return (
			<button className="show-more btn text-center" onClick={onClick}>
				<span className="me-2">{buttonText}</span>
				<FontAwesomeIcon icon={icon} />
			</button>
		);
	};

	useEffect(() => {
		oldCount.current = cardCountExplore;
	}, [cardCountExplore]);

	return (
		<>
			<SearchBar />
			<div className="products container-fluid p-0">
				<div className="row categories mx-lg-0 mx-3 my-3">
					<Swiper
						modules={[Autoplay, Pagination, Navigation]}
						slidesPerView={4}
						spaceBetween={10}
						breakpoints={{
							480: {
								slidesPerView: 5,
								spaceBetween: 15,
							},
							640: {
								slidesPerView: 8,
								spaceBetween: 15,
							},
							768: {
								slidesPerView: 9,
								spaceBetween: 20,
							},
							987: {
								slidesPerView: 10,
								spaceBetween: 20,
							},
							1024: {
								slidesPerView: 12,
								spaceBetween: 20,
							},
						}}
						grabCursor={true}
						loop={true}
						pagination={{
							clickable: true,
						}}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						className="mySwiper"
					>
						{catagories.map((catagory, index) => {
							return (
								<SwiperSlide key={"cata-" + index}>
									<div className="image">
										<img src={catagory[1]} alt="" />
									</div>
									<small className="mb-4 mt-1 title">{catagory[0]}</small>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>

				<div className="row mx-0">
					<aside className="col-xl-2 col-lg-3 col-md-12 navbar navbar-expand-lg">
						<div className="container-fluid">
							<button
								className="navbar-toggler w-100 border-0"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarForFilter"
								aria-controls="navbarForFilter"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								Filter things you like
							</button>
							<div className="collapse navbar-collapse flex-column align-items-start px-md-2 px-4" id="navbarForFilter">
								<p className="mb-0 mt-2">
									<strong>Department</strong>
								</p>
								<div className="department-choose">
									{Object.entries(departs).map(([key, value]) => (
										<div className="form-check" key={value}>
											<input
												className="form-check-input"
												type="radio"
												id={value}
												checked={key === radioDepartCheck}
												onChange={() => setRatioDepartCheck(key)}
												value={value}
											/>
											<label className="form-check-label" htmlFor={value}>
												{key}
											</label>
										</div>
									))}
								</div>
								<p className="mb-0 mt-2">
									<strong>Price</strong>
								</p>
								<div className="price-choose">
									{Object.entries(prices).map(([key, value]) => (
										<div className="form-check" key={value}>
											<input
												className="form-check-input"
												type="radio"
												id={value}
												checked={key === radioPriceCheck}
												onChange={() => setRadioPriceCheck(key)}
												value={value}
											/>
											<label className="form-check-label" htmlFor={value}>
												{key}
											</label>
										</div>
									))}
								</div>
								<p className="mb-0 mt-2">
									<strong>Discount</strong>
								</p>
								<div className="discount-choose">
									{Object.entries(discounts).map(([key, value]) => (
										<div className="form-check" key={value}>
											<input
												className="form-check-input"
												type="radio"
												id={value}
												checked={key === radioDiscountCheck}
												onChange={() => setRadioDiscountCheck(key)}
												value={value}
											/>
											<label className="form-check-label" htmlFor={value}>
												{key}
											</label>
										</div>
									))}
								</div>
								<div className="d-flex mt-4 mb-2 justify-content-between ">
									<button className="btn btn-filter">Filter Now</button>
									<button
										className="btn d-lg-none"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#navbarForFilter"
										aria-controls="navbarForFilter"
									>
										<FontAwesomeIcon icon={faChevronUp} />
									</button>
								</div>
							</div>
						</div>
					</aside>
					<article className="col-xl-10 col-lg-9 col-md-12 show-products pe-lg-0 ps-lg-3 px-0">
						{/* Explores */}
						<div className="row explores justify-content-center ">
							<div className="row name-part">
								<h3 className="mx-auto w-auto">Explores</h3>
							</div>
							<div className="row p-lg-3 p-1">
								{products.slice(0, cardCountExplore).map((info, index) => {
									const isNewItem = index >= oldCount.current;
									return (
										<div
											key={index}
											className="col-xl-2 col-lg-3 col-md-4 col-6 mb-3 px-1 product-item"
											style={isNewItem ? { "--delay": (index - oldCount.current) * 30 + "ms" } : {}}
										>
											<CreateCard info={info} />
										</div>
									);
								})}
							</div>
							{checkEndExplore()}
						</div>
					</article>
				</div>
			</div>
		</>
	);
}
