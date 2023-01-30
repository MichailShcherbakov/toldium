import { Column, Entity } from "typeorm";
import { IEntity } from "./entity.interface";

@Entity({ name: "users" })
export class UserEntity extends IEntity {
  @Column({ length: 255 })
  name!: string;

  @Column({ length: 255, unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ name: "avatar_url", nullable: true })
  avatarURL!: string;
}

export default UserEntity;
