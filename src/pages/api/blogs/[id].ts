import { get as getBlog } from '../../../services/blogs';

export async function get({ params: { id } }: { params: { id: string } }) {
  const blog = getBlog(id);

  return new Response(JSON.stringify(blog), {
    status: 200,
  });
}
