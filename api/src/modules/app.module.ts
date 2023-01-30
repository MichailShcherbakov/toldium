import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { DbModule } from "../db/db.module";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { UUID } from "../tools/scalar/uuid";
import { join } from "path";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "schema.gql"),
      resolvers: { UUID },
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    DbModule,
    UsersModule,
  ],
})
export class AppModule {}
