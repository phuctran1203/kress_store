import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import CreateCard from "../components/CreateCard";
import SearchBar from "../components/SearchBar.jsx";
import { GetProductsList } from "../services/GetProductsList.js";
import "../scss/Home.scss";

let products = GetProductsList();
export default function Home() {
	const oldSell = useRef(0);
	const oldNew = useRef(0);
	const oldRecom = useRef(0);

	const [cardCountSell, setCardCountSell] = useState(12);
	const handleClickSell = () => {
		if (cardCountSell < products.length) {
			setCardCountSell(cardCountSell + 15);
		}
	};
	const checkEndSell = () => {
		let isShowMore = cardCountSell < products.length;
		let buttonText = isShowMore ? "show more" : "show less";
		let icon = isShowMore ? faChevronDown : faChevronUp;
		let onClick = isShowMore ? handleClickSell : () => setCardCountSell(12);
		return (
			<button className="show-more btn text-center" onClick={onClick}>
				<span className="me-2">{buttonText}</span>
				<FontAwesomeIcon icon={icon} />
			</button>
		);
	};

	const [cardCountNew, setCardCountNew] = useState(12);
	const handleClickNew = () => {
		if (cardCountNew < products.length) {
			setCardCountNew(cardCountNew + 15);
		}
	};
	const checkEndNew = () => {
		let isShowMore = cardCountNew < products.length;
		let buttonText = isShowMore ? "show more" : "show less";
		let icon = isShowMore ? faChevronDown : faChevronUp;
		let onClick = isShowMore ? handleClickNew : () => setCardCountNew(12);
		return (
			<button className="show-more btn text-center" onClick={onClick}>
				<span className="me-2">{buttonText}</span>
				<FontAwesomeIcon icon={icon} />
			</button>
		);
	};

	const [cardCountRecom, setCardCountRecom] = useState(18);
	const handleClickRecom = () => {
		if (cardCountRecom < products.length) {
			setCardCountRecom(cardCountRecom + 20);
		}
	};
	const checkEndRecom = () => {
		let isShowMore = cardCountRecom < products.length;
		let buttonText = isShowMore ? "show more" : "show less";
		let icon = isShowMore ? faChevronDown : faChevronUp;
		let onClick = isShowMore ? handleClickRecom : () => setCardCountRecom(18);
		return (
			<button className="show-more btn text-center" onClick={onClick}>
				<span className="me-2">{buttonText}</span>
				<FontAwesomeIcon icon={icon} />
			</button>
		);
	};

	useEffect(() => {
		oldSell.current = cardCountSell;
	}, [cardCountSell]);

	useEffect(() => {
		oldNew.current = cardCountNew;
	}, [cardCountNew]);

	useEffect(() => {
		oldRecom.current = cardCountRecom;
	}, [cardCountRecom]);

	return (
		<>
			<SearchBar />
			<div className="home container-fluid p-0">
				{/* banner */}
				<div className="row banner-group">
					{/* banner left */}
					<div className="banner-left col-md-8 pe-md-0 banner">
						<div id="slider-left" className="carousel slide" data-bs-ride="carousel">
							<div className="carousel-indicators">
								<button
									type="button"
									data-bs-target="#slider-left"
									data-bs-slide-to="0"
									className="active"
									aria-current="true"
									aria-label="Slide 1"
								></button>
								<button type="button" data-bs-target="#slider-left" data-bs-slide-to="1" aria-label="Slide 2"></button>
								<button type="button" data-bs-target="#slider-left" data-bs-slide-to="2" aria-label="Slide 3"></button>
							</div>
							<div className="carousel-inner">
								<div className="carousel-item active" data-bs-interval="5000">
									<video
										src="./media/videos/banners/video_banner_5_720p.mp4"
										className="d-block w-100"
										autoPlay
										loop
										muted
										alt="video"
									/>
								</div>
								<div className="carousel-item" data-bs-interval="3000">
									<video
										src="./media/videos/banners/video_banner_2_720p.mp4"
										className="d-block w-100"
										autoPlay
										loop
										muted
										alt="video"
									/>
								</div>
								<div className="carousel-item" data-bs-interval="4000">
									<video
										src="./media/videos/banners/video_banner_3_720p.mp4"
										className="d-block w-100"
										autoPlay
										loop
										muted
										alt="video"
									/>
								</div>
							</div>
							<button
								className="carousel-control-prev"
								type="button"
								data-bs-target="#slider-left"
								data-bs-slide="prev"
							>
								<span className="carousel-control-prev-icon" aria-hidden="true"></span>
								<span className="visually-hidden">Previous</span>
							</button>
							<button
								className="carousel-control-next"
								type="button"
								data-bs-target="#slider-left"
								data-bs-slide="next"
							>
								<span className="carousel-control-next-icon" aria-hidden="true"></span>
								<span className="visually-hidden">Next</span>
							</button>
						</div>
					</div>
					{/* banner right */}
					<div className="col-md-4 group-banner-right d-md-flex d-none">
						<div className="row">
							{/* slider top */}
							<div className="banner-top col-12 pb-0 banner">
								<div id="slider-top" className="carousel slide" data-bs-ride="carousel">
									<div className="carousel-indicators">
										<button
											type="button"
											data-bs-target="#slider-top"
											data-bs-slide-to="0"
											className="active"
											aria-current="true"
											aria-label="Slide 1"
										></button>
										<button
											type="button"
											data-bs-target="#slider-top"
											data-bs-slide-to="1"
											aria-label="Slide 2"
										></button>
										<button
											type="button"
											data-bs-target="#slider-top"
											data-bs-slide-to="2"
											aria-label="Slide 3"
										></button>
									</div>
									<div className="carousel-inner">
										<div className="carousel-item active" data-bs-interval="3000">
											<img src="./media/images/banners/image_banner_1_540p.png" className="d-block w-100" alt="image" />
										</div>
										<div className="carousel-item" data-bs-interval="3000">
											<img src="./media/images/banners/image_banner_2_540p.png" className="d-block w-100" alt="image" />
										</div>
										<div className="carousel-item" data-bs-interval="3000">
											<img src="./media/images/banners/image_banner_3_540p.png" className="d-block w-100" alt="image" />
										</div>
									</div>
									<button
										className="carousel-control-prev"
										type="button"
										data-bs-target="#slider-top"
										data-bs-slide="prev"
									>
										<span className="carousel-control-prev-icon" aria-hidden="true"></span>
										<span className="visually-hidden">Previous</span>
									</button>
									<button
										className="carousel-control-next"
										type="button"
										data-bs-target="#slider-top"
										data-bs-slide="next"
									>
										<span className="carousel-control-next-icon" aria-hidden="true"></span>
										<span className="visually-hidden">Next</span>
									</button>
								</div>
							</div>
							{/* slider bottom */}
							<div className="banner-bottom col-12 mt-auto banner">
								<div id="slider-bottom" className=" carousel slide" data-bs-ride="carousel">
									<div className="carousel-indicators">
										<button
											type="button"
											data-bs-target="#slider-bottom"
											data-bs-slide-to="0"
											className="active"
											aria-current="true"
											aria-label="Slide 1"
										></button>
										<button
											type="button"
											data-bs-target="#slider-bottom"
											data-bs-slide-to="1"
											aria-label="Slide 2"
										></button>
										<button
											type="button"
											data-bs-target="#slider-bottom"
											data-bs-slide-to="2"
											aria-label="Slide 3"
										></button>
									</div>
									<div className="carousel-inner">
										<div className="carousel-item active" data-bs-interval="4000">
											<img src="./media/images/banners/image_banner_4_540p.png" className="d-block w-100" alt="image" />
										</div>
										<div className="carousel-item" data-bs-interval="3000">
											<img src="./media/images/banners/image_banner_5_540p.png" className="d-block w-100" alt="image" />
										</div>
										<div className="carousel-item" data-bs-interval="4000">
											<img src="./media/images/banners/image_banner_6_540p.png" className="d-block w-100" alt="image" />
										</div>
									</div>
									<button
										className="carousel-control-prev"
										type="button"
										data-bs-target="#slider-bottom"
										data-bs-slide="prev"
									>
										<span className="carousel-control-prev-icon" aria-hidden="true"></span>
										<span className="visually-hidden">Previous</span>
									</button>
									<button
										className="carousel-control-next"
										type="button"
										data-bs-target="#slider-bottom"
										data-bs-slide="next"
									>
										<span className="carousel-control-next-icon" aria-hidden="true"></span>
										<span className="visually-hidden">Next</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* best sell */}
				<div className="row best-sell justify-content-center ">
					<div className="row name-part">
						<h3 className="mx-auto w-auto">Best Sellers</h3>
					</div>
					<div className="row p-lg-3 p-1">
						{products.slice(0, cardCountSell).map((info, index) => {
							const isNewItem = index >= oldSell.current;
							return (
								<div
									key={"s-" + index}
									className="col-xl-2 col-lg-3 col-md-4 col-6 mb-3 px-1 product-item"
									style={isNewItem ? { "--delay": (index - oldSell.current) * 30 + "ms" } : {}}
								>
									<CreateCard key={info.id} info={info} />
								</div>
							);
						})}
					</div>
					{checkEndSell()}
				</div>
				{/* new products */}
				<div className="row best-sell justify-content-center ">
					<div className="row name-part">
						<h3 className="mx-auto w-auto">New Products</h3>
					</div>
					<div className="row p-lg-3 p-1">
						{products.slice(0, cardCountNew).map((info, index) => {
							const isNewItem = index >= oldNew.current;
							return (
								<div
									key={"n-" + index}
									className="col-xl-2 col-lg-3 col-md-4 col-6 mb-3 px-1 product-item"
									style={isNewItem ? { "--delay": (index - oldNew.current) * 30 + "ms" } : {}}
								>
									<CreateCard key={info.id} info={info} />
								</div>
							);
						})}
					</div>
					{checkEndNew()}
				</div>
				{/* Recommended */}
				<div className="row best-sell justify-content-center ">
					<div className="row name-part">
						<h3 className="mx-auto w-auto">You Might Like</h3>
					</div>
					<div className="row p-lg-3 p-1">
						{products.slice(0, cardCountRecom).map((info, index) => {
							const isNewItem = index >= oldRecom.current;
							return (
								<div
									key={"r-" + index}
									className="col-xl-2 col-lg-3 col-md-4 col-6 mb-3 px-1 product-item"
									style={isNewItem ? { "--delay": (index - oldRecom.current) * 30 + "ms" } : {}}
								>
									<CreateCard key={info.id} info={info} />
								</div>
							);
						})}
					</div>
					{checkEndRecom()}
				</div>
			</div>
		</>
	);
}
