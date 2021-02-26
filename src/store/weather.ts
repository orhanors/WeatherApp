import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { List, Weather, City } from "../types/weather";

import { apiCall, ApiCallType } from "./api";

export interface IWeatherState {
	data: Weather;
	errorMessage: string;
	loading: boolean;
}

const initialState: IWeatherState = {
	data: {
		cod: "",
		message: 0,
		cnt: 0,
		list: [],
		city: {
			id: 0,
			name: "",
			coord: { lat: 0, lon: 0 },
			country: "",
			population: 0,
			timezone: 0,
			sunrise: 0,
			sunset: 0,
		},
	},
	errorMessage: "",
	loading: false,
};

const slice = createSlice({
	name: "weather",
	initialState,
	reducers: {
		requested: (state) => ({
			...state,
			loading: true,
		}),
		success: (state, action: PayloadAction<Weather>) => ({
			...state,
			loading: false,
			data: action.payload,
		}),
		failed: (state, action: PayloadAction<string>) => ({
			...state,
			loading: false,
			errorMessage: action.payload,
		}),
	},
});

export const { requested, success, failed } = slice.actions;

export default slice.reducer;

export const loadWeather = (keyword: string) =>
	apiCall({
		url: `${process.env.REACT_APP_BE_URL}/weather/${keyword}`,
		//headers: {},
		onStart: requested.type,
		onSuccess: success.type,
		onError: failed.type,
	});
