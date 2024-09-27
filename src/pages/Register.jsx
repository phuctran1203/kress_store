import { useEffect } from "react";
import "../scss/Register.scss";
import { GetUser } from "../services/GetUserInfo";

function gravityToNonvisible(element) {
	const parent = document.querySelector(".register").getBoundingClientRect();
	let time = 0;
	let positionY = 0;
	let rotate = 0;
	let aY = 0.02; //gia toc roi cua truc Y
	let aR = Math.random() * 0.003; //gia toc xoay cua Rotate
	const direct = [-1, 1]; //random huong cua rotate
	let where = direct[Math.floor(Math.random() * 2)]; //chon ra direct[0] or direct[1]
	let inter = setInterval(() => {
		element.style.transform = `translateY(${positionY}px) rotate(${rotate * where}deg)`;
		positionY = (aY * Math.pow(time, 2)) / 2;
		if (rotate < 90) {
			rotate = (aR * Math.pow(time, 2)) / 2;
		} else {
			rotate = 90;
		}
		time += 1;
		let react_element = element.getBoundingClientRect();
		if (react_element.bottom >= parent.bottom + 500) {
			clearInterval(inter);
		}
	}, 1);
}

function gravityToVisible(element, delay) {
	let positionY = 500;
	let aY = -0.02;
	let time = 0;
	setTimeout(() => {
		let inter = setInterval(() => {
			element.style.transform = `translateY(-${positionY}px) rotate(0deg)`;
			positionY = 500 + 0.00001 * time + (aY * Math.pow(time, 2)) / 2;
			time += 1;
			if (positionY <= 0) {
				clearInterval(inter);
			}
		}, 1);
	}, delay);
}
function switchTab(e) {
	let btn_target = e.target;
	if (btn_target.classList.contains("active")) {
		return;
	}
	let login_content = document.querySelector(".login");
	let sign_up_content = document.querySelector(".sign-up");
	let buttons = Array.from(document.querySelectorAll(".button-group-switch>button"));
	if (btn_target.classList.contains("new-user-tab")) {
		buttons[0].classList.remove("active");
		buttons[1].classList.add("active");
		document.querySelector(".register").style.height = "450px";
		login_content.style.zIndex = 0;
		sign_up_content.style.zIndex = 1;
		Array.from(document.querySelectorAll(".login>*")).forEach((element) => gravityToNonvisible(element));
		Array.from(document.querySelectorAll(".sign-up>*")).forEach((element, index) =>
			gravityToVisible(element, index * 30)
		);
	} else if (btn_target.classList.contains("login-tab")) {
		buttons[0].classList.add("active");
		buttons[1].classList.remove("active");
		document.querySelector(".register").style.height = "350px";
		login_content.style.zIndex = 1;
		sign_up_content.style.zIndex = 0;
		Array.from(document.querySelectorAll(".login>*")).forEach((element, index) =>
			gravityToVisible(element, index * 30)
		);
		Array.from(document.querySelectorAll(".sign-up>*")).forEach((element) => gravityToNonvisible(element));
	}
}
function handleClassInput(e) {
	let element = e.target;
	if (element.value) {
		element.classList.add("has-value");
	} else {
		element.classList.remove("has-value");
	}
}
function checkLogin() {
	const username = document.querySelector("#login-username").value.trim();
	const password = document.querySelector("#login-password").value.trim();
	let response_user = GetUser(username, password);
	if (!response_user) {
		alert("Sai thong tin dang nhap");
	} else {
		let secret_data = {
			username: response_user.username,
			password: response_user.password,
		};
		localStorage.setItem("user_data", JSON.stringify(secret_data));
		window.location.href = `/home`;
	}
}
export default function Register() {
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user_data"));
		if (user && user.password) {
			window.location.href = "/user";
		}
		Array.from(document.querySelectorAll(".sign-up>*")).forEach((element) => {
			element.style.transform = `translateY(-400px) rotate(0deg)`;
		});
	}, []);
	return (
		<div className="register container-lg my-5 px-0">
			<div className="button-group-switch">
				<button className="login-tab active" onClick={(e) => switchTab(e)}>
					Login Account
				</button>
				<button className="new-user-tab" onClick={(e) => switchTab(e)}>
					New User?
				</button>
			</div>
			<div className="contain">
				<div className="login mt-5 z-1">
					<h2 className="text-center mb-3 title">Kress Login</h2>
					<div className="input-group mb-3">
						<input type="text" id="login-username" onChange={(e) => handleClassInput(e)} />
						<label htmlFor="login-username">username</label>
					</div>
					<div className="input-group mb-3">
						<input type="password" id="login-password" onChange={(e) => handleClassInput(e)} />
						<label htmlFor="login-password">password</label>
					</div>
					<div className="form-check mb-3">
						<input className="form-check-input" type="checkbox" value="" id="remember-me" />
						<label className="form-check-label" htmlFor="remember-me">
							Remember me
						</label>
					</div>
					<div className="d-flex justify-content-between align-items-center">
						<button className="btn-action" onClick={() => checkLogin()}>
							Login
						</button>
						<a href="#" className="text-secondary ">
							Forgot password?
						</a>
					</div>
				</div>
				<div className="sign-up">
					<h2 className="text-center mb-3 title">Kress Sign Up</h2>
					<div className="input-group mb-3">
						<input type="text" id="signup-fullname" onChange={(e) => handleClassInput(e)} />
						<label htmlFor="signup-fullname">fullname</label>
					</div>
					<div className="input-group mb-3">
						<input type="text" id="signup-username" onChange={(e) => handleClassInput(e)} />
						<label htmlFor="signup-username">username</label>
					</div>
					<div className="input-group mb-3">
						<input type="password" id="signup-password" onChange={(e) => handleClassInput(e)} />
						<label htmlFor="signup-password">password</label>
					</div>
					<div className="input-group mb-3">
						<input type="password" id="signup-re-password" onChange={(e) => handleClassInput(e)} />
						<label htmlFor="signup-re-password">re-password</label>
					</div>
					<div className="input-group mb-3">
						<input type="text" id="signup-phone number" onChange={(e) => handleClassInput(e)} />
						<label htmlFor="signup-phone number">phone number</label>
					</div>
					<div className="d-flex align-items-center">
						<button className="btn-action">Sign Up</button>
					</div>
				</div>
			</div>
		</div>
	);
}
