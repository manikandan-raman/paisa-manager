export interface IUser {
  id: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface IError {
  message: string;
  error: string;
  statusCode: number;
}

export interface IFilterOptions {
  limit?: number;
  offset?: number;
}
