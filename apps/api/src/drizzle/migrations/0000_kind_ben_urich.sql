CREATE TABLE IF NOT EXISTS "friends" (
	"user1_id" integer NOT NULL,
	"user2_id" integer NOT NULL,
	"created_at" date DEFAULT now(),
	CONSTRAINT "test" PRIMARY KEY("user1_id","user2_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(48) NOT NULL,
	"full_name" varchar(64) NOT NULL,
	"email" varchar(64) NOT NULL,
	"bio" varchar(255),
	"dob" date NOT NULL,
	"profile_image_url" varchar(255),
	"cover_image_url" varchar(255),
	"refresh_token" varchar(128),
	"google_id" varchar(128),
	"github_id" varchar(128),
	"created_at" date DEFAULT now(),
	"updated_at" date DEFAULT now(),
	"deleted_at" date,
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "friends_user2_id_user1_id_index" ON "friends" USING btree ("user2_id","user1_id");