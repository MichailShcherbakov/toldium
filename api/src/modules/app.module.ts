import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { DbModule } from "../db/db.module";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { UUID } from "../tools/scalar/uuid";
import { join } from "path";
import { UsersModule } from "./users/users.module";
import { MessagesModule } from "./messages/messages.module";
import { ChannelsModule } from "./channels/channels.module";
import { MembersModule } from "./members/members.module";

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
    MessagesModule,
    ChannelsModule,
    MembersModule,
  ],
})
export class AppModule {}
