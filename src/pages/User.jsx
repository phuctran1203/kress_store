import { useEffect, useState } from "react";
import ShowConfirmBox from "../components/ShowConfirmBox";
import { GetUser } from "../services/GetUserInfo";
import "../scss/User.scss";
import GetUserBank from "../services/GetUserBank";

function GenOption({ start, end }) {
	return Array.from({ length: end }, (_, index) => (
		<option key={index + start} value={index + start}>
			{index + start}
		</option>
	));
}

function Profile({ user, handleInputChange }) {
	return (
		<div className="profile">
			<h4>My Profile</h4>
			<hr />
			<div className="content container">
				<div className="row">
					<div className="basic-info col-lg-7">
						<div className="group row mb-3">
							<span className="col-2 text-end">username:</span>
							<span className="col offset-1 p-0" id="username">
								{user.username}
							</span>
						</div>
						<div className="group row mb-3">
							<span className="col-2 text-end">password:</span>
							<input
								className="col offset-1"
								type="password"
								id="password"
								value={user.password}
								onChange={handleInputChange}
							/>
						</div>
						<div className="group row mb-3">
							<span className="col-2 text-end">email:</span>
							<input className="col offset-1" type="text" id="email" value={user.email} onChange={handleInputChange} />
						</div>
						<div className="group row mb-3">
							<span className="col-2 text-end">fullname:</span>
							<input
								className="col offset-1"
								type="text"
								id="fullname"
								value={user.fullname}
								onChange={handleInputChange}
							/>
						</div>
						<div className="group row mb-3 d-flex">
							<span className="col-2 text-end">gender:</span>
							<div className="col offset-1 d-flex p-0">
								<input type="radio" id="male" name="gender-pick" value="male" className="me-1" />
								<label htmlFor="male">male</label>
								<input type="radio" id="female" name="gender-pick" value="female" className="ms-2 me-1" />
								<label htmlFor="female" className="me-2">
									female
								</label>
								<input type="radio" id="others" name="gender-pick" value="others" className="me-1" />
								<label htmlFor="others">others</label>
							</div>
						</div>
						<div className="group row mb-3">
							<span className="col-2 text-end">address:</span>
							<textarea className="col offset-1" id="address" value={user.address} onChange={handleInputChange} />
						</div>
						<div className="group row mb-3">
							<span className="col-2 text-end">birth:</span>
							<div className="col offset-1 p-0">
								<select name="date" id="date">
									<GenOption start={1} end={31} />
								</select>
								<select name="month" id="month" className="mx-2">
									{Array.from({ length: 12 }, (_, index) => (
										<option key={index} value={index + 1}>{`Month ${index + 1}`}</option>
									))}
								</select>
								<select name="year" id="year">
									<GenOption start={1980} end={new Date().getFullYear() - 1980 + 1} />
								</select>
							</div>
						</div>
					</div>
					<div className="avatar-info col-lg-5">
						<div className="row">
							<div className="image col-12 text-center mb-4">
								<img
									className="col-lg-5 col-3 rounded-circle img-thumbnail"
									src={`./media/images/users/${user.avatar}`}
									alt=""
								/>
							</div>
							<button className="btn btn-outline-dark col-lg-5 col-4 mx-auto">Change avatar</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function Bank({ banks }) {
	console.log(banks);
	return (
		<div className="bank">
			<h4>Bank Methods</h4>
			<hr />
			<div className="content">
				{banks.map((bank, index) => (
					<div className="card mb-3" key={"bk-" + index}>
						<h5 className="card-header">{bank.bank_name}</h5>
						<div className="card-body">
							<h5 className="card-title">{bank.bank_display_name}</h5>
							<p className="card-text">{bank.credit_number}</p>
							<a href="#" className="btn btn-primary me-2">
								Edit
							</a>
							<a href="#" className="btn btn-primary">
								Delete
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default function User() {
	const user_data = JSON.parse(localStorage.getItem("user_data"));
	if (!user_data || !user_data.password) {
		window.location.href = "/register";
	}

	const [user, setUser] = useState(GetUser(user_data.username, user_data.password));
	const [banks, setBanks] = useState(GetUserBank(user_data.username, user_data.password));
	const [logState, setLogState] = useState(true);
	const [activeTab, setActiveTab] = useState("profile");

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		setUser({ ...user, [id]: value });
	};

	const setActive = (e) => {
		Array.from(document.querySelectorAll("aside li")).forEach((li) => li.classList.remove("active"));
		e.target.classList.add("active");
	};

	const logOut = () => {
		localStorage.removeItem("user_data");
		setLogState(false);
	};

	const noLogOut = () => {
		document.querySelector(".confirm-box").classList.add("d-none");
	};

	const handleClick = () => {
		let cf_box = document.querySelector(".confirm-box");
		if (cf_box.classList.contains("d-none")) {
			cf_box.classList.remove("d-none");
		}
	};

	return (
		<div className="user container-lg my-4">
			<ShowConfirmBox message="Log out confirm?" yesAction={logOut} noAction={noLogOut} />
			<div className="row">
				<aside className="col-md-2 py-3">
					<ul>
						My account
						<li
							className="active"
							onClick={(e) => {
								setActiveTab("profile");
								setActive(e);
							}}
						>
							Profile
						</li>
						<li
							onClick={(e) => {
								setActiveTab("bank");
								setActive(e);
							}}
						>
							Bank
						</li>
						<li onClick={handleClick}>Log out</li>
					</ul>
				</aside>
				<article className="col py-3">
					{activeTab === "profile" ? (
						<Profile user={user} handleInputChange={handleInputChange} />
					) : (
						<Bank banks={banks} />
					)}
				</article>
			</div>
		</div>
	);
}
