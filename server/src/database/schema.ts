import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import {
  date,
  integer,
  pgEnum,
  pgTable,
  text,
  time,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  password: text('password').notNull(),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export type NewUser = InferInsertModel<typeof users>;
export type User = InferSelectModel<typeof users>;

export const categories = pgTable('categories', {
  id: uuid('id').primaryKey().defaultRandom(),
  user_id: uuid('user_id').references(() => users.id),
  name: varchar('name', { length: 255 }).notNull(),
  icon: text('icon'),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export type NewCategory = InferInsertModel<typeof categories>;
export type Categories = InferSelectModel<typeof categories>;

export const transactionTypeEnum = pgEnum('transaction_type', [
  'income',
  'expense',
]);

export const transactions = pgTable('transactions', {
  id: uuid('id').primaryKey().defaultRandom(),
  user_id: uuid('user_id').references(() => users.id),
  category_id: uuid('category_id').references(() => categories.id),
  type: transactionTypeEnum('type'),
  amount: integer('amount').notNull(),
  date: date('date').notNull(),
  time: time('time').notNull(),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export type NewTransaction = InferInsertModel<typeof transactions>;
export type Transactions = InferSelectModel<typeof transactions>;

export const budget = pgTable('budget', {
  id: uuid('id').primaryKey().defaultRandom(),
  category_id: uuid('category_id').references(() => categories.id),
  name: varchar('name', { length: 255 }).notNull(),
  month: varchar('month').notNull(),
  year: varchar('year').notNull(),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});
