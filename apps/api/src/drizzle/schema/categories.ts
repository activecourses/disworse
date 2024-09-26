import { relations } from "drizzle-orm";
import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { channels } from "./channels";
import { servers } from "./server";

export const categories = pgTable("categories", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),

    server_id: integer("server_id")
        .references(() => servers.id)
        .notNull(),
});

export const categoriesRelations = relations(categories, ({ one, many }) => ({
    server: one(servers, {
        fields: [categories.server_id],
        references: [servers.id],
    }),

    channels: many(channels),
}));
