import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { categories } from "./categories";
import { messages } from "./messages";

export const channels = pgTable("channels", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    description: text("description").notNull(),

    category_id: integer("category_id")
        .references(() => categories.id)
        .notNull(),
});

export const channelsRelations = relations(channels, ({ one, many }) => ({
    category: one(categories, {
        fields: [channels.category_id],
        references: [categories.id],
    }),

    messages: many(messages),
}));
