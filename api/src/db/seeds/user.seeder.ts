import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { DataSource } from "typeorm";
import UserEntity from "../entities/user.entity";

export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const repository = dataSource.getRepository(UserEntity);
    await repository.insert([
      {
        name: "Caleb",
        email: "caleb.barrows@gmail.com",
        password: "123456789",
        avatarURL:
          "https://static.vecteezy.com/system/resources/previews/002/151/870/large_2x/cute-and-funny-little-cat-cartoon-illustration-vector.jpg",
      },
    ]);

    const userFactory = await factoryManager.get(UserEntity);
    await userFactory.saveMany(5);
  }
}
