import { combineReducers } from "@reduxjs/toolkit";
import undoReducer from "../undo";
import weatherReducer from "../weather";

const rootReducer = combineReducers({
	weather: weatherReducer,
	undo: undoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
