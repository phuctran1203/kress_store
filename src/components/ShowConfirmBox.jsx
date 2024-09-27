export default function ShowConfirmBox({ message, yesAction, noAction }) {
	return (
		<div className="confirm-box d-none bg-light p-5 rounded-4">
			<div className="d-flex flex-column">
				<h5 className="mb-4">{message}</h5>
				<div className="d-flex justify-content-center gap-5 ">
					<button className="btn btn-outline-secondary" onClick={() => yesAction()}>
						Yes
					</button>
					<button className="btn btn-outline-secondary" onClick={() => noAction()}>
						No
					</button>
				</div>
			</div>
		</div>
	);
}
