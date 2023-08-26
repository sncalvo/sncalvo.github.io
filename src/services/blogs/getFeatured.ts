import { blogPost } from '../../../migrations/schema';
import { db } from '../../server/db/client';
import { eq } from "drizzle-orm";

export default async function getFeatured() {
  const blogs = await db.select().from(blogPost).where(eq(blogPost.featured, 1)).all();

  return blogs;
}
