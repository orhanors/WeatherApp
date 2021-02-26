interface UserData {
	_id: string;
	name: string;
	surname: string;
	email: string;
	password?: string;
	image: string;
	role: number;
	googleId?: string;
	facebookId?: string;
	favoriteCities: Array<object>;
}
export interface IUser {
	data: UserData | object;
	isLoggedIn: boolean;
	errorMessage: string;
	loading: boolean;
}
