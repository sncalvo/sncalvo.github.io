import pg from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';

const pool = new pg.Pool({
  connectionString: import.meta.env.DATABASE_URL,
});

export const db = drizzle(pool);
