import { setSeederFactory } from "typeorm-extension";
import ChannelEntity, { ChannelKind } from "../entities/channel.entity";

export default setSeederFactory(ChannelEntity, faker => {
  const channel = new ChannelEntity();
  channel.name = faker.name.firstName();
  channel.desc = faker.datatype.string();
  channel.avatarURL = faker.internet.avatar();
  channel.memberLimit = faker.datatype.number();
  channel.kind = [ChannelKind.DIALOG, ChannelKind.GROUP, ChannelKind.PUBLIC][
    faker.datatype.number({ max: 2 })
  ];
  return channel;
});
