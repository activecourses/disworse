import { relations } from "drizzle-orm";
import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { inviteLinks } from "./invite-links";
import { serverUsers } from "./server-user";
import { users } from "./user";

export const servers = pgTable("servers", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    image_url: varchar("image_url").notNull(),

    owner_id: integer("owner_id")
        .references(() => users.id) // not serverUsers as a server can't exist without a user, and serverUsers needs to be linked to an existing server; see the circle there!
        .notNull(),
});

export const serversRelation = relations(servers, ({ one, many }) => ({
    users: many(serverUsers),
    owner: one(users, { fields: [servers.owner_id], references: [users.id] }),
    invite_links: many(inviteLinks),
}));
