import React from "react";
import Sidebar from "../../components/Sidebar";
import "./styles.scss";
import Main from "../../components/Main/index";
import Map from "../../components/Map/index";
import useCustomSelector from "../../store/helpers/useCustomSelector";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../../components/NavBar/index";
const Home = () => {
	const { city } = useCustomSelector((store) => store.weather.data);
	return (
		<div className='home'>
			<Sidebar />
			<div className='main-right'>
				<NavBar city={city.name} />
			</div>
			<div>
				<Container>
					<Row>
						<Col>
							<div className='mb-5'>
								<Map
									coordinations={city.coord}
									city={city.name}
								/>
							</div>
						</Col>
						<Col>
							<div className='main'>
								<Main />
							</div>
						</Col>
					</Row>
				</Container>
			</div>

			<div className='google-map'>
				{/* <Map coordinations={city.coord} city={city.name} /> */}
			</div>
		</div>
	);
};

export default Home;
