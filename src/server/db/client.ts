import { createClient } from '@supabase/supabase-js';

export interface Database {
  public: {
    Tables: {
      BlogPost: {
        Row: {
          id: string;
          title: string;
          content: string;
          published: boolean;
          thumbnail: string;
          link: string;
        };
        Insert: {};
        Update: {};
      };
    };
    Views: {};
    Functions: {};
  };
}

const supabase = createClient<Database, 'public', Database['public']>(
  import.meta.env.DATABASE_URL,
  import.meta.env.DATABASE_KEY,
);

export { supabase };
