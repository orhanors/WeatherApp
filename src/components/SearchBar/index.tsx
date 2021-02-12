import React, { useState } from "react";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { apiCall } from "../../store/api";
import { loadWeather } from "../../store/weather";

function SearchBar() {
	const dispatch = useDispatch();
	const [searchValue, setSearchValue]: [
		string,
		React.Dispatch<React.SetStateAction<string>>
	] = useState("");
	const handleChange = (e: any) => {
		if (e.keyCode === 13 || e.key === "Enter") {
			// WHEN ENTER KEY IS PRESSED
			e.preventDefault();
			dispatch(loadWeather(searchValue));
		} else {
			setSearchValue(e.target.value);
		}
	};
	return (
		<div>
			<div className='search-container'>
				<input
					type='text'
					placeholder='Search...'
					onChange={handleChange}
					onKeyDown={handleChange}
				/>
				<div className='search'></div>
			</div>
		</div>
	);
}

export default SearchBar;
