import "~/env";
import { resolve, sep } from "path";
import { DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import * as pg from "pg";

// support UTC
pg.types.setTypeParser(
  pg.types.builtins.TIMESTAMP,
  (val: string) => new Date(`${val}Z`),
);

export const PORT = process.env.PORT ?? 3000;

export const TYPEORM_CONFIG: DataSourceOptions & SeederOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number.parseInt(process.env.DB_PORT ?? "5432"),
  entities: [
    resolve(__dirname, "db/entities/**/*.entity.{js,ts}").replaceAll(sep, "/"),
  ],
  migrations: [
    resolve(__dirname, "db/migrations/**/*.{js,ts}").replaceAll(sep, "/"),
  ],
  subscribers: [
    resolve(__dirname, "db/subscribers/**/*.{js,ts}").replaceAll(sep, "/"),
  ],
  seeds: [
    resolve(__dirname, "db/seeds/**/*.seeder.{js,ts}").replaceAll(sep, "/"),
  ],
  factories: [
    resolve(__dirname, "db/factories/**/*.factory.{js,ts}").replaceAll(
      sep,
      "/",
    ),
  ],
  migrationsRun: false,
  synchronize: false,
  logging: false,
};
