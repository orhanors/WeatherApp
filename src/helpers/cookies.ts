import Cookies from "js-cookie";

export const setCookie = (key: string, value: any) => {
	Cookies.set(key, value, { expires: 1 }); //expires 1 day
};

export const getCookie = (key: string) => {
	return Cookies.get(key);
};

export const deleteCookie = (key: string) => {
	Cookies.remove(key);
};
