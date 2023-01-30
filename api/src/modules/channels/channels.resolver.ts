import { Query, Resolver } from "@nestjs/graphql";
import { v4 as uuid } from "uuid";
import { Channel } from "./channel.model";

@Resolver(() => Channel)
export class ChannelsResolver {}
