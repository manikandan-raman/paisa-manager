import { Pool } from 'pg';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { NodePgDatabase, drizzle } from 'drizzle-orm/node-postgres';
import { ConfigService } from '@nestjs/config';

(async function () {
  const configService = new ConfigService();
  const pool = new Pool({
    connectionString: configService.get<string>('DATABASE_URL'),
  });
  const db: NodePgDatabase = drizzle(pool);

  console.log('migrations started....');

  await migrate(db, { migrationsFolder: 'src/database/migrations' });

  console.log('migrations completed');

  pool.end();
})();
