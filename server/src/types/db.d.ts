import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../database/schema';

type PGDatabase = NodePgDatabase<typeof schema>;
