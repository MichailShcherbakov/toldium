import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { DataSource } from "typeorm";
import UserEntity from "../entities/user.entity";
import ChannelEntity, { ChannelKind } from "../entities/channel.entity";
import MemberEntity from "../entities/member.entity";
import { faker } from "@faker-js/faker";
import MessageEntity from "../entities/message.entity";

export default class MainSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const userFactory = await factoryManager.get(UserEntity);
    const [mainUser, ...users] = await userFactory.saveMany(11);

    console.log({ mainUser });

    const channelFactory = await factoryManager.get(ChannelEntity);
    const channels = await channelFactory.saveMany(10);

    const membersRepo = dataSource.getRepository(MemberEntity);

    let dialogsCount = 0;

    const messagesFactory = await factoryManager.get(MessageEntity);

    for (const channel of channels) {
      const members: MemberEntity[] = [
        await membersRepo.save({
          channelId: channel.id,
          userId: mainUser.id,
        }),
      ];

      switch (channel.kind) {
        case ChannelKind.DIALOG: {
          const user = users[dialogsCount++];

          members.push(
            await membersRepo.save({
              channelId: channel.id,
              userId: user.id,
            }),
          );

          break;
        }
        case ChannelKind.GROUP:
        case ChannelKind.PUBLIC: {
          for (let i = 0; i < faker.datatype.number({ min: 0, max: 5 }); ++i) {
            const userId = faker.datatype.number({
              min: 0,
              max: users.length - 1,
            });
            const user = users[userId];

            members.push(
              await membersRepo.save({
                channelId: channel.id,
                userId: user.id,
              }),
            );
          }
          break;
        }
      }

      for (let i = 0; i < faker.datatype.number({ min: 0, max: 5 }); ++i) {
        const memberId = faker.datatype.number({
          min: 0,
          max: members.length - 1,
        });
        const member = members[memberId];

        const messages = await messagesFactory.saveMany(
          faker.datatype.number({
            min: 0,
            max: 3,
          }),
          {
            memberId: member.id,
            channelId: channel.id,
          },
        );

        if (messages.some(m => m.channelId !== channel.id)) {
          throw new Error("BAD");
        }
      }
    }
  }
}
