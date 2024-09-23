import { date, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const friend = pgTable("friends", {
    id: serial("id").primaryKey(),
    user_id: varchar("user_id", { length: 48 }).notNull(),
    friend_id: varchar("friend_id", { length: 48 }).notNull(),
    created_at: date("created_at").defaultNow(),
    updated_at: date("updated_at").defaultNow(),
    deleted_at: date("deleted_at"),
});
