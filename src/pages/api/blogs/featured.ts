import { getFeatured } from '../../../services/blogs';

export async function get() {
  const blogs = getFeatured()

  return new Response(JSON.stringify(blogs), {
    status: 200,
  });
}
