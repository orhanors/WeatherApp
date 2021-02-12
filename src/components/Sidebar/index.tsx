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

const Sidebar = () => {
	const images: string[] = [img1, img2, img3, img4];
	return (
		<div className='sidebar'>
			<SearchBar />
			<CurrentDayCard />
			<CityImage image={img1} />
		</div>
	);
};

interface ImageType {
	image: string;
}
const CityImage = (props: ImageType) => {
	const { city } = useCustomSelector((store) => store.weather.data);
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
					<h2>{city?.name}</h2>
					<p>What an amazing city</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
