import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';

const pool = new Pool({
  connectionString: import.meta.env.DATABASE_URL,
});

export const db = drizzle(pool);
