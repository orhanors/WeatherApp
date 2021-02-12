import React from "react";
import "./styles.scss";
import OtherDaysCard from "../OtherDaysCard/index";
import useCustomSelector from "../../store/helpers/useCustomSelector";
import { List } from "../../types/weather";
import { Container, Row, Col } from "react-bootstrap";
function Main() {
	const { list } = useCustomSelector((store) => store.weather.data);

	const getOtherDays = (array: List[]) => {
		const _otherdays: List[] = [];
		for (let i = 3; i < array.length; i += 8) {
			_otherdays.push(array[i]);
		}
		return _otherdays;
	};
	return (
		<div>
			<Container>
				<Row className='d-flex justify-content-center'>
					{getOtherDays(list).map((day) => (
						<Col md={2}>
							<OtherDaysCard day={day} />
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
}

export default Main;
