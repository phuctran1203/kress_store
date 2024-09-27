import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartArrowDown, faBell } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GetUser } from "../services/GetUserInfo";
import "../scss/Header.scss";

export default function Header() {
	if (!localStorage.getItem("user_data")) {
		localStorage.setItem("user_data", JSON.stringify({}));
	}
	let user = JSON.parse(localStorage.getItem("user_data"));
	let user_got = GetUser(user.username, user.password);
	const location = useLocation();
	const [activePage, setActivePage] = useState("init_value");
	useEffect(() => {
		let currentPage = location.pathname.replace("/", "");
		if (currentPage === "") {
			currentPage = "Home";
		}
		setActivePage(currentPage);
	}, [location]);
	return (
		<header className="header navbar navbar-expand-md position-relative ">
			<div className="container-lg pt-2">
				<Link to="/" className="navbar-brand d-flex position-absolute">
					<img src="./kress_logo.png" alt="Logo" />
					<span className="shop-name my-auto ms-1">Kress</span>
				</Link>

				<button
					className="navbar-toggler ms-auto"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasNavbar"
					aria-controls="offcanvasNavbar"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar">
					<div className="offcanvas-header">
						<h5 className="offcanvas-title" id="offcanvasNavbarLabel">
							Kress
						</h5>
						<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
					<div className="offcanvas-body">
						<div className="col-md-3"></div>
						<div className="col-md-6 navbar-middle d-md-flex justify-content-md-center">
							<ul className="navbar-nav justify-content-between">
								{["Home", "Products", "Contact-Us", "Support"].map((name) => (
									<li
										key={name}
										className={`nav-item px-md-1 ${name.toLowerCase() === activePage.toLowerCase() ? "active" : ""}`}
										onClick={() => document.querySelector(".btn-close").click()}
									>
										<Link className="nav-link" aria-current="page" to={`/${name.toLowerCase()}`}>
											{name.replace(/\-/g, " ")}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className="col-md-3 navbar-right">
							<ul className="navbar-nav justify-content-md-end">
								<li className="nav-item avatar-user" onClick={() => document.querySelector(".btn-close").click()}>
									<Link
										className="nav-link h-100 d-flex align-items-center "
										aria-current="page"
										to={user_got ? "/user" : "/register"}
									>
										{user_got && (
											<span className="image me-md-0 me-2 d-inline-block">
												<img src={`./media/images/users/${user_got.avatar}`} alt="" />
											</span>
										)}
										{!user_got && <FontAwesomeIcon icon={faUser} className="d-md-block d-none" />}
										<span className="d-md-none d-inline">Account</span>
									</Link>
								</li>
								{/* <li className="nav-item px-lg-1" onClick={() => document.querySelector(".btn-close").click()}>
									<Link className="nav-link" aria-current="page" to="/cart">
										<FontAwesomeIcon icon={faCartArrowDown} className="d-md-inline d-none" />
										<span className="d-md-none d-inline">Cart</span>
									</Link>
								</li> */}
								<li className="nav-item" onClick={() => document.querySelector(".btn-close").click()}>
									<a className="nav-link" aria-current="page" href="#">
										<FontAwesomeIcon icon={faBell} className="d-md-inline d-none" />
										<span className="d-md-none d-inline">Notification</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
