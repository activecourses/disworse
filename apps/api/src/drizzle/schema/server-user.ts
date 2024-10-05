import { relations } from "drizzle-orm";
import { integer, pgTable, primaryKey, serial } from "drizzle-orm/pg-core";
import { inviteLinks } from "./invite-links";
import { servers } from "./server";
import { users } from "./user";

export const serverUsers = pgTable("server-users", {
    id: serial("id").primaryKey(),

    server_id: integer("server_id")
        .references(() => servers.id)
        .notNull(),
    user_id: integer("user_id")
        .references(() => users.id)
        .notNull(),
});

export const serverUserRelation = relations(serverUsers, ({ one, many }) => ({
    servers: one(servers, {
        fields: [serverUsers.server_id],
        references: [servers.id],
    }),
    users: one(users, {
        fields: [serverUsers.user_id],
        references: [users.id],
    }),
    invite_links: many(inviteLinks),
}));
