import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import { useDispatch } from "react-redux";
import { loadWeather } from "./store/weather";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadWeather("london"));
	});
	return (
		<Router>
			<Route path='/' exact component={Home} />
		</Router>
	);
}

export default App;
