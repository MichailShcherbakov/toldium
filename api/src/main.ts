import * as cookieParser from "cookie-parser";
import { NestFactory } from "@nestjs/core";
import { PORT } from "~/config";
import { AppModule } from "~/modules/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    origin: ["http://127.0.0.1:5173", "https://studio.apollographql.com"],
    credentials: true,
  });

  app.use(cookieParser());

  await app.listen(PORT);
}

bootstrap();
