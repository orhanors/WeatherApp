import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiCall } from "./api";
import { IUser } from "../types/user";

const initialState: IUser = {
	data: {},
	isLoggedIn: false,
	errorMessage: "",
	loading: false,
};

const slice = createSlice({
	name: "user",
	initialState,
	reducers: {
		requested: (state) => ({
			...state,
			loading: true,
		}),
		loginSuccess: (state, action: PayloadAction<IUser>) => ({
			...state,
			loading: false,
			isLoggedIn: true,
			data: action.payload,
		}),
		logoutSuccess: (state, action: PayloadAction<object>) => ({
			...state,
			loading: false,
			isLoggedIn: false,
			data: {},
		}),
		failed: (state, action: PayloadAction<string>) => ({
			...state,
			loading: false,
			errorMessage: action.payload,
		}),
	},
});

export const { requested, loginSuccess, logoutSuccess, failed } = slice.actions;

export default slice.reducer;

export const getUserProfile = () =>
	apiCall({
		url: `http://localhost:3001/api/users/me`,
		onStart: requested.type,
		onSuccess: loginSuccess.type,
		onError: failed.type,
	});

export const logout = () =>
	apiCall({
		url: `http://localhost:3001/api/users/logout`,
		onStart: requested.type,
		onSuccess: logoutSuccess.type,
		onError: failed.type,
	});
