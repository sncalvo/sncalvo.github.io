import { prisma } from '../../server/db/client';

export default async function getAll() {
  const blogs = await prisma.blogPost.findMany();

  return blogs;
}
