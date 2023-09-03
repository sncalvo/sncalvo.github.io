import { createClient } from "@libsql/client/web";
import { drizzle } from 'drizzle-orm/libsql';

const DATABASE_URL = import.meta.env.DATABASE_URL || Deno.env.get('DATABASE_URL');
const DATABASE_AUTH_TOKEN = import.meta.env.DATABASE_AUTH_TOKEN || Deno.env.get('DATABASE_AUTH_TOKEN');

const client = createClient({ url: import.meta.env.DATABASE_URL, authToken: import.meta.env.DATABASE_AUTH_TOKEN });

export const db = drizzle(client);
