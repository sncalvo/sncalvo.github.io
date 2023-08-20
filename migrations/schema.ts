import type { InferModel } from "drizzle-orm"
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const blogPost = sqliteTable("BlogPost", {
  id: text("id").notNull(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  published: integer("published").notNull(),
  thumbnail: text("thumbnail").notNull(),
  link: text("link").notNull(),
});

export type BlogPost = InferModel<typeof blogPost>;
