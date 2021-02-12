import React from "react";
import {
	generateIconSrc,
	convertKelvinToCelsius,
	timeConverter,
} from "../../helpers/weatherUtilities";
import useCustomSelector from "../../store/helpers/useCustomSelector";
import "./styles.scss";
import { FcOvertime } from "react-icons/fc";
function CurrentDayCard() {
	const { list } = useCustomSelector((store) => store.weather.data);
	return (
		<div className='current-day-container'>
			<div className='d-flex justify-content-center'>
				<img
					alt='weather'
					className='current-day-img'
					src={generateIconSrc(list[0]?.weather[0]?.icon)}
				/>
			</div>

			<div className='d-flex justify-content-around'>
				<div className='d-flex'>
					<p className='amount'>
						{convertKelvinToCelsius(list[0]?.main?.temp)}
					</p>
					<p className='celcius-symbol mt-3'>℃</p>
				</div>

				<div className='mt-3'>
					<div className='feels-like'>
						<small>feels:</small>{" "}
						{convertKelvinToCelsius(list[0]?.main?.feels_like) +
							" "}
						℃
					</div>

					<div className='wind'>
						<small>humidity:</small> {list[0]?.main.humidity + " "}%
					</div>
				</div>
			</div>

			<div className='current-time'>
				<FcOvertime />
				{timeConverter(list[0]?.dt)}
			</div>
		</div>
	);
}

export default CurrentDayCard;
