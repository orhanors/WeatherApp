import React from "react";
import Sidebar from "../../components/Sidebar";
import "./styles.scss";
import Main from "../../components/Main/index";
import Map from "../../components/Map/index";
import useCustomSelector from "../../store/helpers/useCustomSelector";
const Home = () => {
	const { city } = useCustomSelector((store) => store.weather.data);
	return (
		<div>
			<Sidebar />
			<div className='main-right'>
				<Main />
			</div>

			<Map coordinations={city.coord} city={city.name} />
		</div>
	);
};

export default Home;
