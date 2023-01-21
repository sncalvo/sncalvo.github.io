import { supabase, Database } from '../../server/db/client';

export default async function get(id: string) {
  const blog = (await supabase.from('BlogPost').select('*').eq('id', id)).data[0];

  return blog;
}
