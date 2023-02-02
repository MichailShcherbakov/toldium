import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import UserEntity from "~/db/entities/user.entity";
import { User } from "./user.model";

export type PrimitiveUser = User;

@Injectable()
export class UsersService {
  public constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepo: Repository<UserEntity>,
  ) {}

  public async getUsers(): Promise<UserEntity[]> {
    return this.usersRepo.find();
  }

  public async getUserByIds(
    userIds: UserEntity["id"][],
  ): Promise<UserEntity[]> {
    return this.usersRepo.findBy({
      id: In(userIds),
    });
  }

  public async getUserById(
    userId: UserEntity["id"],
  ): Promise<UserEntity | null> {
    return this.usersRepo.findOneBy({
      id: userId,
    });
  }

  public async getUserByIdOrFail(
    userId: UserEntity["id"],
  ): Promise<UserEntity> {
    return this.usersRepo.findOneByOrFail({
      id: userId,
    });
  }

  public convertEntityToModel(entity: UserEntity): PrimitiveUser {
    return {
      id: entity.id,
      name: entity.name,
      email: entity.email,
      avatarURL: entity.avatarURL,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
