import { prisma } from '../../server/db/client';

export default async function get(id: string) {
  const blog = await prisma.blogPost.findUnique({ where: { id } });

  return blog;
}
