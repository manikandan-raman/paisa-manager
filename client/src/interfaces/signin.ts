import { IUser } from "./common";

export interface ILoginForm {
  email: string;
  password: string;
}

export interface ILoginResponse {
  user: IUser;
  access_token: string;
}
