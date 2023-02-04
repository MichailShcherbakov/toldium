import * as bcrypt from "bcryptjs";
import { setSeederFactory } from "typeorm-extension";
import UserEntity from "../entities/user.entity";

export default setSeederFactory(UserEntity, faker => {
  const user = new UserEntity();
  user.name = faker.name.firstName();
  user.email = faker.internet.email();
  user.avatarURL = faker.internet.avatar();
  user.password = bcrypt.hashSync("123456789", bcrypt.genSaltSync());
  return user;
});
