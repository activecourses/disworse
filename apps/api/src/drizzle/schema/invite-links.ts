import { relations } from "drizzle-orm";
import { date, integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { servers } from "./server";
import { serverUsers } from "./server-user";
import { users } from "./user";

export const inviteLinks = pgTable("invite-links", {
    id: serial("id").primaryKey(),
    link: varchar("link").notNull(),
    expires_at: date("expires_at").notNull(),
    created_at: date("created_at").notNull().defaultNow(),

    server_id: integer("server_id")
        .references(() => servers.id)
        .notNull(),
    creator_id: integer("creator_id")
        .references(() => users.id)
        .notNull(),
});

export const inviteLinksRelation = relations(inviteLinks, ({ one }) => ({
    server: one(servers, {
        fields: [inviteLinks.server_id],
        references: [servers.id],
    }),

    creator: one(serverUsers, {
        fields: [inviteLinks.creator_id],
        references: [serverUsers.id],
    }),
}));
