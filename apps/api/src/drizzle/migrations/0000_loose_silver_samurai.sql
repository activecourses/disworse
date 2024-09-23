CREATE TABLE IF NOT EXISTS "friends" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar(48) NOT NULL,
	"friend_id" varchar(48) NOT NULL,
	"created_at" date DEFAULT now(),
	"updated_at" date DEFAULT now(),
	"deleted_at" date
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
