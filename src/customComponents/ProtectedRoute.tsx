import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthUser } from "../helpers/auth";
//@ts-ignore
const ProtectedRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isAuthUser() ? <Component {...props} /> : <Redirect to='/login' />
		}
	/>
);

export default ProtectedRoute;
