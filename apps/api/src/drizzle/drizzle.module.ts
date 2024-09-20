import { DrizzlePGModule } from "@knaadh/nestjs-drizzle-pg";
import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as schema from "./schema";
const ConnectionString = new ConfigService().get("DATABASE_URL");

@Module({
    imports: [
        DrizzlePGModule.register({
            tag: "DB_DEV",
            pg: {
                connection: "client",
                config: {
                    connectionString: ConnectionString,
                },
            },
            config: { schema: { ...schema } },
        }),
    ],
})
export class AppModule {}
