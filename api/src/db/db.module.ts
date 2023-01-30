import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TYPEORM_CONFIG } from "~/config";

@Module({
  imports: [TypeOrmModule.forRoot(TYPEORM_CONFIG)],
})
export class DbModule {}
