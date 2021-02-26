interface UserData {
	_id?: string;
	name?: string;
	surname?: string;
	email?: string;
	password?: string;
	image?: string;
	role?: number;
	googleId?: string;
	facebookId?: string;
	favoriteCities?: Array<string>;
}
export interface IUser {
	data: UserData;
	isLoggedIn: boolean;
	errorMessage: string;
	loading: boolean;
}
