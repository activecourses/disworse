import { Module } from '@nestjs/common';
import * as schema from './schema';
import { DrizzlePGModule } from '@knaadh/nestjs-drizzle-pg';
import { ConfigService } from '@nestjs/config';
const ConnectionString = new ConfigService().get('DATABASE_URL');

@Module({
  imports: [
    DrizzlePGModule.register({
      tag: 'DB_DEV',
      pg: {
        connection: 'client',
        config: {
          connectionString: ConnectionString,
        },
      },
      config: { schema: { ...schema } },
    }),
  ]
})
export class AppModule {}