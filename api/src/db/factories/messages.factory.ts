import { setSeederFactory } from "typeorm-extension";
import MessageEntity from "../entities/message.entity";

export default setSeederFactory(MessageEntity, faker => {
  const message = new MessageEntity();
  message.content = faker.datatype.string();
  message.memberId = faker.datatype.uuid();
  message.channelId = faker.datatype.uuid();
  return message;
});
