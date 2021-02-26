import React from "react";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { logout } from "../../store/user";
import { useHistory, withRouter } from "react-router-dom";
interface Props {
	city: string;
}
function NavBar(props: Props) {
	const dispatch = useDispatch();
	const history = useHistory();
	const handleLogout = () => {
		dispatch(logout());
		history.push("/login");
	};
	return (
		<div>
			<div id='navbar-container'>
				<div id='original'>{props.city}</div>
			</div>

			<div>
				<button onClick={handleLogout}>Logout</button>
			</div>
		</div>
	);
}

export default NavBar;
