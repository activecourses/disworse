import { date, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const user = pgTable("users", {
    id: serial("id").primaryKey(),
    username: varchar("username", { length: 48 }).notNull().unique(),
    fullName: varchar("full_name", { length: 64 }).notNull(),
    email: varchar("email", { length: 64 }).notNull().unique(),
    bio: varchar("bio", { length: 255 }),
    dob: date("dob").notNull(), // date of birth
    profile_image_url: varchar("profile_image_url", { length: 255 }),
    cover_image_url: varchar("cover_image_url", { length: 255 }),
    session: varchar("refresh_token", { length: 128 }),
    google_id: varchar("google_id", { length: 128 }),
    github_id: varchar("github_id", { length: 128 }),
    created_at: date("created_at").defaultNow(),
    updated_at: date("updated_at").defaultNow(),
    deleted_at: date("deleted_at"),
});