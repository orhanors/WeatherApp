import React from "react";
import { Container } from "react-bootstrap";
import CurrentDayCard from "../CurrentDayCard";
import SearchBar from "../SearchBar";
import useCustomSelector from "../../store/helpers/useCustomSelector";
import "./styles.scss";
import img1 from "../../assets/v1.jpg";
import img2 from "../../assets/v2.jpg";
import img3 from "../../assets/v3.jpg";
import img4 from "../../assets/v5.png";
import { convertKelvinToCelsius } from "../../helpers/weatherUtilities";
import { FcPodiumWithSpeaker, FcMindMap } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { logout } from "../../store/user";
import { useHistory } from "react-router-dom";
import { isAuthUser } from "../../helpers/auth";
import { loadWeather } from "../../store/weather";
const Sidebar = () => {
	const images: string[] = [img1, img2, img3, img4];

	const randomElement = (array: string[]) => {
		return array[Math.floor(Math.random() * array.length)];
	};
	return (
		<div className='sidebar'>
			<SearchBar />
			<CurrentDayCard />
			<CityImage image={randomElement(images)} />
			<LogoutBtn />
		</div>
	);
};

interface ImageType {
	image: string;
}

const LogoutBtn = () => {
	const dispatch = useDispatch();
	const { isLoggedIn } = useCustomSelector((store) => store.user);
	const history = useHistory();

	const handleLogout = () => {
		dispatch(logout());
		setTimeout(() => {
			if (!isAuthUser()) {
				history.push("/login");
			}
		}, 500);
	};
	return (
		<div className='d-flex justify-content-center mt-4'>
			<button onClick={handleLogout} className='logout-btn'>
				Logout
			</button>
		</div>
	);
};
const CityImage = (props: ImageType) => {
	const { city, list } = useCustomSelector((store) => store.weather.data);
	const { data } = useCustomSelector((store) => store.user);
	const dispatch = useDispatch();
	const handleFavSearch = (e: any) => {
		dispatch(loadWeather(e.target.id));
	};
	return (
		<div className='flip-box my-3'>
			<div className='flip-box-inner'>
				<div className='flip-box-front'>
					<img
						src={props.image}
						alt='Paris'
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
							borderRadius: "20px",
						}}
					/>
				</div>
				<div className='flip-box-back'>
					{data.favoriteCities?.map((city, index) => {
						return (
							<h4 key={index} id={city} onClick={handleFavSearch}>
								{city}
							</h4>
						);
					})}

					{/* <h2>{city?.name}</h2>
					<div>
						<div className='feels-like'>
							<small>
								{" "}
								<FcPodiumWithSpeaker />{" "}
							</small>{" "}
							{convertKelvinToCelsius(list[0]?.main?.feels_like) +
								" "}
							℃
						</div>

						<div className='wind'>
							<small>
								{" "}
								<FcMindMap />{" "}
							</small>{" "}
							{list[0]?.main.humidity + " "}%
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
