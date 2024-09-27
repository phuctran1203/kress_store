import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
function Footer() {
	const style = {
		backgroundColor: "rgb(255, 255, 255, 0.5)",
		boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
	};
	return (
		<footer className="text-dark text-center text-lg-start" style={style}>
			<div className="container-lg py-4">
				<div className="row mt-4">
					<div className="col-lg-4 col-md-12 mb-4 mb-md-0">
						<h5 className="text-uppercase mb-4">About Kress Store</h5>

						<p>
							At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
							atque corrupti.
						</p>

						<p>Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</p>

						<div className="mt-4">
							<a type="button" className="btn btn-floating btn-light btn-lg me-1">
								<FontAwesomeIcon icon={faFacebook} />
							</a>

							<a type="button" className="btn btn-floating btn-light btn-lg mx-1">
								<FontAwesomeIcon icon={faTwitter} />
							</a>
							<a type="button" className="btn btn-floating btn-light btn-lg ms-1">
								<FontAwesomeIcon icon={faGoogle} />
							</a>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 mb-4 mb-md-0">
						<h5 className="text-uppercase mb-4 pb-1">Search something</h5>

						<div className="form-outline form-white mb-4">
							<input type="text" id="formControlLg" className="form-control form-control-lg" />
							<label className="form-label" htmlFor="formControlLg">
								Search
							</label>
						</div>

						<ul className="fa-ul">
							<li className="mb-3">
								<span className="fa-li">
									<FontAwesomeIcon icon={faHome} />
								</span>
								<span>Warsaw, 00-967, Poland</span>
							</li>
							<li className="mb-3">
								<span className="fa-li">
									<FontAwesomeIcon icon={faEnvelope} />
								</span>
								<span>contact@example.com</span>
							</li>
							<li className="mb-3">
								<span className="fa-li">
									<FontAwesomeIcon icon={faPhone} />
								</span>
								<span>+ 48 234 567 88</span>
							</li>
						</ul>
					</div>

					<div className="col-lg-4 col-md-6 mb-4 mb-md-0">
						<h5 className="text-uppercase mb-4 text-center ">Opening hours</h5>

						<table className="table text-center ">
							<tbody>
								<tr>
									<td>Mon - Thu:</td>
									<td>8am - 9pm</td>
								</tr>
								<tr>
									<td>Fri - Sat:</td>
									<td>8am - 1am</td>
								</tr>
								<tr>
									<td>Sunday:</td>
									<td>9am - 10pm</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</footer>
	);
}
export default Footer;
