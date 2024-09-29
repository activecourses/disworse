import { relations } from "drizzle-orm";
import {
    boolean,
    integer,
    pgEnum,
    pgTable,
    serial,
    varchar,
} from "drizzle-orm/pg-core";
import { channels } from "./channels";
import { chats } from "./chats";
import { users } from "./user";

export const parentType = pgEnum("parent_type", ["chat", "channel"]);

export const contentType = pgEnum("contentType", ["audio", "text", "file"]);

export const messages = pgTable("messages", {
    id: serial("id").primaryKey(),
    parent_type: parentType("parent_type").notNull(),
    content_type: contentType("content_type").notNull(),
    content: varchar("content"),
    is_pinned: boolean("is_pinned").notNull().default(false),

    channel_id: integer("channel_id").references(() => channels.id),
    chat_id: integer("chat_id").references(() => chats.id),
    sender_id: integer("sender_id")
        .references(() => users.id)
        .notNull(), // TODO(1): make sense of this relation :/ (probably change it completely)
});

export const messagesRelations = relations(messages, ({ one }) => ({
    channel: one(channels, {
        fields: [messages.channel_id],
        references: [channels.id],
    }),

    chat: one(chats, {
        fields: [messages.channel_id],
        references: [chats.id],
    }),

    // TODO(1)
    sender: one(users, {
        fields: [messages.sender_id],
        references: [users.id],
    }),
}));
