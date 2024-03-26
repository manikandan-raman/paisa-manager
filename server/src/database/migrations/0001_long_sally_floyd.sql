ALTER TABLE "transactions" ADD COLUMN "description" text;--> statement-breakpoint
ALTER TABLE "transactions" DROP COLUMN IF EXISTS "time";