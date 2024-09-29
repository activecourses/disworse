import { relations } from "drizzle-orm";
import { integer, pgTable, serial } from "drizzle-orm/pg-core";
import { chats } from "./chats";
import { users } from "./user";

export const userChats = pgTable("user-chats", {
    id: serial("id").primaryKey(),

    user_id: integer("user_id")
        .references(() => users.id)
        .notNull(),
    chat_id: integer("chat_id")
        .references(() => chats.id)
        .notNull(),
});

export const userChatsRelations = relations(userChats, ({ one }) => ({
    user: one(users, { fields: [userChats.user_id], references: [users.id] }),
    chat: one(chats, { fields: [userChats.chat_id], references: [chats.id] }),
}));
