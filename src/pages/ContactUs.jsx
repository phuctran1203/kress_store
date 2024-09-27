import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import "../scss/ContactUs.scss";
export default function ContactUs() {
	return (
		<div className="contact-us container-lg my-5">
			<div className="row">
				<div className="contact-from col-md-5 p-3">
					<h2>Contact Us</h2>
					<form>
						<p>we are here to assist you.</p>
						<div className="form-floating mb-3">
							<input type="email" className="form-control rounded-3 " id="email" placeholder="name@example.com" />
							<label htmlFor="email">Email address</label>
						</div>
						<div className="form-floating mb-3">
							<textarea
								className="form-control rounded-3 "
								placeholder="Typing here..."
								id="exampleFormControlTextarea1"
							></textarea>
							<label htmlFor="exampleFormControlTextarea1">Content</label>
						</div>
						<button className="btn submit-btn rounded-5 px-3">submit</button>
					</form>
					<ul className="mt-4 ps-1">
						<li className="mt-2">
							<FontAwesomeIcon icon={faLocationDot} className="me-1" /> 720A Đ. Điện Biên Phủ, Vinhomes Tân Cảng, Bình
							Thạnh, Thành phố Hồ Chí Minh 72300, Việt Nam
						</li>
						<li className="mt-2">
							<a href="tel:0123456789">
								<FontAwesomeIcon icon={faPhone} className="me-1" /> 0123456789
							</a>
						</li>
						<li className="mt-2">
							<FontAwesomeIcon icon={faEnvelope} className="me-1" /> kressstore@example.com
						</li>
					</ul>
				</div>
				<div className="map col-md-7 p-0 overflow-hidden ">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8757.678056854584!2d106.70767318081772!3d10.798233131396193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c2f8f30911%3A0x36ac5073f8c91acd!2sLandmark%2081!5e0!3m2!1svi!2s!4v1716362011986!5m2!1svi!2s"
						allowFullScreen={true}
						width="100%"
						height="100%"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</div>
	);
}
