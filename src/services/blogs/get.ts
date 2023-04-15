import { eq } from 'drizzle-orm';
import { blogPost } from '../../../migrations/schema';
import { db } from '../../server/db/client';

export default async function get(id: string) {
  const blog = await db.select().from(blogPost).where(eq(blogPost.id, id));

  return blog;
}
