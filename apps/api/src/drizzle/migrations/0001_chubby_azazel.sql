ALTER TABLE "friends" RENAME COLUMN "id" TO "user1_id";--> statement-breakpoint
ALTER TABLE "friends" RENAME COLUMN "user_id" TO "user2_id";--> statement-breakpoint
/* 
    Unfortunately in current drizzle-kit version we can't automatically get name for primary key.
    We are working on making it available!

    Meanwhile you can:
        1. Check pk name in your database, by running
            SELECT constraint_name FROM information_schema.table_constraints
            WHERE table_schema = 'public'
                AND table_name = 'friends'
                AND constraint_type = 'PRIMARY KEY';
        2. Uncomment code below and paste pk name manually
        
    Hope to release this update as soon as possible
*/

-- ALTER TABLE "friends" DROP CONSTRAINT "<constraint_name>";--> statement-breakpoint
ALTER TABLE "friends" ALTER COLUMN "user1_id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "friends" ALTER COLUMN "user2_id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "friends" ADD CONSTRAINT "test" PRIMARY KEY("user1_id","user2_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "friends_user2_id_user1_id_index" ON "friends" USING btree ("user2_id","user1_id");--> statement-breakpoint
ALTER TABLE "friends" DROP COLUMN IF EXISTS "friend_id";--> statement-breakpoint
ALTER TABLE "friends" DROP COLUMN IF EXISTS "updated_at";--> statement-breakpoint
ALTER TABLE "friends" DROP COLUMN IF EXISTS "deleted_at";