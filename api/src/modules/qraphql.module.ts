import { join } from "path";
import { DynamicModule, Inject, Module } from "@nestjs/common";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GraphQLModule as GM } from "@nestjs/graphql";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { UUID } from "../tools/scalar/uuid";
import { PubSub } from "graphql-subscriptions";

const PUB_SUB_TOKEN = "PUB_SUB";

export const InjectPubSub = () => Inject(PUB_SUB_TOKEN);

@Module({})
export class GraphQLModule {
  public static forRoot(): DynamicModule {
    const punSub = {
      provide: PUB_SUB_TOKEN,
      useValue: new PubSub(),
    };

    return {
      global: true,
      module: GraphQLModule,
      imports: [
        GM.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          autoSchemaFile: join(process.cwd(), "schema.gql"),
          resolvers: { UUID },
          playground: false,
          plugins: [ApolloServerPluginLandingPageLocalDefault()],
          subscriptions: {
            "graphql-ws": {
              path: "/graphql",
            },
          },
        }),
      ],
      providers: [punSub],
      exports: [punSub],
    };
  }
}
