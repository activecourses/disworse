import { relations } from "drizzle-orm";
import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { inviteLinks } from "./invite-links";
import { serverUsers } from "./server-user";

export const servers = pgTable("servers", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    image_url: varchar("image_url").notNull(),

    owner_id: integer("owner_id").notNull(), // TODO: figure out the right relation for the owner (the egg and the chicken dilemma)
});

export const serversRelation = relations(servers, ({ one, many }) => ({
    users: many(serverUsers),
    owner: one(serverUsers), // TODO: same as above
    invite_links: many(inviteLinks),
}));
