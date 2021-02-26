import { combineReducers } from "@reduxjs/toolkit";
import undoReducer from "../undo";
import weatherReducer from "../weather";
import userReducer from "../user";
const rootReducer = combineReducers({
	weather: weatherReducer,
	user: userReducer,
	undo: undoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
