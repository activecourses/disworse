import { ConfigService } from '@nestjs/config';
import { defineConfig } from 'drizzle-kit';

const databaseUrl = new ConfigService().get('DATABASE_URL');

export default defineConfig({
    dialect: 'postgresql',
    schema: './src/drizzle/schema.ts',
    out: './src/drizzle/migrations',
    dbCredentials: {
        url: databaseUrl,
    },
});