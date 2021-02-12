export interface Weather {
	cod: string;
	message: number;
	cnt: number;
	list: List[];
	city: City;
}

export interface City {
	id: number;
	name: string;
	coord: Coord;
	country: string;
	population: number;
	timezone: number;
	sunrise: number;
	sunset: number;
}

export interface Coord {
	lat: number;
	lon: number;
}

export interface List {
	dt: number;
	main: MainClass;
	weather: WeatherElement[];
	clouds: Clouds;
	wind: Wind;
	visibility: number;
	pop: number;
	sys: Sys;
	dt_txt: Date;
	rain?: Rain;
}

export interface Clouds {
	all: number;
}

export interface MainClass {
	temp: number;
	feels_like: number;
	temp_min: number;
	tempMax: number;
	pressure: number;
	seaLevel: number;
	grndLevel: number;
	humidity: number;
	tempKf: number;
}

export interface Rain {
	the3H: number;
}

export interface Sys {
	pod: Pod;
}

export enum Pod {
	D = "d",
	N = "n",
}

export interface WeatherElement {
	id: number;
	main: MainEnum;
	description: Description;
	icon: string;
}

export enum Description {
	BrokenClouds = "broken clouds",
	ClearSky = "clear sky",
	FewClouds = "few clouds",
	LightRain = "light rain",
	OvercastClouds = "overcast clouds",
	ScatteredClouds = "scattered clouds",
}

export enum MainEnum {
	Clear = "Clear",
	Clouds = "Clouds",
	Rain = "Rain",
}

export interface Wind {
	speed: number;
	deg: number;
}
