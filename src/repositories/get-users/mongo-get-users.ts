import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Bruna",
        lastName: "Novais",
        email: "bruna@gmail.com",
        password: "123",
      },
    ];
  }
}
