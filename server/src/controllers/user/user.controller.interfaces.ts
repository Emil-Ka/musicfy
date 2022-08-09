import { Request } from 'express';

export enum Roles {
	USER = 'USER',
	ADMIN = 'ADMIN',
}

export interface IRegistrationReqBody {
	name: string | undefined;
	email: string | undefined;
	password: string | undefined;
	role: Roles | undefined;
}

export interface ILoginReqBody {
	email: string | undefined;
	password: string | undefined;
}

export interface UserRequest extends Request {
	user: {
		[key: string]: any;
	};
}
