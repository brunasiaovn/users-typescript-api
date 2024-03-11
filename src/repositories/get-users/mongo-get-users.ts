import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { MongoClient } from "../../database/mongo";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    const users = await MongoClient.db.collection<User>('users').find({}).toArray();
    user[0].
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
