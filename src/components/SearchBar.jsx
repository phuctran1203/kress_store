import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../scss/SearchBar.scss";
function SearchBar() {
	return (
		<div className="search container-fluid d-flex justify-content-center my-2">
			<div className="search-bar position-relative d-flex align-items-center ">
				<input
					type="text"
					className="w-100 rounded-5 border-0 ps-3"
					id="search-input"
					placeholder="Let search something"
				/>
				<button id="seach-button" className="position-absolute rounded-circle border-0 text-bg-dark ">
					<FontAwesomeIcon icon={faSearch} />
				</button>
			</div>
		</div>
	);
}
export default SearchBar;
