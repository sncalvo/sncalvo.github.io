import { blogPost } from '../../../migrations/schema';
import { db } from '../../server/db/client';

export default async function getAll() {
  const blogs = await db.select().from(blogPost).all();

  return blogs;
}
