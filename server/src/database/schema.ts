import { InferInsertModel, InferSelectModel, relations } from 'drizzle-orm';
import {
  date,
  numeric,
  pgEnum,
  pgTable,
  text,
  timestamp,
  unique,
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
  amount: numeric('amount', { precision: 10, scale: 2 })
    .$type<number>()
    .notNull(),
  description: text('description'),
  date: date('date').notNull(),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export const categoryRelations = relations(transactions, ({ one }) => ({
  category: one(categories, {
    fields: [transactions.category_id],
    references: [categories.id],
  }),
}));

export type NewTransaction = InferInsertModel<typeof transactions>;
export type Transactions = InferSelectModel<typeof transactions>;

export const budget = pgTable(
  'budget',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    category_id: uuid('category_id').references(() => categories.id),
    user_id: uuid('user_id').references(() => users.id),
    amount: numeric('amount', { precision: 10, scale: 2 })
      .$type<number>()
      .notNull(),
    created_at: timestamp('created_at').notNull().defaultNow(),
    updated_at: timestamp('updated_at').notNull().defaultNow(),
  },
  (t) => ({
    category_user: unique('category_user').on(t.category_id, t.user_id),
  }),
);

export type NewBudget = InferInsertModel<typeof budget>;
export type Budgets = InferSelectModel<typeof budget>;
