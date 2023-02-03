import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import UserEntity from "~/db/entities/user.entity";
import { User } from "./user.model";
import * as bcrypt from "bcryptjs";

export type PrimitiveUser = User;
export type CreateUserInput = Pick<UserEntity, "name" | "email" | "password"> &
  Partial<Pick<UserEntity, "avatarURL">>;

@Injectable()
export class UsersService {
  public constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepo: Repository<UserEntity>,
  ) {}

  public async getUsers(): Promise<UserEntity[]> {
    return this.usersRepo.find();
  }

  public async createUser(input: CreateUserInput): Promise<UserEntity> {
    const { name, email, password, avatarURL } = input;

    return this.usersRepo.save(
      this.usersRepo.create({
        name,
        email,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync()),
        avatarURL,
      }),
    );
  }

  public async getUserByEmail(
    email: UserEntity["email"],
  ): Promise<UserEntity | null> {
    return this.usersRepo.findOneBy({
      email,
    });
  }

  public async hasUserWithId(userId: UserEntity["id"]): Promise<boolean> {
    return this.usersRepo.exist({
      where: {
        id: userId,
      },
    });
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
