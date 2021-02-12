import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import useCustomSelector from "./store/helpers/useCustomSelector";
import { apiCall } from "./store/api";
import { requested, success, failed, testCallBody } from "./store/test";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/index";

function App() {
	return (
		<Router>
			<Route path='/' exact component={Home} />
		</Router>
	);
}

export default App;
