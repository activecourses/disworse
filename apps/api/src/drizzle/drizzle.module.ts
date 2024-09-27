import { DrizzlePGModule } from "@knaadh/nestjs-drizzle-pg";
import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as schema from "./schema";

@Module({
    imports: [
        DrizzlePGModule.registerAsync({
            tag: "DB_DEV",
            useFactory: (configService: ConfigService) => ({
                pg: {
                    connection: "pool",
                    config: {
                        connectionString:
                            configService.getOrThrow("DATABASE_URL"),
                    },
                },
                config: { schema },
            }),
            inject: [ConfigService],
        }),
    ],
})
export class DrizzleModule {}
