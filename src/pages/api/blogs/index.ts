import { getAll as getBlogs } from '../../../services/blogs';

export async function get() {
  const blogs = getBlogs();

  return new Response(JSON.stringify(blogs), {
    status: 200,
  });
}
