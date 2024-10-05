import { relations } from "drizzle-orm";
import { pgTable, serial } from "drizzle-orm/pg-core";
import { messages } from "./messages";
import { userChats } from "./user-chats";

export const chats = pgTable("chats", {
    id: serial("id").primaryKey(),
});

export const chatsRelations = relations(chats, ({ many }) => ({
    user_chats: many(userChats),
    messages: many(messages),
}));
