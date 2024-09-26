import { relations } from "drizzle-orm";
import { integer, pgEnum, pgTable, serial } from "drizzle-orm/pg-core";
import { users } from "./user";

export const status = pgEnum("status", ["pending", "rejected", "accepted"]);

export const friendRequests = pgTable("friend-requests", {
    id: serial("id").primaryKey(),
    status: status("status").notNull().default("pending"),

    sender_id: integer("sender_id")
        .references(() => users.id)
        .notNull(),
    receiver_id: integer("receiver_id")
        .references(() => users.id)
        .notNull(),
});

export const friendRequestsRelations = relations(friendRequests, ({ one }) => ({
    sender: one(users, {
        fields: [friendRequests.sender_id],
        references: [users.id],
    }),

    receiver: one(users, {
        fields: [friendRequests.receiver_id],
        references: [users.id],
    }),
}));
