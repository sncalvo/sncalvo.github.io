import { createClient } from "@libsql/client/web";
import { drizzle } from 'drizzle-orm/libsql';

const client = createClient({ url: import.meta.env.DATABASE_URL, authToken: import.meta.env.DATABASE_AUTH_TOKEN });

export const db = drizzle(client);
