import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import ChannelEntity from "~/db/entities/channel.entity";
import MessageEntity from "~/db/entities/message.entity";
import { Message } from "./message.model";
import { CreateMessageInput } from "./messages.input";

export type PrimitiveMessage = Omit<Message, "channel" | "member">;

@Injectable()
export class MessagesService {
  public constructor(
    @InjectRepository(MessageEntity)
    private readonly messagesRepo: Repository<MessageEntity>,
  ) {}

  public async createMessage(
    input: CreateMessageInput,
  ): Promise<MessageEntity> {
    return await this.messagesRepo.save(
      this.messagesRepo.create({
        memberId: input.memberId,
        channelId: input.channelId,
        content: input.content,
      }),
    );
  }

  public async getMessagesByChannelId(
    channelId: ChannelEntity["id"],
  ): Promise<MessageEntity[]> {
    return this.messagesRepo.findBy({
      channelId,
    });
  }

  public async getLastMessageByChannelId(
    channelId: ChannelEntity["id"],
  ): Promise<MessageEntity | null> {
    return this.messagesRepo.findOne({
      where: {
        channelId,
      },
      order: {
        createdAt: "DESC",
      },
    });
  }

  public convertEntityToModel(entity: MessageEntity): PrimitiveMessage {
    return {
      id: entity.id,
      content: entity.content,
      memberId: entity.memberId,
      channelId: entity.channelId,
      updatedAt: entity.updatedAt,
      createdAt: entity.createdAt,
    };
  }
}
