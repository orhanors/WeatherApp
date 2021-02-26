import React from "react";
import "./styles.scss";
import { useDispatch } from "react-redux";
import {
	addFavoriteCity,
	logout,
	removeFavoriteFromCities,
} from "../../store/user";
import { useHistory, withRouter } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import useCustomSelector from "../../store/helpers/useCustomSelector";
import { IconContext } from "react-icons/lib";
interface Props {
	city: string;
}
function NavBar(props: Props) {
	const dispatch = useDispatch();
	const { data } = useCustomSelector((state) => state.user);
	const addFavorite = () => {
		dispatch(addFavoriteCity(props.city));
	};

	const removeFavorite = () => {
		dispatch(removeFavoriteFromCities(props.city));
	};
	return (
		<div className='d-flex'>
			<div id='navbar-container'>
				<div id='original'>{props.city}</div>
			</div>

			<div className='mt-4'>
				<IconContext.Provider value={{ color: "white", size: "50px" }}>
					<div>
						{data.favoriteCities?.includes(props.city) ? (
							<div className='fav-btn' onClick={removeFavorite}>
								<AiFillHeart />
							</div>
						) : (
							<div className='fav-btn' onClick={addFavorite}>
								<AiOutlineHeart />{" "}
							</div>
						)}
					</div>
					{/* <AiFillHeart /> */}
				</IconContext.Provider>
			</div>
		</div>
	);
}

export default NavBar;
