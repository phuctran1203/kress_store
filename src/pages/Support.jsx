import "../scss/Support.scss";
export default function Support() {
	return (
		<div className="support container-lg my-5">
			<h2 className="heading">What can we help you?</h2>
			<div className="accordion" id="accordionExample">
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							How to do this?
						</button>
					</h2>
					<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
						<div className="accordion-body">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum numquam quibusdam blanditiis voluptatibus
							ipsam. Ea amet porro ut eligendi commodi, quia quasi blanditiis nulla, eius in iure ratione distinctio
							aliquam! Saepe quam illum, cupiditate dolorem temporibus pariatur alias, laudantium natus porro, aut iure
							distinctio veniam facilis nam quas ullam debitis dicta beatae unde exercitationem suscipit atque inventore
							voluptatibus tempore. Atque.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo"
						>
							How to do that?
						</button>
					</h2>
					<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
						<div className="accordion-body">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia dolor deserunt quisquam nobis,
							blanditiis pariatur perferendis nihil unde inventore a odio laborum consequatur sint eius fugiat?
							Voluptatem cupiditate ad labore?
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree"
						>
							How to do sleep?
						</button>
					</h2>
					<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
						<div className="accordion-body">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolores saepe similique voluptatum minus
							numquam illum eligendi quos labore fuga consequatur consequuntur recusandae consectetur aperiam soluta
							reprehenderit facilis eius blanditiis.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
