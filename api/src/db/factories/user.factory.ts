import { setSeederFactory } from "typeorm-extension";
import UserEntity from "../entities/user.entity";

export default setSeederFactory(UserEntity, faker => {
  const user = new UserEntity();
  user.name = faker.name.firstName();
  user.email = faker.internet.email();
  user.avatarURL = faker.internet.avatar();
  user.password = "123456789";
  return user;
});
