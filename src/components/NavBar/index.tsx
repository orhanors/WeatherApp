import React from "react";
import "./styles.scss";
interface Props {
	city: string;
}
function NavBar(props: Props) {
	return (
		<div>
			<div id='navbar-container'>
				<div id='original'>{props.city}</div>
			</div>
		</div>
	);
}

export default NavBar;
