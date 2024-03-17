import { IUser } from "./common";

export interface IRegistrationForm {
  name: string;
  email: string;
  password: string;
}

export interface ISignUpResponse extends IUser {}
