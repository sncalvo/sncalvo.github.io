import { supabase } from '../../server/db/client';

export default async function getAll() {
  const blogs = (await supabase.from('BlogPost').select('*')).data;

  return blogs;
}
