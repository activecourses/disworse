import { ConfigModule, ConfigService } from "@nestjs/config";
import { defineConfig } from "drizzle-kit";

const databaseUrl = new ConfigService().get("");

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/drizzle/schema",
    out: "./src/drizzle/migrations",
    dbCredentials: {
        url: databaseUrl,
    },
});
