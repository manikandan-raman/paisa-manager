import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  driver: 'pg',
  schema: './src/database/schema.ts',
  out: './src/database/migrations',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
});
