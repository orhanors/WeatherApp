import React from "react";
import "./styles.scss";
function SearchBar() {
	return (
		<div>
			<div className='search-container'>
				<input type='text' placeholder='Search...' />
				<div className='search'></div>
			</div>
		</div>
	);
}

export default SearchBar;
