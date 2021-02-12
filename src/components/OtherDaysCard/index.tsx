import React from "react";
import { List } from "../../types/weather";
import "./styles.scss";
import {
	generateIconSrc,
	convertKelvinToCelsius,
	timeConverter,
} from "../../helpers/weatherUtilities";
import { Container, Row, Col } from "react-bootstrap";
interface Props {
	day: List;
}
function OtherDaysCard(props: Props) {
	const { day } = props;
	return (
		<div className='other-days-card-contaniner d-flex flex-column justify-content-center'>
			<Container>
				<Row>
					<Col className='d-flex justify-content-center'>
						<p className='day ml-3'>{timeConverter(day?.dt)}</p>
					</Col>

					<Col className='d-flex justify-content-center'>
						<img
							alt='weather-icon'
							style={{ width: "6rem" }}
							src={generateIconSrc(day?.weather[0]?.icon)}
						/>
					</Col>
					<Col className='d-flex justify-content-center'>
						<p className='celcius'>
							{convertKelvinToCelsius(day?.main.temp)} ℃
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default OtherDaysCard;
