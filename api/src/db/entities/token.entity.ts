import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { IEntity } from "./entity.interface";
import UserEntity from "./user.entity";

@Entity({ name: "tokens" })
export class TokenEntity extends IEntity {
  @Column()
  token!: string;

  @Column({ name: "expires_at", default: () => "NOW()" })
  expiresAt!: Date;

  @Column({ type: "uuid", name: "user_id" })
  userId!: UserEntity["id"];

  @ManyToOne(_type => UserEntity)
  @JoinColumn({
    name: "user_id",
    referencedColumnName: "id",
  })
  user!: UserEntity | undefined;
}

export default TokenEntity;
