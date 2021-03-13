import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import { useDispatch } from "react-redux";
import { loadWeather } from "./store/weather";
import Login from "./pages/Authorization/Login";
import Signup from "./pages/Authorization/Signup";
import ProtectedRoute from "./customComponents/ProtectedRoute";
import { getUserProfile } from "./store/user";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserProfile());
		dispatch(loadWeather("london"));
	});
	return (
		<Router>
			<ProtectedRoute path='/' exact component={Home} />

			<Route path='/login' exact component={Login} />
			<Route path='/signup' exact component={Signup} />
		</Router>
	);
}

export default App;
