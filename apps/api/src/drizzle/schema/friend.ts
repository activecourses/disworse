import { date, index, integer, pgTable, primaryKey } from "drizzle-orm/pg-core";

export const friend = pgTable(
    "friends",
    {
        user1_id: integer("user1_id").notNull(),
        user2_id: integer("user2_id").notNull(),
        created_at: date("created_at").defaultNow(),
    },
    (table) => {
        return {
            pk: primaryKey({
                name: "test",
                columns: [table.user1_id, table.user2_id],
            }),
            user2Idx: index().on(table.user2_id, table.user1_id),
        };
    },
);
