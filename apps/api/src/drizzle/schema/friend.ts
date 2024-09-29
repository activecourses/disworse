import { ne, relations, sql } from "drizzle-orm";
import {
    check,
    date,
    index,
    integer,
    pgTable,
    serial,
} from "drizzle-orm/pg-core";
import { users } from "./user";

export const friends = pgTable(
    "friends",
    {
        id: serial("id").primaryKey(),
        created_at: date("created_at").notNull().defaultNow(),

        user1_id: integer("user1_id")
            .references(() => users.id)
            .notNull(),
        user2_id: integer("user2_id")
            .references(() => users.id)
            .notNull(),
    },
    ({ user1_id, user2_id }) => ({
        user2Idx: index().on(user2_id, user1_id),
        // not_eq: check("not_eq", ne(user1_id, user2_id)), // WARN(drizzle)!: not implemented in drizzle yet, needs a work around
    }),
);

export const friendRelation = relations(friends, ({ one }) => ({
    user1: one(users, {
        fields: [friends.user1_id],
        references: [users.id],
        relationName: "user1",
    }),
    user2: one(users, {
        fields: [friends.user2_id],
        references: [users.id],
        relationName: "user2",
    }),
}));
