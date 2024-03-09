import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/users";

export class MongoGetUserRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Bruna",
        lastName: "Novais",
        email: "brunateste@gmail.com",
        password: "admin",
      },
    ];
  }
}
