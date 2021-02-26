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
		loginSuccess: (state, action: PayloadAction<object>) => ({
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
		addFavoriteSuccess: (state, action: PayloadAction<object>) => ({
			...state,
			loading: false,
			isLoggedIn: true,
			data: action.payload,
		}),
		removeFromFavoriteSuccess: (state, action: PayloadAction<object>) => ({
			...state,
			loading: false,
			isLoggedIn: true,
			data: action.payload,
		}),
	},
});

export const {
	requested,
	loginSuccess,
	logoutSuccess,
	failed,
	addFavoriteSuccess,
	removeFromFavoriteSuccess,
} = slice.actions;

export default slice.reducer;

export const getUserProfile = () =>
	apiCall({
		url: `${process.env.REACT_APP_BE_URL}/users/me`,
		onStart: requested.type,
		onSuccess: loginSuccess.type,
		onError: failed.type,
	});

export const logout = () =>
	apiCall({
		url: `${process.env.REACT_APP_BE_URL}/users/logout`,
		onStart: requested.type,
		onSuccess: logoutSuccess.type,
		onError: failed.type,
	});

export const addFavoriteCity = (keyword: string) =>
	apiCall({
		url: `${process.env.REACT_APP_BE_URL}/users/favorites/${keyword}`,
		onStart: requested.type,
		onSuccess: addFavoriteSuccess.type,
		onError: failed.type,
	});

export const removeFavoriteFromCities = (keyword: string) =>
	apiCall({
		url: `${process.env.REACT_APP_BE_URL}/users/favorites/${keyword}`,
		method: "delete",
		onStart: requested.type,
		onSuccess: removeFromFavoriteSuccess.type,
		onError: failed.type,
	});
