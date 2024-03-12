import { User } from "../../models/user";

export interface CreateUserParams {
  fristName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ICreateUserRepository {
  createUser(params: CreateUserParams): Promise<User>;
}
