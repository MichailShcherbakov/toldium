import { join } from "path";
import { DynamicModule, Inject, Module } from "@nestjs/common";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GraphQLModule as GM } from "@nestjs/graphql";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { UUID } from "../tools/scalar/uuid";
import { PubSub } from "graphql-subscriptions";
import { Context } from "graphql-ws";

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
          cors: {
            credentials: true,
            origin: true,
          },
          subscriptions: {
            "graphql-ws": {
              path: "/graphql",
              onConnect: (context: Context<any>) => {
                /*  const { connectionParams, extra } = context;

                extra.user = { user: {} }; */
              },
            },
          },
          context: context => {
            /* if (context?.extra?.request) {
              return {
                req: {
                  ...context?.extra?.request,
                  headers: {
                    ...context?.extra?.request?.headers,
                    ...context?.connectionParams,
                  },
                },
              };
            } */

            return { req: context.req, res: context.res };
          },
        }),
      ],
      providers: [punSub],
      exports: [punSub],
    };
  }
}
