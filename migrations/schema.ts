import type { InferModel } from "drizzle-orm"
import { pgTable, pgEnum, pgSchema, AnyPgColumn, text, boolean, varchar, timestamp, integer } from "drizzle-orm/pg-core"

export const keyStatus = pgEnum("key_status", ['default', 'valid', 'invalid', 'expired'])
export const keyType = pgEnum("key_type", ['aead-ietf', 'aead-det', 'hmacsha512', 'hmacsha256', 'auth', 'shorthash', 'generichash', 'kdf', 'secretbox', 'secretstream', 'stream_xchacha20'])
export const aalLevel = pgEnum("aal_level", ['aal1', 'aal2', 'aal3'])
export const factorStatus = pgEnum("factor_status", ['unverified', 'verified'])
export const factorType = pgEnum("factor_type", ['totp', 'webauthn'])
export const codeChallengeMethod = pgEnum("code_challenge_method", ['s256', 'plain'])

import { sql } from "drizzle-orm/sql"

export const blogPost = pgTable("BlogPost", {
	id: text("id").notNull(),
	title: text("title").notNull(),
	content: text("content").notNull(),
	published: boolean("published").notNull(),
	thumbnail: text("thumbnail").notNull(),
	link: text("link"),
});

export type BlogPost = InferModel<typeof blogPost>;

export const prismaMigrations = pgTable("_prisma_migrations", {
	id: varchar("id", { length: 36 }).notNull(),
	checksum: varchar("checksum", { length: 64 }).notNull(),
	finishedAt: timestamp("finished_at", { withTimezone: true, mode: 'string' }),
	migrationName: varchar("migration_name", { length: 255 }).notNull(),
	logs: text("logs"),
	rolledBackAt: timestamp("rolled_back_at", { withTimezone: true, mode: 'string' }),
	startedAt: timestamp("started_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	appliedStepsCount: integer("applied_steps_count").notNull(),
});
