import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    username: text("name").notNull().unique(),
    email: text("email").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow(),
});
